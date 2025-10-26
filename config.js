// OAuth Configuration
// Your actual OAuth credentials configured

const OAUTH_CONFIG = {
    google: {
        clientId: '585142524441-p7s5ln8copuk7isoh4tjd1h9dqtbgbov.apps.googleusercontent.com',
        redirectUri: 'https://shreyas-purkar52.github.io/edubridge/',
        scope: 'profile email'
    },
    github: {
        clientId: 'Ov23liLoAudsiZHkTdei',
        redirectUri: 'https://shreyas-purkar52.github.io/edubridge/',
        scope: 'read:user user:email'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OAUTH_CONFIG;
}
