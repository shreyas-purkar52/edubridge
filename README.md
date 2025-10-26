# EduBridge - Educational Platform

A comprehensive educational platform designed to bridge the gap in education for underprivileged children, connecting NGOs, volunteers, and sponsors.

## 📁 Project Structure

```
edubridge/
│
├── index.html          # Main HTML file
├── style.css           # All CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Simple Setup
1. Create a new folder called `edubridge`
2. Create three files in this folder:
   - `index.html`
   - `style.css`
   - `script.js`
3. Copy the respective code into each file
4. Open `index.html` in your web browser
5. That's it! The website is ready to use

### Option 2: Using a Local Server (Recommended)
If you have Python installed:

```bash
# Navigate to the project folder
cd edubridge

# Start a simple HTTP server
python -m http.server 8000

# Or if you have Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: `http://localhost:8000`

### Option 3: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## ✨ Features

### 🔐 Authentication System
- **Login/Signup** - Full user authentication with form validation
- **Session Management** - Remembers logged-in users
- **LocalStorage** - User data persists across sessions
- **Social Login Ready** - Placeholders for Google & GitHub integration

### 📊 Dashboard Pages
1. **Dashboard** - Overview with stats, quick access cards, charts, and success stories
2. **NGO Directory** - Complete list of partner NGOs with search and filters
3. **Learning App** - Interactive learning subjects for children
4. **Sponsor Connect** - Active campaigns with progress bars and donation tracking
5. **Stories** - Real-world success stories from the community
6. **Progress Summary** - AI-powered student progress generator
7. **Volunteer Portal** - Recognition badges and volunteer opportunities

### 🎨 Design Features
- Dark theme with purple/blue gradient accents
- Fully responsive design
- Smooth animations and transitions
- Professional card-based layouts
- Interactive hover effects

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **LocalStorage API** - Client-side data persistence

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🎯 How to Use

### First Time Setup:
1. Open the website
2. You'll see the login screen automatically
3. Click "Sign Up" to create a new account
4. Fill in:
   - Full Name
   - Email Address
   - Password (minimum 8 characters)
   - Confirm Password
5. Check "I agree to Terms of Service"
6. Click "Create Account"
7. You'll be automatically logged in

### Logging In:
1. Enter your email and password
2. Optionally check "Remember me" to stay logged in
3. Click "Log In"

### Navigation:
- Use the sidebar to navigate between pages
- Click your avatar in the top right to logout
- Use the search bar to find content

### Features to Try:
- **Dashboard**: View stats and quick access cards
- **NGO Directory**: Browse partner organizations
- **Learning App**: Explore educational subjects
- **Sponsor Connect**: View active campaigns
- **Stories**: Read success stories
- **Progress Summary**: Generate AI-powered student summaries
- **Volunteer Portal**: See available opportunities

## 🔒 Security Notes

⚠️ **Important**: This is a demo application for educational purposes.

- Passwords are stored in plain text in localStorage
- No server-side validation
- Not suitable for production use without proper backend implementation

For production deployment:
- Implement proper backend with database
- Add password hashing (bcrypt)
- Use JWT tokens for authentication
- Implement HTTPS
- Add server-side validation
- Use environment variables for sensitive data

## 🛠️ Customization

### Changing Colors
Edit `style.css` and modify these variables:

```css
/* Primary Color */
background: #3b82f6;  /* Blue */

/* Background Colors */
background: #1a1a1a;  /* Dark background */
background: #242424;  /* Card background */

/* Text Colors */
color: #ffffff;  /* Primary text */
color: #888;     /* Secondary text */
```

### Adding New Pages
1. Add new page HTML in `index.html`:
```html
<div id="new-page" class="page">
    <!-- Your content here -->
</div>
```

2. Add navigation item in sidebar:
```html
<li class="nav-item" onclick="showPage('new-page')">
    <span class="nav-icon">🆕</span>
    New Page
</li>
```

3. Update `script.js` navigation mapping:
```javascript
const navMap = {
    'dashboard': 0,
    'new-page': 7,  // Add your page
};

const titles = {
    'new-page': 'New Page Title',
};
```

### Modifying Content
- Edit text directly in `index.html`
- Update stats, numbers, and descriptions
- Add or remove cards, sections as needed

## 📦 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files (index.html, style.css, script.js)
3. Go to repository Settings
4. Under Pages, select main branch
5. Your site will be live at: `https://github.com/shreyas-purkar52/EduBridge-Website.git`

