# Quality Assurance Checklist - Prime Reach Publishers

## Overview

This comprehensive QA checklist ensures all aspects of the Prime Reach Publishers website are functioning correctly before launch.

**Last Updated:** January 2026  
**Status:** Ready for Testing

---

## Pre-Launch Checklist

### Configuration Required Before Launch
- [ ] Add Google Analytics 4 Measurement ID (see ANALYTICS_SETUP_GUIDE.md)
- [ ] Update contact form email address (see FORMS_SETUP_GUIDE.md)
- [ ] Update newsletter email address (see FORMS_SETUP_GUIDE.md)
- [ ] Test forms on live server

### Manual Verification Needed
- [ ] Header navigation - verify links work on all pages
- [ ] Footer navigation - verify links work on all pages
- [ ] Active navigation states - set correctly per page
- [ ] Placeholder content replacement
- [ ] Image optimization
- [ ] Social media links (currently placeholders)

---

## Page-by-Page Testing

### Homepage (index.html)
- [ ] Hero section displays correctly
- [ ] Hero form submits successfully
- [ ] All service cards visible and aligned
- [ ] Counter animations work
- [ ] Tab section (Submit/Polish/Launch) functions
- [ ] Pricing cards display properly
- [ ] Testimonial slider works
- [ ] Blog section shows 3 posts
- [ ] Client logos display
- [ ] Footer newsletter form works
- [ ] All navigation links functional
- [ ] Mobile responsive
- [ ] No console errors

### Core Pages (P0)

#### about.html
- [ ] Page loads without errors
- [ ] Title: "About Us | Prime Reach Publishers"
- [ ] Meta description present
- [ ] Header navigation works
- [ ] Footer navigation works
- [ ] "About Us" nav item has active state
- [ ] Content makes sense for company story
- [ ] Images load correctly
- [ ] CTA buttons link to contact page
- [ ] Mobile responsive

#### services.html
- [ ] Page loads without errors
- [ ] Title: "Our Services | Prime Reach Publishers"
- [ ] Service cards match homepage (4 main services)
- [ ] Links to service-details.html work
- [ ] "Services" nav item has active state
- [ ] Content describes eBook publishing services
- [ ] Mobile responsive

#### contact.html
- [ ] Page loads without errors
- [ ] Title: "Contact Us | Prime Reach Publishers"
- [ ] Contact form displays
- [ ] Form validation works
- [ ] Form submits successfully
- [ ] Success/error messages display
- [ ] Contact information correct:
  - Phone: +1 (470) 588-3997
  - Address: 230 Ted Turner Dr NW, Atlanta, GA 30303
- [ ] Map displays (if implemented)
- [ ] Mobile responsive

### Content Pages (P1)

#### pricing.html
- [ ] Page loads without errors
- [ ] Title: "Pricing | Prime Reach Publishers"
- [ ] 3 pricing tiers display:
  - Standard: $300
  - Premium: $1,899 (highlighted)
  - Platinum: $3,500 (yellow card)
- [ ] "Choose Package" buttons link to contact
- [ ] All features listed correctly
- [ ] Mobile responsive (cards stack)

#### faqs.html
- [ ] Page loads without errors  
- [ ] Title: "FAQs | Prime Reach Publishers"
- [ ] Accordion/toggle works
- [ ] Questions relevant to eBook publishing
- [ ] CTA at bottom links to contact
- [ ] Mobile responsive

#### blog.html
- [ ] Page loads without errors
- [ ] Title: "The Indie Author Blog | Prime Reach Publishers"
- [ ] Blog posts display (3 from homepage)
- [ ] Post cards styled consistently
- [ ] Links to blog-details.html work
- [ ] Sidebar displays (if implemented)
- [ ] Categories work
- [ ] Mobile responsive

### Detail Pages (P2)

