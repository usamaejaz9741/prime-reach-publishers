# Forms Configuration Guide - Prime Reach Publishers

## Overview

This guide explains the form functionality for your Prime Reach Publishers website. All forms use Web3Forms API for reliable, server-independent form processing.

## What's Implemented

✅ Contact form with Web3Forms integration  
✅ Newsletter signup with Web3Forms integration  
✅ AJAX form handling with user feedback  
✅ Forms added to all pages across the site

## Web3Forms Configuration

Your site uses two separate Web3Forms endpoints:

### PRP-Leads (Contact Forms)
- **Access Key:** `4da3f7bc-388e-4bc7-a115-e575aebb5702`
- **Purpose:** Captures contact form submissions from hero and contact page
- **Dashboard:** [web3forms.com/forms](https://web3forms.com/forms)

### PRP-Newsletter (Newsletter Signups)
- **Access Key:** `1998438c-5a41-4c4c-bc41-60564cea6d52`
- **Purpose:** Captures newsletter email subscriptions from footer forms
- **Dashboard:** [web3forms.com/forms](https://web3forms.com/forms)

## How It Works

### Contact Forms
Located in:
- **Homepage** (`index.html`) - Hero section contact form
- **Contact Page** (`contact.html`) - Main contact form

Form fields submitted:
- Name (required)
- Email (required)
- Subject or Phone Number (required)
- Message (required)

### Newsletter Forms
Located in the footer of:
- `index.html`
- `contact.html`
- `about.html`
- `pricing.html`
- `blog.html`
- `blog-details.html`
- `projects.html`
- `product-details.html`

Form fields submitted:
- Email (required)

## Managing Form Submissions

### View Submissions
1. Visit [web3forms.com](https://web3forms.com/)
2. Log in to your account
3. Select the appropriate form (PRP-Leads or PRP-Newsletter)
4. View submissions, export to CSV, or set up integrations

### Email Notifications
Web3Forms automatically sends email notifications for each submission to the email address associated with your Web3Forms account.

To customize notification settings:
1. Log in to Web3Forms dashboard
2. Select your form
3. Go to "Email Settings"
4. Configure notification preferences

## Customization Options

### Add Custom Fields
To add additional fields to any form:

1. **Add the input to the HTML:**
```html
<div class="form-group">
  <label for="company">Company Name</label>
  <input type="text" id="company" name="company" class="form-control" placeholder="Your Company">
</div>
```

2. **No backend changes needed** - Web3Forms automatically captures all form fields

### Redirect After Submission
Add this hidden field to redirect users after successful submission:
```html
<input type="hidden" name="redirect" value="https://primereachpublishers.com/thank-you.html">
```

### Custom Email Subject
Add this to customize the email subject line:
```html
<input type="hidden" name="subject" value="New Contact from Prime Reach Publishers">
```

### Add CC/BCC Recipients
```html
<input type="hidden" name="cc" value="sales@example.com">
<input type="hidden" name="bcc" value="archive@example.com">
```

### Spam Protection

Web3Forms includes built-in spam protection features:

#### Honeypot Field (Already Implemented)
All forms include a hidden honeypot field that spam bots will fill out:
```html
<div class="visually-hidden" aria-hidden="true">
  <label for="newsletterWebsite">Website</label>
  <input type="text" id="newsletterWebsite" name="website" tabindex="-1" autocomplete="off">
</div>
```

#### Add reCAPTCHA (Optional)
For additional spam protection:

1. Get reCAPTCHA keys from [Google reCAPTCHA](https://www.google.com/recaptcha)
2. Add hidden field to form:
```html
<input type="hidden" name="recaptcha_site_key" value="YOUR_RECAPTCHA_SITE_KEY">
```
3. Add reCAPTCHA widget before submit button:
```html
<div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
```

## Integrations

Web3Forms supports integrations with popular services:

### Zapier Integration
1. Connect Web3Forms to Zapier
2. Trigger actions in 5000+ apps (Slack, Google Sheets, CRM, etc.)
3. Configure in Web3Forms dashboard

### Webhook Integration
Send form submissions to your own API:
1. Add webhook URL in Web3Forms dashboard
2. Receive JSON payload for each submission
3. Process data in your own system

### Common Integrations
- **Google Sheets** - Automatically log submissions
- **Slack** - Get real-time notifications
- **Mailchimp** - Add subscribers to mailing list
- **HubSpot** - Create contacts/leads
- **Salesforce** - Create leads automatically

## Testing

### Test the Forms
1. Visit your website
2. Submit the contact form with test data
3. Submit the newsletter form with a test email
4. Check your Web3Forms dashboard for submissions
5. Verify email notifications arrive

### What to Test
- [ ] Contact form submits successfully
- [ ] Newsletter form submits successfully
- [ ] Success messages display correctly
- [ ] Error handling works (try invalid email)
- [ ] Loading states show during submission
- [ ] Form resets after successful submission
- [ ] Email notifications arrive

## Troubleshooting

### Forms Not Submitting?
1. Check browser console for JavaScript errors
2. Verify `assets/js/forms.js` is loaded
3. Ensure forms are on a web server (not local file://)
4. Check Web3Forms dashboard for submissions

### Not Receiving Emails?
1. Check spam/junk folder
2. Verify email address in Web3Forms account settings
3. Check Web3Forms dashboard - submissions may still be recorded
4. Update notification settings in Web3Forms

### AJAX Not Working?
1. Verify jQuery is loaded before `forms.js`
2. Check browser console for errors
3. Test form with direct POST (without JavaScript)

## File Structure

**Form Handler JavaScript:**
- `assets/js/forms.js` - AJAX form submission and user feedback

**Form Locations:**
- Contact forms: `index.html`, `contact.html`
- Newsletter forms: All pages (footer section)

## Benefits of Web3Forms

✅ **No Server Configuration** - Works on static hosting  
✅ **No PHP/Backend Required** - Pure client-side integration  
✅ **Built-in Spam Protection** - Honeypot and reCAPTCHA support  
✅ **Email Notifications** - Instant alerts for new submissions  
✅ **Submission Dashboard** - View and manage all submissions  
✅ **Export to CSV** - Download submission data anytime  
✅ **Integrations** - Connect to Zapier, webhooks, and more  
✅ **File Uploads** - Support for attachment fields (if needed)  
✅ **Custom Redirects** - Send users to thank you pages  
✅ **Reliable Delivery** - 99.9% uptime guarantee

## Support

**Web3Forms Documentation:** [docs.web3forms.com](https://docs.web3forms.com/)  
**Web3Forms Support:** [web3forms.com/support](https://web3forms.com/support)

---

**That's it!** Your forms are configured and ready to use. Test them thoroughly before launch.
