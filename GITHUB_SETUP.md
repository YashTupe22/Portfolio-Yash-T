# GitHub Repository Setup Guide

## Quick Setup - Create Repository on GitHub

Since GitHub CLI is not installed, follow these steps to create and push to GitHub:

### Option 1: Using GitHub Website (Recommended)

1. **Go to GitHub**: https://github.com/new

2. **Repository Settings**:
   - Repository name: `portfolio-with-editor` (or your preferred name)
   - Description: `Modern portfolio website with integrated offline code editor`
   - Visibility: **Public**
   - ❌ Do NOT initialize with README, .gitignore, or license (we already have these)

3. **Click "Create repository"**

4. **Copy the repository URL** (it will look like: `https://github.com/YOUR_USERNAME/portfolio-with-editor.git`)

5. **Run these commands in your terminal**:
   ```bash
   cd c:\Users\Yash\OneDrive\Document\Portfolio
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-with-editor.git
   git branch -M main
   git push -u origin main
   ```

### Option 2: Using Git Commands (After Creating Repo on GitHub)

Once you've created the repository on GitHub, run:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Verify the remote was added
git remote -v

# Push to GitHub
git push -u origin main
```

### Option 3: Install GitHub CLI (For Future Use)

Download and install from: https://cli.github.com/

Then you can use:
```bash
gh repo create portfolio-with-editor --public --source=. --push
```

---

## What's Already Done ✅

- ✅ Git repository initialized
- ✅ All files committed to local repository
- ✅ Ready to push to GitHub

## What You Need to Do

1. Create a new public repository on GitHub (use link above)
2. Copy the repository URL
3. Run the git commands to connect and push

---

## After Pushing to GitHub

Your repository will be ready for:
- ✅ Vercel deployment (connect GitHub repo)
- ✅ Collaboration
- ✅ Version control
- ✅ Automatic deployments on push

## Deploy to Vercel After Pushing

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy
5. Your site will be live in ~2 minutes!