#### service-details.html
- [ ] Page loads without errors
- [ ] Title includes service name
- [ ] Content describes specific service
- [ ] Anchor links work (#ghostwriting, #editing, etc.)
- [ ] CTA buttons link to contact
- [ ] Related services shown
- [ ] Mobile responsive

#### blog-details.html
- [ ] Page loads without errors
- [ ] Title includes blog post title
- [ ] Author info displays
- [ ] Date, category, comments visible
- [ ] Share buttons work
- [ ] Related posts shown
- [ ] Sidebar matches blog.html
- [ ] Mobile responsive

#### team.html
- [ ] Page loads without errors
- [ ] Title: "Our Team | Prime Reach Publishers"
- [ ] Team member cards display
- [ ] Photos load correctly
- [ ] Social links work
- [ ] Mobile responsive

### New Pages

#### for-authors.html
- [ ] Page loads without errors
- [ ] Title: "For Authors | Prime Reach Publishers"
- [ ] "For Authors" nav item has active state
- [ ] Process section present
- [ ] Resources section present
- [ ] Anchor links work (#process, #submission, etc.)
- [ ] Mobile responsive

#### privacy-policy.html
- [ ] Page loads without errors
- [ ] Title: "Privacy Policy | Prime Reach Publishers"
- [ ] Content describes data collection/usage
- [ ] Contact information present
- [ ] Date updated shown
- [ ] Mobile responsive

#### terms.html
- [ ] Page loads without errors
- [ ] Title: "Terms & Conditions | Prime Reach Publishers"
- [ ] Terms content present
- [ ] Contact information present
- [ ] Date updated shown
- [ ] Mobile responsive

### Utility Pages (P3)

#### 404.html
- [ ] Page loads
- [ ] Title: "Page Not Found | Prime Reach Publishers"
- [ ] Error message displays
- [ ] Links to home, services, contact present
- [ ] Branding consistent
- [ ] Mobile responsive

#### sign-in.html & sign-up.html
- [ ] Pages load
- [ ] Titles correct
- [ ] Forms display
- [ ] Logo links to homepage
- [ ] Cross-links work ("Don't have account?" etc.)
- [ ] Form styling matches site
- [ ] Mobile responsive

---

## Functional Testing

### Forms

#### Contact Form (Hero + Contact Page)
- [ ] All fields validate (name, email, phone, message)
- [ ] Required fields enforced
- [ ] Email format validation works
- [ ] Terms checkbox required (hero form)
- [ ] Form submits via AJAX
- [ ] Loading spinner shows during submission
- [ ] Success message displays and auto-hides
- [ ] Error messages display correctly
- [ ] Form resets after successful submission
- [ ] Email arrives at configured address
- [ ] Reply-to email is submitter's email
- [ ] No duplicate submissions possible

#### Newsletter Signup (All Pages Footer)
- [ ] Email field validates
- [ ] Form submits via AJAX
- [ ] Loading state shows
- [ ] Success message displays
- [ ] Duplicate detection works
- [ ] Email added to subscribers list
- [ ] Notification email sent (if configured)
- [ ] Works on all pages

### Analytics

#### Google Analytics
- [ ] GA4 tracking code present in all pages
- [ ] Page views tracked
- [ ] Real-time reports show activity
- [ ] Custom events fire:
  - [ ] form_submission
  - [ ] newsletter_signup
  - [ ] cta_click
  - [ ] outbound_click
- [ ] No console errors related to analytics
- [ ] Analytics script loads asynchronously

---

## Navigation Testing

### Header Navigation
Test on multiple pages:

#### Main Menu
- [ ] Home → index.html
- [ ] Discover dropdown opens
  - [ ] Curated Collections sub-menu
    - [ ] New Releases → shop.html?filter=new
    - [ ] Top 100 → shop.html?filter=top
    - [ ] Pre-Orders → shop.html?filter=preorder
    - [ ] Under $2.99 → shop.html?filter=budget
  - [ ] Fiction Genres sub-menu
    - [ ] Romance → shop.html?genre=romance
    - [ ] Thriller & Mystery → shop.html?genre=thriller
    - [ ] Sci-Fi & Fantasy → shop.html?genre=scifi
  - [ ] Non-Fiction sub-menu
    - [ ] Biography & Memoir → shop.html?genre=biography
    - [ ] Business & Money → shop.html?genre=business
    - [ ] Self-Help & Wellness → shop.html?genre=selfhelp
    - [ ] History → shop.html?genre=history
- [ ] For Authors dropdown opens
  - [ ] The Process → for-authors.html#process
    - [ ] Submission → for-authors.html#submission
    - [ ] Production → for-authors.html#production
  - [ ] Author Resources → for-authors.html#resources
    - [ ] Marketing → for-authors.html#marketing
    - [ ] Financials → for-authors.html#financials
    - [ ] Community → for-authors.html#community
- [ ] Services dropdown opens
  - [ ] Production & Design → service-details.html#production
    - [ ] eBook Conversion → service-details.html#conversion
    - [ ] Visuals → service-details.html#visuals
    - [ ] Audio → service-details.html#audio
  - [ ] Distribution Channels → service-details.html#distribution
    - [ ] Retail Network → service-details.html#retail
    - [ ] Institutional → service-details.html#institutional
    - [ ] Physical → service-details.html#physical
  - [ ] Marketing & Sales → service-details.html#marketing
    - [ ] Discovery → service-details.html#discovery
    - [ ] Promotion → service-details.html#promotion
    - [ ] Analysis → service-details.html#analysis
- [ ] About Us → about.html

#### Header CTA
- [ ] "Contact Us" button → contact.html

#### Mobile Navigation
- [ ] Hamburger menu appears on mobile
- [ ] Menu toggles open/close
- [ ] All links accessible
- [ ] Dropdowns work on touch devices
- [ ] Mobile logo displays

### Footer Navigation

#### Services Column
- [ ] Ghostwriting → service-details.html#ghostwriting
- [ ] Book Editing → service-details.html#editing
- [ ] Formatting & Typesetting → service-details.html#formatting
- [ ] Publishing & Distribution → service-details.html#distribution

#### Resources Column
- [ ] Blog → blog.html
- [ ] Author Success Stories → projects.html
- [ ] FAQs → faqs.html
- [ ] Free Consultation → contact.html

#### Company Column
- [ ] About Us → about.html
- [ ] Our Process → for-authors.html#process
- [ ] Pricing → pricing.html
- [ ] Contact → contact.html

#### Follow Column (Social Links)
- [ ] Facebook → https://facebook.com/primereachpublishers (opens in new tab)
- [ ] X (Twitter) → https://twitter.com/primereachpub (opens in new tab)
- [ ] Instagram → https://instagram.com/primereachpublishers (opens in new tab)
- [ ] LinkedIn → https://linkedin.com/company/prime-reach-publishers (opens in new tab)

#### Footer Bottom
- [ ] FAQs → faqs.html
- [ ] Support → contact.html
- [ ] Privacy Policy → privacy-policy.html
- [ ] Contact Us → contact.html
- [ ] Copyright year: 2026
- [ ] Company name: Prime Reach Publishers

#### Footer Elements
- [ ] Logo links to homepage
- [ ] Contact info displays:
  - [ ] Phone: +1 (470) 588-3997
  - [ ] Address: 230 Ted Turner Dr NW, Atlanta, GA 30303
- [ ] Scroll-to-top button works

---

## Responsive Design Testing

### Desktop Breakpoints
Test at these widths:
- [ ] 1920px (Full HD)
- [ ] 1440px (Laptop)
- [ ] 1280px (Small laptop)

**Check:**
- [ ] Layout doesn't break
- [ ] Images scale properly
- [ ] Text is readable
- [ ] Navigation fits
- [ ] Forms are usable

### Tablet Breakpoints
- [ ] 1024px (iPad Pro landscape)
- [ ] 768px (iPad portrait)

**Check:**
- [ ] Layout adapts
- [ ] Navigation may collapse
- [ ] Images scale
- [ ] Forms remain usable
- [ ] Cards stack if needed

### Mobile Breakpoints
- [ ] 414px (iPhone Plus)
- [ ] 375px (iPhone standard)
- [ ] 320px (iPhone SE)

**Check:**
- [ ] Hamburger menu works
- [ ] Content stacks vertically
- [ ] Text is readable (min 16px)
- [ ] Buttons are tappable (min 44x44px)
- [ ] Images scale
- [ ] Forms are usable
- [ ] No horizontal scroll

---

## Browser Compatibility

### Desktop Browsers
- [ ] Chrome (latest) - Windows
- [ ] Chrome (latest) - Mac
- [ ] Firefox (latest) - Windows
- [ ] Firefox (latest) - Mac
- [ ] Safari (latest) - Mac
- [ ] Edge (latest) - Windows

### Mobile Browsers
- [ ] Safari - iOS (iPhone)
- [ ] Safari - iOS (iPad)
- [ ] Chrome - Android
- [ ] Samsung Internet - Android

### Test In Each Browser
- [ ] Pages load
- [ ] JavaScript works
- [ ] Forms submit
- [ ] Animations play
- [ ] No console errors
- [ ] Fonts render correctly
- [ ] CSS styles apply

---

## Performance Testing

### Page Load Speed
Use [PageSpeed Insights](https://pagespeed.web.dev/):

- [ ] Homepage load time < 3 seconds
- [ ] Performance score > 80
- [ ] No render-blocking resources
- [ ] Images optimized
- [ ] CSS/JS minified

### Optimization Checklist
- [ ] Images compressed (TinyPNG, ImageOptim)
- [ ] Images use appropriate formats (WebP where supported)
- [ ] Lazy loading on below-fold images
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] GZIP compression enabled on server
- [ ] Browser caching configured
- [ ] Fonts loaded efficiently
- [ ] No unused CSS/JS

---

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all links
- [ ] Focus indicators visible
- [ ] Forms navigable via keyboard
- [ ] Dropdowns accessible
- [ ] No keyboard traps

### Screen Reader
Use NVDA (Windows) or VoiceOver (Mac):
- [ ] Alt text on all images
- [ ] Form labels associated with inputs
- [ ] Headings in logical order (H1 → H2 → H3)
- [ ] Skip to content link present (optional)
- [ ] ARIA labels on icon-only buttons
- [ ] Page title announced

### Color Contrast
Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/):
- [ ] Text contrast ratio ≥ 4.5:1 (WCAG AA)
- [ ] Large text contrast ratio ≥ 3:1
- [ ] Button text readable
- [ ] No reliance on color alone

### Other Accessibility
- [ ] Video/audio has captions (if applicable)
- [ ] No flashing/strobing content
- [ ] Content readable without CSS
- [ ] Form errors clearly indicated

---

## Security Testing

### Forms
- [ ] Input sanitization implemented
- [ ] Email validation (server-side)
- [ ] No SQL injection risk (no database)
- [ ] XSS protection (htmlspecialchars)
- [ ] CSRF tokens (optional but recommended)
- [ ] Rate limiting (optional but recommended)
- [ ] reCAPTCHA (optional but recommended)

### General
- [ ] No secrets in client-side code
- [ ] HTTPS enforced (if live)
- [ ] Security headers configured:
  - [ ] X-Content-Type-Options: nosniff
  - [ ] X-Frame-Options: SAMEORIGIN
  - [ ] X-XSS-Protection: 1; mode=block
- [ ] Cookie policy compliant with GDPR/CCPA

---

## SEO Testing

### On-Page SEO
Check each major page:
- [ ] Unique, descriptive title (< 60 chars)
- [ ] Unique meta description (150-160 chars)
- [ ] H1 tag present and unique
- [ ] Heading hierarchy logical (H1 → H2 → H3)
- [ ] Alt text on images
- [ ] Internal links use descriptive anchor text
- [ ] URLs are clean and descriptive
- [ ] Canonical tags (if needed)

### Technical SEO
- [ ] robots.txt configured
- [ ] Sitemap.xml created and submitted
- [ ] Google Search Console set up
- [ ] Open Graph tags present (for social sharing)
- [ ] Twitter Card tags present
- [ ] Favicon displays in browser tabs
- [ ] 404 page exists and branded
- [ ] No broken links (check with [Dead Link Checker](https://www.deadlinkchecker.com/))

### Structured Data (Optional)
- [ ] Organization schema
- [ ] Breadcrumb schema
- [ ] Article schema (for blog posts)

---

## Content Quality

### Text Content
- [ ] No "Lorem ipsum" placeholder text
- [ ] Spell-check passed
- [ ] Grammar-check passed
- [ ] Consistent brand voice
- [ ] No template/demo text remaining
- [ ] Company name correct everywhere
- [ ] Contact info correct everywhere

### Images
- [ ] All images load
- [ ] No broken image links
- [ ] Alt text present and descriptive
- [ ] Images relevant to content
- [ ] No placeholder images ("placeholder.jpg", stock photos)
- [ ] Image dimensions appropriate
- [ ] Images compressed/optimized

### Links
- [ ] No broken internal links
- [ ] No broken external links
- [ ] External links open in new tab
- [ ] Email links use `mailto:`
- [ ] Phone links use `tel:`

---

## Final Pre-Launch Checklist

### Configuration
- [ ] Update email addresses in PHP files
- [ ] Add Google Analytics ID
- [ ] Update social media URLs (when accounts created)
- [ ] Configure email service (SMTP or mail service)
- [ ] Set up newsletter service (Mailchimp, etc.)
- [ ] Test contact form sends emails
- [ ] Test newsletter signup works

### Legal & Compliance
- [ ] Privacy policy complete and accurate
- [ ] Terms & conditions complete
- [ ] Cookie consent banner (if required)
- [ ] GDPR compliance (if serving EU)
- [ ] CCPA compliance (if serving CA)

### Hosting & Domain
- [ ] Domain registered
- [ ] DNS configured
- [ ] SSL certificate installed (HTTPS)
- [ ] Hosting configured
- [ ] File permissions set correctly
- [ ] Database set up (if needed)
- [ ] Backup system in place

### Final Testing
- [ ] Test on live server (not just local)
- [ ] Test forms on live server
- [ ] Test analytics tracking on live
- [ ] Clear cache and test
- [ ] Test from different networks
- [ ] Test from different devices

### Launch Preparation
- [ ] Set up website monitoring (UptimeRobot, Pingdom)
- [ ] Set up error logging
- [ ] Prepare announcement (social, email)
- [ ] Create launch checklist
- [ ] Plan post-launch monitoring (24 hours)

---

## Post-Launch Monitoring (First 24 Hours)

- [ ] Check analytics showing traffic
- [ ] Monitor form submissions
- [ ] Check for 404 errors
- [ ] Monitor server performance
- [ ] Check email delivery
- [ ] Monitor social mentions
- [ ] Check search console for errors

---

## Known Issues / Notes

Document any known issues or items requiring future attention:

1. **Header/Footer Navigation:** While navigation structure is defined and pages updated, manual verification of all nav links across all pages is recommended.

2. **Social Media Links:** Currently using placeholder URLs. Update with actual social media profiles when created.

3. **Content Placeholder:** Some pages may still have template content that should be replaced with actual Prime Reach Publishers content.

4. **Shop Pages:** Repurposed as catalog but need content updates specific to eBook browsing.

5. **Project Pages:** Repurposed as author portfolio/success stories but need actual case study content.

6. **Email Configuration:** PHP mail() function may not work on all servers. Consider SMTP configuration.

7. **Newsletter Integration:** Currently file-based. Consider upgrading to Mailchimp or similar service for better features.

8. **reCAPTCHA:** Not implemented. Consider adding for spam protection.

---

## Testing Sign-Off

**Tester Name:** _________________  
**Date:** _________________  
**Browser/Device:** _________________  

**Overall Status:**
- [ ] Ready for Launch
- [ ] Needs Minor Fixes
- [ ] Needs Major Fixes

**Notes:**
______________________________________________________
______________________________________________________
______________________________________________________

---

## Support & Resources

- **Testing Tools:**
  - [PageSpeed Insights](https://pagespeed.web.dev/)
  - [GTmetrix](https://gtmetrix.com/)
  - [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
  - [Dead Link Checker](https://www.deadlinkchecker.com/)
  - [W3C HTML Validator](https://validator.w3.org/)
  - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

- **Documentation:**
  - NAVIGATION_MAP.md
  - FORMS_SETUP_GUIDE.md
  - ANALYTICS_SETUP_GUIDE.md
  - Plan file

---

**Document Version:** 1.0  
**Last Updated:** January 2026


