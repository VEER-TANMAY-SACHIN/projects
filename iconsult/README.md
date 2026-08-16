# iConsult - Multi-User Linktree & About Me Platform

A high-performance, mobile-first multi-user Linktree and "About Me" web application constructed using Vanilla HTML, CSS, and modular JavaScript with zero heavy framework overhead. Designed to run 100% free using static web hosting (**GitHub Pages**) and Backend-as-a-Service (**Firebase Spark Plan**).

---

## 🛠️ Technical Architecture

- **Frontend**: Vanilla HTML5, CSS3 Custom Properties (Design Tokens & 5 Themes), Modular ES6 JavaScript (CDN imported).
- **Backend & Database**: Firebase v10+ (Authentication for users, Firestore for profile & link storage).
- **Hosting**: GitHub Pages (`gh-pages`).

---

## 📋 Step-by-Step Firebase Setup Checklist

Follow these manual steps to configure your free Firebase project:

### Step 1: Create a Firebase Project
1. Navigate to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"** (or **"Create a project"**).
3. Enter your project name (e.g., `iconsult-app`) and click **Continue**.
4. Disable Google Analytics (optional) and click **Create project**.

### Step 2: Register Web App & Obtain Config Keys
1. In your project dashboard overview, click the **Web (`</>`) icon** to add a web application.
2. Name your app (e.g., `iConsult Web`), uncheck Firebase Hosting for now, and click **Register app**.
3. Copy the generated `firebaseConfig` object containing:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`
4. Open [`js/firebase-config.js`](file:///workspaces/projects/iconsult/js/firebase-config.js) in this project and paste your keys into the `firebaseConfig` object:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789...",
  appId: "1:123456789...:web:abcdef..."
};
```

### Step 3: Enable Email/Password Authentication
1. In the left navigation menu of the Firebase Console, go to **Build** -> **Authentication**.
2. Click **Get Started**.
3. Under the **Sign-in method** tab, select **Email/Password**.
4. Toggle **Enable** (leave Email link passwordless disabled) and click **Save**.

### Step 4: Provision Cloud Firestore
1. In the left navigation menu, go to **Build** -> **Firestore Database**.
2. Click **Create database**.
3. Select a location closest to your target users (e.g., `us-central` or `eur3`) and click **Next**.
4. Choose **Start in test mode** (or production mode) and click **Create**.
5. Go to the **Rules** tab in Firestore Database.
6. Replace the existing rules with the content from [`firestore.rules`](file:///workspaces/projects/iconsult/firestore.rules):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null && request.auth.uid == userId;
    }
    match /usernames/{username} {
      allow read: if true;
      allow create: if request.auth != null && request.resource.data.uid == request.auth.uid;
      allow update, delete: if request.auth != null && resource.data.uid == request.auth.uid;
    }
  }
}
```
7. Click **Publish**.

---

## 🚀 Git Commands for Deployment to `gh-pages`

Execute the following standard terminal commands inside the `iconsult` directory to initialize the git repository and deploy your application directly to GitHub Pages:

```bash
# 1. Navigate into the project folder
cd /workspaces/projects/iconsult

# 2. Initialize a fresh Git repository
git init

# 3. Create and switch to the main branch
git branch -M main

# 4. Stage all project files
git add .

# 5. Commit initial application code
git commit -m "feat: initial release of iConsult Linktree + About Me platform"

# 6. Add your GitHub repository as remote origin (replace with your repo URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/iconsult.git

# 7. Push to the main branch
git push -u origin main

# 8. Create and deploy directly to gh-pages branch
git checkout -b gh-pages
git push -u origin gh-pages
```

### GitHub Pages Settings Checklist:
1. Go to your repository on GitHub (`https://github.com/YOUR_GITHUB_USERNAME/iconsult`).
2. Click **Settings** -> **Pages** (under Code and automation).
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set Branch to `gh-pages` and folder to `/ (root)`.
5. Click **Save**. Your site will be published at `https://YOUR_GITHUB_USERNAME.github.io/iconsult/`.

---

## 🧪 Local Verification & Development

To test the application locally in your browser:

```bash
# Run a local HTTP server inside iconsult directory
python3 -m http.server 8080
```

Access in your browser:
- **Landing Page**: `http://localhost:8080/index.html`
- **User Profile View**: `http://localhost:8080/index.html?user=username`
- **Authentication**: `http://localhost:8080/auth.html`
- **Dashboard**: `http://localhost:8080/dashboard.html`
