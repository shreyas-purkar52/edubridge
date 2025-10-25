# 🚀 Quick Start: Enable Google & GitHub Login

## ⚡ 5-Minute Setup

### Step 1: Add the New Files

You now need **5 files** total:

```
edubridge/
├── index.html          ✅ (Updated)
├── style.css           ✅ (Same as before)
├── script.js           ✅ (Same as before)
├── config.js           🆕 (NEW - OAuth credentials)
├── oauth.js            🆕 (NEW - OAuth logic)
```

### Step 2: Get Google OAuth Credentials

**Quick Steps:**

1. Go to: https://console.cloud.google.com/
2. Create new project: "EduBridge"
3. Enable Google+ API
4. Create OAuth Client ID (Web application)
5. Add authorized origins:
   - `http://localhost:8000` (for testing)
   - `https://yourusername.github.io` (for production)
6. Copy your Client ID

### Step 3: Get GitHub OAuth Credentials

**Quick Steps:**

1. Go to: https://github.com/settings/developers
2. Click "OAuth Apps" → "New OAuth App"
3. Fill in:
   - Name: `EduBridge`
   - URL: `https://yourusername.github.io/edubridge`
   - Callback: `https://yourusername.github.io/edubridge`
4. Copy your Client ID

### Step 4: Update config.js

Replace the placeholders:

```javascript
const OAUTH_CONFIG = {
    google: {
        clientId: 'YOUR_ACTUAL_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
        redirectUri: window.location.origin,
        scope: 'profile email'
    },
    github: {
        clientId: 'YOUR_ACTUAL_GITHUB_CLIENT_ID',
        redirectUri: window.location.origin,
        scope: 'read:user user:email'
    }
};
```

### Step 5: Test It!

1. Open your website
2. Click "Log In"
3. Click "Google" button → Should redirect to Google
4. Authorize → Should log you in automatically! 🎉

---

## 🎯 What Works Now

✅ **Google Login**: Full authentication with user info
✅ **GitHub Login**: Basic flow (requires backend for full features)
✅ **User Profile**: Shows name and email from OAuth
✅ **Session Persistence**: Remembers logged-in users
✅ **Error Handling**: Shows helpful messages

---

## 🔐 Important Security Notes

### ⚠️ DO NOT commit credentials to GitHub!

Create a `.gitignore` file:

```
# Sensitive files
config.js

# Optional
.env
*.log
```

### ✅ Better Approach: Environment Variables

For production, use environment variables instead:

**config.js (Safe version):**
```javascript
const OAUTH_CONFIG = {
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID || 'fallback-client-id',
        redirectUri: window.location.origin,
        scope: 'profile email'
    },
    github: {
        clientId: process.env.GITHUB_CLIENT_ID || 'fallback-client-id',
        redirectUri: window.location.origin,
        scope: 'read:user user:email'
    }
};
```

---

## 🔄 How OAuth Works (Simplified)

```
User clicks "Login with Google"
    ↓
Redirect to Google login page
    ↓
User authorizes your app
    ↓
Google redirects back with access token
    ↓
Your app fetches user info
    ↓
User is logged in! ✨
```

---

## 💻 Full Implementation Example

### For GitHub (with Backend)

If you want full GitHub OAuth, create a serverless function:

**Netlify Function (netlify/functions/github-oauth.js):**

```javascript
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { code } = JSON.parse(event.body);
  
  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      }),
    });
    
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    
    // Fetch user info
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    
    const userData = await userResponse.json();
    
    // Fetch user email
    const emailResponse = await fetch('https://api.github.com/user/emails', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    
    const emailData = await emailResponse.json();
    const primaryEmail = emailData.find(email => email.primary)?.email;
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        name: userData.name || userData.login,
        email: primaryEmail || userData.email,
        picture: userData.avatar_url,
        provider: 'github'
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
```

Then update `oauth.js` to call this function.

---

## 📦 Deploy to Netlify with OAuth

### Step 1: Deploy Your Site

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

### Step 2: Set Environment Variables

In Netlify dashboard:
1. Go to Site Settings → Environment Variables
2. Add:
   - `GOOGLE_CLIENT_ID`: Your Google Client ID
   - `GITHUB_CLIENT_ID`: Your GitHub Client ID
   - `GITHUB_CLIENT_SECRET`: Your GitHub Client Secret

### Step 3: Update OAuth Settings

Update your OAuth app settings with your Netlify URL:
- `https://your-site-name.netlify.app`

---

## 🎨 Customize Login Buttons

The OAuth buttons are styled automatically! But you can customize them:

**style.css:**
```css
.btn-social {
    flex: 1;
    padding: 12px;
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

/* Google button */
.btn-social:first-child {
    background: #4285f4;
    border-color: #4285f4;
}

.btn-social:first-child:hover {
    background: #357ae8;
}

/* GitHub button */
.btn-social:last-child {
    background: #333;
    border-color: #333;
}

.btn-social:last-child:hover {
    background: #24292e;
}
```

---

## 🧪 Testing Tips

1. **Test in Incognito Mode**: Avoid cached credentials
2. **Clear localStorage**: `localStorage.clear()` in console
3. **Check Console**: F12 → Console tab for errors
4. **Verify URLs**: Make sure they match in OAuth settings

---

## 🐛 Common Issues & Solutions

### Issue: "redirect_uri_mismatch"
**Solution**: 
- Check that the URL in config.js matches OAuth settings
- Include or exclude `www.` consistently
- Match http vs https exactly

### Issue: "Access blocked: This app's request is invalid"
**Solution**:
- Publish your OAuth consent screen (not in testing mode)
- Add your email as a test user
- Wait a few minutes after making changes

### Issue: GitHub login shows error
**Solution**:
- This is expected without a backend
- Implement the serverless function as shown above
- Or accept demo mode for testing

---

## 📱 What the User Sees

1. Clicks "Login with Google"
2. Google popup/redirect opens
3. Chooses account and authorizes
4. Returns to your site - automatically logged in!
5. Dashboard shows their name and profile picture

---

## ✨ Enhancement Ideas

Add these features next:

- [ ] Profile picture display
- [ ] Link multiple OAuth providers to one account
- [ ] OAuth logout (revoke tokens)
- [ ] Refresh tokens for long sessions
- [ ] Remember provider preference
- [ ] Social login for signup too

---

## 🎉 You're Done!

Your app now has:
✅ Email/password login
✅ Google OAuth login
✅ GitHub OAuth login (basic)
✅ Session management
✅ Secure token handling

**Next Steps:**
1. Deploy to GitHub Pages / Netlify
2. Test with real users
3. Add more features!

**Questions?** Check OAUTH_SETUP.md for detailed documentation.

Happy coding! 🚀