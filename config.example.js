// OAuth Configuration Example
// Copy this file to config.js and fill in your actual credentials

const OAUTH_CONFIG = {
    google: {
        // Get this from: https://console.cloud.google.com/
        // Create OAuth 2.0 Client ID (Web application)
        clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
        
        // This should be your website URL
        // For local development: http://localhost:8000
        // For GitHub Pages: https://yourusername.github.io/edubridge
        redirectUri: window.location.origin,
        
        // Scopes - what information you want to access
        scope: 'profile email'
    },
    
    github: {
        // Get this from: https://github.com/settings/developers
        // Create OAuth App
        clientId: 'YOUR_GITHUB_CLIENT_ID',
        
        // Must match your OAuth App settings exactly
        redirectUri: window.location.origin,
        
        // Scopes - what information you want to access
        scope: 'read:user user:email'
    }
};

// Instructions:
// 1. Copy this file to config.js
// 2. Replace YOUR_GOOGLE_CLIENT_ID with your actual Google Client ID
// 3. Replace YOUR_GITHUB_CLIENT_ID with your actual GitHub Client ID
// 4. Update redirectUri if deploying to a different URL
// 5. Save and use config.js in your project

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OAUTH_CONFIG;
}