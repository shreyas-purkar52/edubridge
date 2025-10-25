# 🚀 EduBridge - GitHub Pages Setup with OAuth

Your website: **https://shreyas-purkar52.github.io/edubridge/**

## ✅ Step-by-Step Setup

### 📦 Step 1: Upload All Files to GitHub

Upload these 6 files to your GitHub repository:

```
edubridge/
├── index.html
├── style.css
├── script.js
├── config.js          (with YOUR credentials)
├── oauth.js
└── .gitignore
```

**Using GitHub Web Interface:**

1. Go to: https://github.com/shreyas-purkar52/edubridge
2. Click "Add file" → "Upload files"
3. Drag all 6 files
4. Commit message: "Add OAuth authentication"
5. Click "Commit changes"

---

### 🔵 Step 2: Setup Google OAuth

#### 2.1 Create Google Cloud Project

1. Go to: https://console.cloud.google.com/
2. Click "Select a project" → "New Project"
3. Name: `EduBridge`
4. Click "Create"

#### 2.2 Enable Google+ API

1. In search bar, type "Google+ API"
2. Click on it → Click "Enable"

#### 2.3 Configure OAuth Consent Screen

1. Go to "APIs & Services" → "OAuth consent screen"
2. User Type: **External**
3. Click "Create"
4. Fill in:
   - App name: `EduBridge`
   - User support email: `your-email@example.com`
   - Developer email: `your-email@example.com`
5. Click "Save and Continue"
6. Scopes: Click "Save and Continue" (skip)
7. Test users: Add your email
8. Click "Save and Continue"

#### 2.4 Create OAuth Client ID

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. Application type: **Web application**
4. Name: `EduBridge Web`
5. **Authorized JavaScript origins:**
   ```
   https://shreyas-purkar52.github.io
   ```
6. **Authorized redirect URIs:**
   ```
   https://shreyas-purkar52.github.io/edubridge/
   ```
7. Click "Create"
8. **COPY YOUR CLIENT ID** (looks like: `123456-abc.apps.googleusercontent.com`)

#### 2.5 Update config.js

Replace in `config.js`:
```javascript
clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
```

With your actual Client ID:
```javascript
clientId: '123456-abc.apps.googleusercontent.com',
```

---

### ⚫ Step 3: Setup GitHub OAuth

#### 3.1 Register OAuth App

1. Go to: https://github.com/settings/developers
2. Click "OAuth Apps" → "New OAuth App"
3. Fill in:
   - **Application name**: `EduBridge`
   - **Homepage URL**: `https://shreyas-purkar52.github.io/edubridge/`
   - **Application description**: `Educational platform bridging the gap for children`
   - **Authorization callback URL**: `https://shreyas-purkar52.github.io/edubridge/`
4. Click "Register application"

#### 3.2 Get Credentials

1. **Copy your Client ID**
2. Click "Generate a new client secret"
3. **Copy your Client Secret** (save it somewhere safe!)

#### 3.3 Update config.js

Replace in `config.js`:
```javascript
clientId: 'YOUR_GITHUB_CLIENT_ID',
```

With your actual Client ID:
```javascript
clientId: 'abc123def456',
```

---

### 📝 Step 4: Final config.js

Your `config.js` should look like this:

```javascript
const OAUTH_CONFIG = {
    google: {
        clientId: '123456-abc.apps.googleusercontent.com',  // Your actual Google Client ID
        redirectUri: 'https://shreyas-purkar52.github.io/edubridge/',
        scope: 'profile email'
    },
    github: {
        clientId: 'abc123def456',  // Your actual GitHub Client ID
        redirectUri: 'https://shreyas-purkar52.github.io/edubridge/',
        scope: 'read:user user:email'
    }
};
```

---

### ⚠️ Step 5: Important - Don't Expose Credentials!

**Option A: Use environment variables (Recommended for production)**

Create `config.js` that reads from a separate file you don't commit:

