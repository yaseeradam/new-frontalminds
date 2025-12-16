# FrontalMinds Admin Dashboard - Complete Setup Guide

## 🎯 What's Been Built

A complete admin dashboard with MongoDB backend for managing all website content:

### ✅ Features Implemented

1. **Full Authentication System**
   - Login page with JWT tokens
   - Secure session management
   - Initial admin setup flow
   - Protected admin routes

2. **MongoDB Database**
   - Projects management
   - Team members management
   - Services management
   - Testimonials management
   - Site settings
   - Admin users

3. **Complete API**
   - RESTful API for all content types
   - CRUD operations (Create, Read, Update, Delete)
   - Authentication endpoints

4. **Separate Admin Interface**
   - Completely isolated from main website
   - No navbar/footer from main site
   - Custom admin layout

## 🚀 Setup Instructions

### Step 1: Install MongoDB

**Option A: Local MongoDB**
1. Download from https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. Default connection: `mongodb://localhost:27017`

**Option B: MongoDB Atlas (Cloud - Free)**
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create free account
3. Create a cluster (free tier)
4. Get your connection string
5. Replace `<password>` in the connection string

### Step 2: Configure Environment Variables

1. Copy `env.example.txt` to `.env.local` in the root directory
2. Update the values:

```env
# For Local MongoDB:
MONGODB_URI=mongodb://localhost:27017/frontalminds

# For MongoDB Atlas:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/frontalminds

# Generate a random secret (keep this secure!):
JWT_SECRET=your-super-secret-key-change-this

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### Step 4: Create Admin Account

1. Visit `http://localhost:3000/admin/login`
2. First time: You'll see "Create Admin Account" form
3. Enter:
   - Full Name
   - Email
   - Password (min 6 characters)
   - Confirm Password
4. Click "Create Account"

### Step 5: Login & Manage Content

1. Login with your credentials
2. Use the dashboard to manage:
   - Projects
   - Team Members
   - Services
   - Testimonials
   - Site Settings

## 📁 File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.tsx          # Separate admin layout
│   │   ├── page.tsx            # Admin dashboard
│   │   └── login/
│   │       └── page.tsx        # Login/Setup page
│   └── api/
│       ├── auth/
│       │   ├── login/route.ts
│       │   ├── logout/route.ts
│       │   ├── me/route.ts
│       │   └── setup/route.ts
│       ├── projects/
│       │   ├── route.ts
│       │   └── [id]/route.ts
│       ├── team/
│       ├── services/
│       ├── testimonials/
│       └── settings/
├── lib/
│   └── mongodb.ts              # Database connection
├── models/
│   └── index.ts                # All database models
└── components/
    └── admin/                  # Admin components
        ├── ProjectsManager.tsx
        └── TeamManager.tsx
```

## 🔐 Default Admin Credentials (First Setup)

- Email: Your email
- Password: Your password (set during setup)

## 🌐 URLs

- **Main Website**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
- **Admin Dashboard**: http://localhost:3000/admin

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout  
- `GET /api/auth/me` - Check session
- `POST /api/auth/setup` - Create initial admin

### Projects
- `GET /api/projects` - List all
- `POST /api/projects` - Create
- `GET /api/projects/[id]` - Get one
- `PUT /api/projects/[id]` - Update
- `DELETE /api/projects/[id]` - Delete

### Team (same pattern)
- `/api/team`
- `/api/team/[id]`

### Services (same pattern)
- `/api/services`
- `/api/services/[id]`

### Testimonials (same pattern)
- `/api/testimonials`
- `/api/testimonials/[id]`

### Settings
- `GET /api/settings` - Get settings
- `PUT /api/settings` - Update settings

## 🎨 Next Steps

1. **Add Image Upload**
   - Integrate Cloudinary or AWS S3
   - Enable image uploads for projects/team

2. **Complete Manager UIs**
   - Full CRUD interfaces for all content types
   - Drag-and-drop reordering
   - Bulk operations

3. **Advanced Features**
   - Rich text editor for descriptions
   - Analytics dashboard
   - Content versioning
   - SEO metadata management

## ⚠️ Security Notes

1. **Change JWT_SECRET** in production to a random, secure key
2. **Use HTTPS** in production
3. **Regularly update** dependencies
4. **Backup** your MongoDB database
5. **Limit admin access** to trusted users only

## 🐛 Troubleshooting

### "Cannot connect to MongoDB"
- Check if MongoDB is running
- Verify MONGODB_URI in .env.local
- For Atlas: Check IP whitelist and credentials

### "Unauthorized" errors
- Clear cookies and login again
- Check JWT_SECRET is set
- Verify admin account exists

### "Setup already complete"
- An admin account exists
- Use login page instead
- Reset if needed: Delete admin from database

## 📞 Support

For issues or questions:
- Check MongoDB connection
- Verify environment variables
- Review browser console for errors
- Check terminal for server errors
