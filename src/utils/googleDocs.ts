/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// LocalStorage Keys
const TOKEN_KEY = 'brilliant_google_access_token';
const EXPIRY_KEY = 'brilliant_google_token_expiry';
const DOC_ID_KEY = 'brilliant_google_doc_id';
const CLIENT_ID_KEY = 'brilliant_google_client_id';

// Default Client ID (users can change this in the UI to run on custom domains / local PCs)
export const DEFAULT_CLIENT_ID = '9076db80-f7da-4620-9214-d4aaf46f5e5f-dummy.apps.googleusercontent.com';

/**
 * Save custom Client ID to localStorage
 */
export function saveCustomClientId(clientId: string) {
  localStorage.setItem(CLIENT_ID_KEY, clientId.trim());
}

/**
 * Get custom Client ID from localStorage or fallback to default
 */
export function getClientId(): string {
  const saved = localStorage.getItem(CLIENT_ID_KEY);
  return saved ? saved.trim() : DEFAULT_CLIENT_ID;
}

/**
 * Start the Google OAuth2.0 Implicit Flow redirect
 */
export function initiateGoogleAuth() {
  const clientId = getClientId();
  const redirectUri = window.location.origin + window.location.pathname;
  const scope = 'https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.file';
  
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` + 
    `client_id=${encodeURIComponent(clientId)}&` + 
    `redirect_uri=${encodeURIComponent(redirectUri)}&` + 
    `response_type=token&` + 
    `scope=${encodeURIComponent(scope)}&` + 
    `prompt=consent`;
    
  window.location.href = authUrl;
}

/**
 * Parse and store access token from the URL hash fragment on mount
 */
export function handleOAuthCallback(): string | null {
  const hash = window.location.hash;
  if (!hash) return null;

  try {
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    const expiresIn = params.get('expires_in'); // in seconds

    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      if (expiresIn) {
        const expiryTime = Date.now() + parseInt(expiresIn, 10) * 1000;
        localStorage.setItem(EXPIRY_KEY, expiryTime.toString());
      } else {
        // Fallback: 1 hour
        localStorage.setItem(EXPIRY_KEY, (Date.now() + 3600 * 1000).toString());
      }
      
      // Clean up URL hash so fragment doesn't stay in address bar
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      return token;
    }
  } catch (error) {
    console.error('Error handling Google OAuth callback:', error);
  }
  return null;
}

/**
 * Get the active access token if still valid
 */
export function getAccessToken(): string | null {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiry = localStorage.getItem(EXPIRY_KEY);

  if (!token) return null;
  if (expiry) {
    const expiryTime = parseInt(expiry, 10);
    // If expired or expiring in less than 30 seconds, return null
    if (Date.now() > expiryTime - 30000) {
      logoutGoogle();
      return null;
    }
  }
  return token;
}

/**
 * Log out and clear keys
 */
export function logoutGoogle() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EXPIRY_KEY);
  localStorage.removeItem(DOC_ID_KEY);
}

/**
 * Create a new Document in Google Docs
 */
export async function createGoogleDoc(token: string, title: string): Promise<string> {
  const response = await fetch('https://docs.googleapis.com/v1/documents', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || 'গুগল ডকস ফাইল তৈরি করতে ব্যর্থ হয়েছে');
  }

  const doc = await response.json();
  if (doc.documentId) {
    localStorage.setItem(DOC_ID_KEY, doc.documentId);
    return doc.documentId;
  }
  throw new Error('কোনো ডকুমেন্ট আইডি পাওয়া যায়নি');
}

/**
 * Retrieve or dynamically create the logging document ID from localStorage or Google Drive
 */
export async function getOrCreateDocId(token: string): Promise<string> {
  const existingId = localStorage.getItem(DOC_ID_KEY);
  if (existingId) return existingId;

  // Otherwise, create a new document
  const defaultTitle = 'Brilliant Private Center - Admissions Inquiry Logs';
  return await createGoogleDoc(token, defaultTitle);
}

/**
 * Append information row at the end of the specified Google Document
 */
export async function appendToGoogleDoc(token: string, docId: string, text: string): Promise<boolean> {
  const response = await fetch(`https://docs.googleapis.com/v1/documents/${docId}:batchUpdate`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      requests: [
        {
          insertText: {
            text: text,
            endOfSegmentLocation: {}
          }
        }
      ]
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || 'গুগল ডকসে লেখা যুক্ত করতে ব্যর্থ হয়েছে');
  }

  return true;
}
