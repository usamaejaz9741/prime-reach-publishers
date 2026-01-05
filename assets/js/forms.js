/**
 * Prime Reach Publishers - Enhanced Form Handling
 * Provides AJAX form submission with user feedback
 */

(function($) {
    'use strict';

    // Contact Form Handler
    function initContactForm() {
        const forms = document.querySelectorAll('form[name="contactForm"], #heroContactForm, #contactPageForm');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(form);
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                // Disable button and show loading
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
                
                // Send AJAX request
                fetch(form.action, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        showMessage(form, 'success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
                        form.reset();
                    } else {
                        showMessage(form, 'error', data.message || 'Something went wrong. Please try again.');
                    }
                })
                .catch(error => {
                    showMessage(form, 'error', 'Something went wrong. Please try again or contact us directly.');
                    console.error('Form error:', error);
                })
                .finally(() => {
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                });
            });
        });
    }

    // Newsletter Form Handler
    function initNewsletterForm() {
        const forms = document.querySelectorAll('.newsletter-form, #newsletterForm');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(form);
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                // Disable button and show loading
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Subscribing... <i class="fas fa-spinner fa-spin"></i>';
                
                // Send AJAX request
                fetch(form.action, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        showMessage(form, 'success', 'Thank you for subscribing! Check your inbox for publishing tips.');
                        form.reset();
                    } else {
                        showMessage(form, 'error', data.message || 'Subscription failed. Please try again.');
                    }
                })
                .catch(error => {
                    showMessage(form, 'error', 'Subscription failed. Please try again.');
                    console.error('Newsletter error:', error);
                })
                .finally(() => {
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                });
            });
        });
    }

    // Show message helper
    function showMessage(form, type, message) {
        // Remove any existing messages
        const existingMsg = form.querySelector('.form-message');
        if (existingMsg) {
            existingMsg.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
        messageDiv.style.cssText = 'padding: 15px; border-radius: 5px; margin-top: 15px;';
        messageDiv.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
        
        // Insert message after form
        form.appendChild(messageDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            messageDiv.style.transition = 'opacity 0.5s';
            setTimeout(() => messageDiv.remove(), 500);
        }, 5000);
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initContactForm();
            initNewsletterForm();
        });
    } else {
        initContactForm();
        initNewsletterForm();
    }

})(jQuery);


