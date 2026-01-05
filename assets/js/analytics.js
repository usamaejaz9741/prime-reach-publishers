/**
 * Prime Reach Publishers - Analytics Integration
 * Google Analytics 4 (GA4) Setup
 * 
 * Configuration:
 * 1. Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
 * 2. Get your ID from: https://analytics.google.com/
 * 3. Uncomment the Google Analytics snippet in HTML files
 */

// Google Analytics 4 Configuration
const GA4_MEASUREMENT_ID = 'G-XMPHNNZ0BN5'; // TODO: Replace with your GA4 ID

// Initialize Google Analytics
function initGA4() {
    // Check if GA is loaded
    if (typeof gtag === 'function') {
        console.log('Google Analytics initialized');
        
        // Track page views (automatic with gtag.js)
        
        // Custom event tracking examples:
        trackFormSubmissions();
        trackNewsletterSignups();
        trackCTAClicks();
        trackExternalLinks();
    }
}

// Track form submissions
function trackFormSubmissions() {
    document.querySelectorAll('form[name="contactForm"]').forEach(form => {
        form.addEventListener('submit', function(e) {
            if (typeof gtag === 'function') {
                gtag('event', 'form_submission', {
                    'event_category': 'Contact',
                    'event_label': 'Contact Form',
                    'value': 1
                });
            }
        });
    });
}

// Track newsletter signups
function trackNewsletterSignups() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            if (typeof gtag === 'function') {
                gtag('event', 'newsletter_signup', {
                    'event_category': 'Engagement',
                    'event_label': 'Newsletter Subscription',
                    'value': 1
                });
            }
        });
    });
}

// Track CTA button clicks
function trackCTAClicks() {
    document.querySelectorAll('.theme-btn, .cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            if (typeof gtag === 'function') {
                gtag('event', 'cta_click', {
                    'event_category': 'CTA',
                    'event_label': buttonText,
                    'value': 1
                });
            }
        });
    });
}

// Track external link clicks (Amazon, Apple Books, etc.)
function trackExternalLinks() {
    document.querySelectorAll('a[href*="amazon."], a[href*="apple.com/books"], a[href*="kobo."], a[href*="barnesandnoble."]').forEach(link => {
        link.addEventListener('click', function(e) {
            const destination = new URL(this.href).hostname;
            if (typeof gtag === 'function') {
                gtag('event', 'outbound_click', {
                    'event_category': 'External Link',
                    'event_label': destination,
                    'value': 1,
                    'transport_type': 'beacon'
                });
            }
        });
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGA4);
} else {
    initGA4();
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initGA4, GA4_MEASUREMENT_ID };
}




