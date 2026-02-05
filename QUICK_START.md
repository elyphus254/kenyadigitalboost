# 🚀 Quick Start Guide - Kenya Digital Boost (Next.js)

## Step-by-Step Instructions

### 1️⃣ Copy Files to Your Project

Copy all files from the `nextjs-files` folder into your existing Next.js project at:
```
C:\Users\elyphus\kenya-digital-boost\
```

**File Structure:**
```
kenya-digital-boost/
├── app/
│   ├── layout.tsx          ← Copy this
│   ├── page.tsx            ← Copy this
│   ├── globals.css         ← Copy this
│   ├── pricing/
│   │   └── page.tsx        ← Copy this
│   └── portfolio/
│       └── page.tsx        ← Copy this
├── public/
│   └── logo.png            ← Download your logo and place here
├── next.config.js          ← Copy this
├── tailwind.config.js      ← Copy this  
├── tsconfig.json           ← Copy this
├── package.json            ← Copy this
└── postcss.config.js       ← Copy this
```

### 2️⃣ Get Your Logo Image

1. In Figma Make, right-click on your logo image
2. Save it as `logo.png`
3. Place it in the `public` folder of your Next.js project
   - Full path: `C:\Users\elyphus\kenya-digital-boost\public\logo.png`

### 3️⃣ Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install:
- ✅ next
- ✅ react & react-dom
- ✅ lucide-react (for icons)
- ✅ motion (Framer Motion)
- ✅ tailwindcss
- ✅ TypeScript

### 4️⃣ Run Your Project

```bash
npm run dev
```

Your website will be available at: **http://localhost:3000**

---

## ✅ Checklist

Before running `npm run dev`, make sure:

- [ ] All files from `nextjs-files/app/` are copied to your `app/` folder
- [ ] `.logopng` is in the `public/` folder
- [ ] All config files (`next.config.js`, `tailwind.config.js`, etc.) are in the root
- [ ] You've run `npm install`

---

## 🎨 What You'll See

- **Home Page** (/) - Full landing page with services, about, and contact sections
- **Pricing Page** (/pricing) - All 4 service packages with detailed pricing
- **Portfolio Page** (/portfolio) - 3 project showcases

---

## 🔧 Troubleshooting

### Error: "Missing required html tags"
✅ **Fixed!** - The `app/layout.tsx` file now includes proper `<html>` and `<body>` tags

### Error: "Module not found"
Run: `npm install` again

### Images not loading
Make sure:
- Logo is in `/public/logo.png`
- `next.config.js` is configured properly (already done)

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

---

## 📱 Features Included

✅ Purple/violet color scheme  
✅ Dark background theme  
✅ Smooth Motion (Framer Motion) animations  
✅ Responsive design (mobile, tablet, desktop)  
✅ Social media links (Facebook, WhatsApp, Instagram)  
✅ Kenyan pricing (KES)  
✅ Portfolio showcase  
✅ Contact information  

---

## 🎯 Next Steps

After your site is running:

1. **Test all pages** - Navigate to /, /pricing, /portfolio
2. **Check mobile view** - Open browser DevTools (F12) and test responsive design
3. **Update content** - Customize text, images, and contact info as needed
4. **Deploy** - When ready, deploy to Vercel (free for Next.js apps)

---

## 💡 Need Help?

If you see any errors:

1. Check the terminal for error messages
2. Make sure all files are in the correct locations
3. Verify `npm install` completed successfully
4. Check that Node.js version is 18.17 or later: `node --version`

---

**You're all set! 🎉**

Run `npm run dev` and visit http://localhost:3000 to see your site!