```javascript
// This is safe to commit
const OAUTH_CONFIG = {
    google: {
        clientId: window.ENV?.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
        redirectUri: 'https://shreyas-purkar52.github.io/edubridge/',
        scope: 'profile email'
    },
    github: {
        clientId: window.ENV?.GITHUB_CLIENT_ID || 'YOUR_GITHUB_CLIENT_ID',
        redirectUri: 'https://shreyas-purkar52.github.io/edubridge/',
        scope: 'read:user user:email'
    }
};
```

**Option B: Keep config.js private (Simpler for now)**

Your `.gitignore` already excludes `config.js`, so just don't commit it!

---

### 🧪 Step 6: Test Your OAuth

1. Go to: https://shreyas-purkar52.github.io/edubridge/
2. Click "Log In"
3. Click "🔍 Google"
4. You should see Google login page
5. Authorize the app
6. You should be logged in! 🎉

---

### 📊 Step 7: Publish OAuth Consent Screen (Optional)

For wider testing:

1. Go to Google Cloud Console
2. "OAuth consent screen"
3. Click "Publish App"
4. Now anyone can use Google login!

---

## 🔧 Troubleshooting

### Error: "redirect_uri_mismatch"

**Solution:**
1. Check your Google Cloud Console → Credentials
2. Verify the redirect URI is **exactly**:
   ```
   https://shreyas-purkar52.github.io/edubridge/
   ```
3. Note the trailing slash `/` - it matters!

### Error: "This app has not been verified"

**Solution:**
1. This is normal during development
2. Click "Advanced" → "Go to EduBridge (unsafe)"
3. Or publish your app in OAuth consent screen

### Error: "Access blocked: This app's request is invalid"

**Solution:**
1. Make sure JavaScript origins includes:
   ```
   https://shreyas-purkar52.github.io
   ```
2. Wait 5 minutes after making changes
3. Clear browser cache

### GitHub login not working

**Solution:**
- GitHub OAuth requires a backend server (for security)
- Current implementation will show a demo message
- For full functionality, see OAUTH_SETUP.md for serverless function setup

---

## 🔄 Update OAuth Settings Later

If you change your URL, update:

1. **Google Cloud Console:**
   - Credentials → Edit OAuth Client
   - Update JavaScript origins and redirect URIs

2. **GitHub OAuth Apps:**
   - Settings → Developer → OAuth Apps
   - Edit your app
   - Update URLs

3. **config.js:**
   - Update `redirectUri` values

---

## 📱 How It Works

```
1. User clicks "Login with Google"
   ↓
2. Redirects to: accounts.google.com/o/oauth2/auth
   ↓
3. User authorizes
   ↓
4. Google redirects to: shreyas-purkar52.github.io/edubridge/#access_token=...
   ↓
5. oauth.js catches the token
   ↓
6. Fetches user info from Google API
   ↓
7. Logs user in automatically!
```

---

## ✅ Checklist

Before going live:

- [ ] All files uploaded to GitHub
- [ ] Google OAuth credentials configured
- [ ] GitHub OAuth app created
- [ ] config.js updated with real credentials
- [ ] .gitignore properly configured
- [ ] Tested Google login
- [ ] Tested GitHub login (will show demo message)
- [ ] OAuth consent screen configured
- [ ] Authorized origins and redirect URIs match exactly

---

## 🎉 You're Done!

Your website now has:
- ✅ Regular email/password login
- ✅ Google OAuth login (fully working)
- ✅ GitHub OAuth login (basic)
- ✅ Session management
- ✅ Public URL: https://shreyas-purkar52.github.io/edubridge/

**Test it now!** 🚀

---

## 📧 Need Help?

Check these resources:
- OAUTH_SETUP.md - Detailed OAuth documentation
- QUICKSTART_OAUTH.md - Quick reference guide
- Browser console (F12) - Check for error messages

**Common URLs:**
- Your site: https://shreyas-purkar52.github.io/edubridge/
- Google Cloud: https://console.cloud.google.com/
- GitHub OAuth: https://github.com/settings/developers
- Your repo: https://github.com/shreyas-purkar52/edubridge

Happy coding! 🎓