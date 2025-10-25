// OAuth Configuration
// Replace these with your actual OAuth credentials

const OAUTH_CONFIG = {
    google: {
        clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
        redirectUri: 'https://shreyas-purkar52.github.io/edubridge/',
        scope: 'profile email'
    },
    github: {
        clientId: 'YOUR_GITHUB_CLIENT_ID',
        redirectUri: 'https://shreyas-purkar52.github.io/edubridge/',
        scope: 'read:user user:email'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OAUTH_CONFIG;
}