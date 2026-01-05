# Analytics Setup Guide - Prime Reach Publishers

## Overview

This guide explains how to set up Google Analytics 4 (GA4) for your Prime Reach Publishers website.

## What's Already Implemented

✅ Custom event tracking script (`assets/js/analytics.js`) is already added to all pages  
✅ Automatic tracking for: form submissions, newsletter signups, CTA clicks, external links

## Quick Setup (3 Steps)

### Step 1: Get Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in or create an account
3. Create a new property for "Prime Reach Publishers"
4. Select "Web" as the platform
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Add GA4 Snippet to All Pages

Add this code to the `<head>` section of **every HTML page**, right after the `<meta>` tags:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID.**

### Step 3: Update analytics.js Configuration

Edit `assets/js/analytics.js` (line 12):
```javascript
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID
```

## Verify Installation

1. Open your website in a browser
2. Open browser DevTools (F12) → Console tab
3. You should see: "Google Analytics initialized"
4. In GA4, go to: Reports → Realtime
5. Open your website in another tab
6. You should see your visit in the realtime report

## Custom Events Being Tracked

Your site automatically tracks these events:

| Event Name | What It Tracks |
|------------|----------------|
| `form_submission` | Contact form submissions |
| `newsletter_signup` | Newsletter signups |
| `cta_click` | CTA button clicks |
| `outbound_click` | External retailer links |

### Mark Events as Conversions

In Google Analytics:
1. Go to: Admin → Events
2. Find events: `form_submission`, `newsletter_signup`
3. Toggle "Mark as conversion"

## Key Metrics to Monitor

### Weekly Review
- Page views and unique visitors
- Contact form submissions (conversion goal)
- Newsletter signups (conversion goal)
- Top landing pages
- Traffic sources (organic, direct, referral, social)

### Monthly Review
- Bounce rate trends
- Average session duration
- Top performing content
- Campaign performance (if running ads)

## Privacy Compliance

If serving EU or California users, add a cookie consent banner:

**Option 1: Cookiebot** (Free tier available)
```html
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="YOUR-CBID" type="text/javascript" async></script>
```

**Option 2: Cookie Consent by Osano**
```html
<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"></script>
<script>
window.cookieconsent.initialise({
  palette: {
    popup: {background: "#000"},
    button: {background: "#f1d600"}
  },
  theme: "classic",
  content: {
    message: "This website uses cookies to ensure you get the best experience.",
    dismiss: "Got it!",
    link: "Learn more",
    href: "privacy-policy.html"
  }
});
</script>
```

**Enable IP anonymization:**
```javascript
gtag('config', 'G-XXXXXXXXXX', {
  'anonymize_ip': true,
  'cookie_flags': 'SameSite=None;Secure'
});
```

## Compliance Checklist

- [ ] Privacy policy mentions analytics
- [ ] Cookie consent banner implemented (if required)
- [ ] IP anonymization enabled
- [ ] GDPR-compliant (if serving EU users)
- [ ] CCPA-compliant (if serving CA users)

## Troubleshooting

**Tracking not working?**
- Verify GA4 Measurement ID is correct in both places (head snippet + analytics.js)
- Check browser console for JavaScript errors
- Verify analytics.js is loaded (check Network tab in DevTools)

**Not seeing data in GA4?**
- Wait 24-48 hours for initial data to process
- Use Realtime reports for immediate verification
- Ensure Enhanced Measurement is enabled (Admin → Data Streams → Configure tag settings)

## Support Resources

- [GA4 Help Center](https://support.google.com/analytics/answer/10089681)
- [GA4 Setup Assistant](https://support.google.com/analytics/answer/9304153)
- [Analytics Academy](https://analytics.google.com/analytics/academy/) - Free courses

---

**That's it!** Once configured, your analytics will automatically track user behavior and conversions.


