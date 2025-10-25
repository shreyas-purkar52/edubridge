// EduBridge JavaScript

// User session management
let currentUser = null;

// Check if user is logged in on page load
window.addEventListener('DOMContentLoaded', function () {
    const savedUser = localStorage.getItem('edubridge_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserInterface();
        document.getElementById('mainContent').style.display = 'block';
    } else {
        showLogin();
    }
});

// Show login modal
function showLogin() {
    document.getElementById('loginModal').classList.add('active');
    document.getElementById('signupModal').classList.remove('active');
    document.getElementById('mainContent').style.display = 'none';
}

// Show signup modal
function showSignup() {
    document.getElementById('signupModal').classList.add('active');
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('mainContent').style.display = 'none';
}

// Switch to signup from login
function switchToSignup() {
    showSignup();
}

// Switch to login from signup
function switchToLogin() {
    showLogin();
}

// Handle login
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const remember = document.getElementById('rememberMe').checked;

    // Clear previous messages
    hideMessages();

    // Simple validation
    if (!email || !password) {
        showError('loginError', 'Please fill in all fields');
        return;
    }

    // Simulate login (in real app, this would be an API call)
    const users = JSON.parse(localStorage.getItem('edubridge_users') || '[]');
    const user = users.find(u => u.email === email);

    if (user && user.password === password) {
        currentUser = {
            name: user.name,
            email: user.email,
            role: user.role || 'Volunteer'
        };

        if (remember) {
            localStorage.setItem('edubridge_user', JSON.stringify(currentUser));
        }

        showSuccess('loginSuccess', 'Login successful! Redirecting...');

        setTimeout(() => {
            document.getElementById('loginModal').classList.remove('active');
            document.getElementById('mainContent').style.display = 'block';
            updateUserInterface();
            showPage('dashboard');
        }, 1000);
    } else {
        showError('loginError', 'Invalid email or password');
    }
}

// Handle signup
function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // Clear previous messages
    hideMessages();

    // Validation
    if (!name || !email || !password || !confirmPassword) {
        showError('signupError', 'Please fill in all fields');
        return;
    }

    if (password.length < 8) {
        showError('signupError', 'Password must be at least 8 characters long');
        return;
    }

    if (password !== confirmPassword) {
        showError('signupError', 'Passwords do not match');
        return;
    }

    if (!agreeTerms) {
        showError('signupError', 'Please agree to the Terms of Service');
        return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('edubridge_users') || '[]');
    if (users.find(u => u.email === email)) {
        showError('signupError', 'An account with this email already exists');
        return;
    }

    // Create new user
    const newUser = {
        name: name,
        email: email,
        password: password,
        role: 'Volunteer',
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('edubridge_users', JSON.stringify(users));

    // Auto login
    currentUser = {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
    };

    localStorage.setItem('edubridge_user', JSON.stringify(currentUser));

    showSuccess('signupSuccess', 'Account created successfully! Redirecting...');

    setTimeout(() => {
        document.getElementById('signupModal').classList.remove('active');
        document.getElementById('mainContent').style.display = 'block';
        updateUserInterface();
        showPage('dashboard');
    }, 1500);
}

// Social login
function socialLogin(provider) {
    alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login will be available soon!`);
}

// Show forgot password
function showForgotPassword() {
    const email = prompt('Enter your email address to reset password:');
    if (email) {
        alert('Password reset link has been sent to ' + email);
    }
}

// Update user interface
function updateUserInterface() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userRole').textContent = currentUser.role;

        const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
        document.getElementById('userAvatar').textContent = initials;
        document.getElementById('topUserAvatar').textContent = initials;
    }
}

// Show user menu
function showUserMenu() {
    const menu = confirm('Do you want to logout?');
    if (menu) {
        logout();
    }
}

// Logout
function logout() {
    localStorage.removeItem('edubridge_user');
    currentUser = null;
    document.getElementById('mainContent').style.display = 'none';
    showLogin();

    // Reset forms
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();
}

// Show error message
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.add('show');
    setTimeout(() => {
        element.classList.remove('show');
    }, 5000);
}

// Show success message
function showSuccess(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.add('show');
    setTimeout(() => {
        element.classList.remove('show');
    }, 3000);
}

// Hide all messages
function hideMessages() {
    document.querySelectorAll('.error-message, .success-message').forEach(el => {
        el.classList.remove('show');
    });
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Remove active from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update active nav item
    const navMap = {
        'dashboard': 0,
        'ngo-directory': 1,
        'learning-app': 2,
        'sponsor-connect': 3,
        'stories': 4,
        'progress-summary': 5,
        'volunteer-portal': 6
    };

    if (navMap[pageId] !== undefined) {
        navItems[navMap[pageId]].classList.add('active');
    }

    // Update page title
    const titles = {
        'dashboard': 'Dashboard',
        'ngo-directory': 'NGO Directory',
        'learning-app': 'Learning App',
        'sponsor-connect': 'Sponsor Connect',
        'stories': 'Stories',
        'progress-summary': 'Progress Summary',
        'volunteer-portal': 'Volunteer Portal'
    };

    document.getElementById('pageTitle').textContent = titles[pageId] || 'Dashboard';

    // Scroll to top
    window.scrollTo(0, 0);
}

// Generate AI Summary
function generateSummary() {
    const academic = document.getElementById('academic').value;
    const attendance = document.getElementById('attendance').value;
    const behavioral = document.getElementById('behavioral').value;

    if (academic || attendance || behavioral) {
        const resultCard = document.getElementById('resultCard');
        resultCard.innerHTML = `
            <div class="result-icon">✨</div>
            <h2>AI-Generated Summary</h2>
            <div style="text-align: left; margin-top: 20px; line-height: 1.6; color: #fff;">
                <p style="margin-bottom: 15px;"><strong>Academic Strengths:</strong> The student shows strong performance in mathematics and demonstrates excellent problem-solving abilities.</p>
                <p style="margin-bottom: 15px;"><strong>Areas for Improvement:</strong> Reading comprehension skills need focused attention. Recommend additional practice with guided reading exercises.</p>
                <p style="margin-bottom: 15px;"><strong>Attendance:</strong> Excellent attendance record with 95% consistency. Punctuality on Mondays needs improvement.</p>
                <p style="margin-bottom: 15px;"><strong>Behavioral Notes:</strong> Student actively participates in class discussions and shows leadership qualities. Occasional distractions noted - recommend seating arrangement adjustment.</p>
                <p style="margin-top: 20px; color: #10b981;"><strong>Overall:</strong> A bright and engaged student with strong potential. With targeted support in reading, the student is on track for excellent academic progress.</p>
            </div>
        `;
    } else {
        alert('Please fill in at least one field to generate a summary.');
    }
}