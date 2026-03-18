# Yardzen - Gardening Website (HTML, CSS, JavaScript)

## 📁 File Structure

```
/public/
├── index.html          (Home Page)
├── services.html       (Services Page)
├── about.html          (About Us Page)
├── contact.html        (Contact Page)
├── faq.html           (FAQ Page)
├── terms.html         (Terms & Conditions Page)
├── privacy.html       (Privacy Policy Page)
├── 404.html           (404 Error Page)
├── styles.css         (Main Stylesheet)
└── script.js          (JavaScript Functionality)
```

## 🌟 Features

### All Pages Include:
- **Responsive Navigation** - Mobile-friendly menu with hamburger toggle
- **Sticky Call Button** - Fixed call button on mobile devices
- **Professional Footer** - With links and contact information
- **Exit Intent Popup** - Captures leads when users try to leave (Home page)
- **Smooth Animations** - Scroll reveal effects and transitions

### Home Page (index.html)
- Hero section with call-to-action buttons
- "Why Choose Yardzen" benefits section
- Services overview with images
- Transparent pricing with 3 packages
- Customer testimonials
- Lead generation form
- Full CTA section

### Services Page (services.html)
- Detailed service descriptions
- Alternating image/text layout
- Call-to-action for each service

### About Page (about.html)
- Company introduction
- Mission and vision cards
- Image gallery
- Core values section

### Contact Page (contact.html)
- Contact information with icons
- Business hours
- Contact form
- Success message on submission

### FAQ Page (faq.html)
- Accordion-style questions and answers
- 8 common questions
- CTA section

### Legal Pages (terms.html, privacy.html)
- Complete terms and conditions
- Privacy policy with GDPR compliance
- Professional formatting

### 404 Page (404.html)
- Error message
- Back to home button

## 🎨 Styling Features (styles.css)

- **Modern Design** - Clean, professional green color scheme
- **Responsive Grid Layouts** - Adapts to all screen sizes
- **Animations** - Hover effects, transitions, and scroll reveals
- **Mobile-First** - Optimized for mobile devices
- **Custom Components** - Cards, buttons, forms, accordions
- **Professional Typography** - Easy to read font hierarchy

## ⚙️ JavaScript Features (script.js)

1. **Mobile Menu Toggle** - Hamburger menu functionality
2. **Active Navigation** - Highlights current page
3. **Form Submissions** - Quote form and contact form handling
4. **Exit Intent Popup** - Shows popup when mouse leaves viewport
5. **FAQ Accordion** - Expandable/collapsible questions
6. **Smooth Scrolling** - For anchor links
7. **Scroll Animations** - Elements fade in on scroll

## 🚀 How to Use

### Option 1: Open Directly
Simply open any `.html` file in your web browser:
1. Double-click `index.html` to view the home page
2. Navigate using the menu to see other pages

### Option 2: Local Server (Recommended)
For best results, use a local server:

**Using Python:**
```bash
cd public
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using Node.js (http-server):**
```bash
npm install -g http-server
cd public
http-server
```

**Using VS Code Live Server:**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Key Components

### Forms
- Quote request form (Home page)
- Contact form (Contact page)
- Exit popup form
- All forms include validation
- Success messages after submission

### Navigation
- Desktop: Horizontal menu
- Mobile: Slide-in menu
- Active page highlighting
- Sticky header

### Buttons
- Primary (green)
- Secondary (dark green)
- White
- Outline
- Call-to-action style

### Cards
- Service cards with images
- Pricing cards with featured option
- Benefit cards
- Testimonial cards

## 🔧 Customization

### Colors
Main colors in CSS:
- Primary Green: `#059669`
- Dark Green: `#047857`
- Background Gray: `#f9fafb`
- Text: `#1f2937`

### Fonts
Using system fonts for fast loading:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Icons
Using Font Awesome 6.4.0 CDN:
- All icons are from Font Awesome
- Easy to replace or add new icons

### Images
All images are loaded from Unsplash:
- Replace image URLs with your own
- Maintain aspect ratios for best results

## 📞 Contact Information

The website includes:
- **Phone**: 844-235-7778
- **Email**: contect@yardzen.site
- **Address**: 239 Greene St, New York, NY 10003, United States

Update these in all HTML files to use your actual information.

## ✅ Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers

## 📋 SEO Ready

- Semantic HTML5
- Meta tags in each page
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 🔒 GDPR & Ad Compliance

- Privacy policy page
- Terms and conditions
- Cookie policy information
- Consent checkboxes on forms
- Clear contact information
- No misleading claims

## 💡 Tips

1. **Test Forms**: Form submissions currently log to console. Connect to your backend/email service.
2. **Update Images**: Replace Unsplash URLs with your own images for better performance.
3. **Customize Content**: Update all text to match your business.
4. **Add Analytics**: Add Google Analytics or similar tracking code.
5. **SSL Certificate**: Use HTTPS when deploying to production.

## 🎉 Features Summary

- ✅ 8 Complete HTML pages
- ✅ Fully responsive design
- ✅ Mobile-friendly navigation
- ✅ Lead capture forms
- ✅ Exit intent popup
- ✅ FAQ accordion
- ✅ Contact forms
- ✅ Pricing tables
- ✅ Testimonials
- ✅ Service showcase
- ✅ Legal pages
- ✅ 404 error page
- ✅ Sticky call button
- ✅ Smooth animations
- ✅ Professional styling

## 📦 Deployment

To deploy this website:

1. **Upload to Web Hosting**
   - Upload all files from `/public/` folder
   - Ensure `index.html` is in the root directory

2. **Using GitHub Pages**
   - Push to GitHub repository
   - Enable GitHub Pages
   - Set source to main branch

3. **Using Netlify/Vercel**
   - Drag and drop the `/public/` folder
   - Automatic deployment

---

**All files are ready to use!** Just customize the content and deploy! 🚀