### Netlify
1. Create account on Netlify
2. Drag and drop your folder
3. Site will be deployed instantly

### Vercel
1. Create account on Vercel
2. Import your GitHub repository
3. Deploy with one click

## 🐛 Troubleshooting

### Login not working?
- Clear your browser cache and localStorage
- Check browser console for errors
- Ensure all three files are in the same folder

### Styles not loading?
- Verify `style.css` path in index.html
- Check that the link tag is: `<link rel="stylesheet" href="style.css">`
- Open browser DevTools and check Network tab

### JavaScript errors?
- Verify `script.js` path in index.html
- Check that the script tag is: `<script src="script.js"></script>`
- Open browser console (F12) to see error messages

### Page not switching?
- Make sure JavaScript is enabled in your browser
- Check if there are console errors
- Verify all page IDs match between HTML and JavaScript

## 🔄 Future Enhancements

Potential features to add:
- [ ] Backend API integration
- [ ] Real database (MongoDB/PostgreSQL)
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Profile editing
- [ ] Image uploads
- [ ] Real-time notifications
- [ ] Chat system
- [ ] Payment gateway integration
- [ ] Analytics dashboard
- [ ] Admin panel
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Mobile app version

## 📚 Learning Resources

To understand and modify this project:

**HTML/CSS:**
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [W3Schools](https://www.w3schools.com/)

**JavaScript:**
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

**Git/GitHub:**
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)

## 🤝 Contributing

Want to improve EduBridge? Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add some feature'`
5. Push: `git push origin feature-name`
6. Open a Pull Request

## 📄 File Descriptions

### index.html
- Contains all HTML structure
- Includes login/signup modals
- All 7 page sections
- Sidebar navigation
- Top bar with search

### style.css
- Complete styling for all components
- Responsive design media queries
- Animations and transitions
- Color scheme definitions
- Grid and flexbox layouts

### script.js
- User authentication logic
- Session management
- Page navigation
- Form validation
- LocalStorage operations
- AI summary generator

## 💾 Data Storage

The application uses localStorage to store:
- User accounts (email, password, name, role)
- Current session (logged-in user data)
- "Remember me" preference

To clear all data:
```javascript
localStorage.clear();
```

Or in browser console:
```javascript
localStorage.removeItem('edubridge_user');
localStorage.removeItem('edubridge_users');
```

## 🎨 Design System

### Colors
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #764ba2 (Purple)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Orange)
- **Error**: #dc2626 (Red)
- **Background**: #1a1a1a (Dark)
- **Card**: #242424 (Medium Dark)
- **Border**: #2a2a2a (Border)

### Typography
- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Headings**: Bold, various sizes (18px-42px)
- **Body**: Regular, 14px
- **Small**: 12-13px

### Spacing
- **Small**: 8px, 12px, 15px
- **Medium**: 20px, 25px, 30px
- **Large**: 40px, 50px, 60px

## 📞 Support

If you encounter issues:
1. Check the Troubleshooting section
2. Review browser console for errors
3. Ensure all files are properly linked
4. Verify your browser supports modern JavaScript

## 📝 License

This project is open source and available for educational purposes.

## 🎯 Use Cases

Perfect for:
- Educational institutions
- NGO management systems
- Volunteer coordination platforms
- Donation tracking systems
- Student progress monitoring
- Community impact projects

## ⚡ Performance Tips

To optimize performance:
1. Minify CSS and JavaScript for production
2. Compress images if you add any
3. Use CDN for faster loading
4. Enable browser caching
5. Consider lazy loading for images

## 🌟 Credits

Created for educational purposes to demonstrate:
- Modern web development practices
- Responsive design principles
- Client-side authentication
- Single-page application concepts
- Clean code organization

---

## 📋 Quick Reference

### Test Accounts
After creating an account, you can login with:
- **Email**: Your registered email
- **Password**: Your chosen password

### Keyboard Shortcuts
- `Tab`: Navigate between form fields
- `Enter`: Submit forms
- `Esc`: Close modals (future feature)

### Common Tasks

**Reset Everything:**
```javascript
localStorage.clear();
location.reload();
```

**Check Logged in User:**
```javascript
console.log(JSON.parse(localStorage.getItem('edubridge_user')));
```

**View All Users:**
```javascript
console.log(JSON.parse(localStorage.getItem('edubridge_users')));
```

---

**Built with ❤️ for Education**

Made to bridge the gap in education for underprivileged children worldwide.
