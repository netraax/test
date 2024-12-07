// Main application file
import { initializeAnalytics } from './behaviors/analytics.js';
import { setupNotifications } from './behaviors/notifications.js';
import { initProfileParser } from './behaviors/profileParser.js';
import { initTransactionParser } from './behaviors/transactionParser.js';
import { initializeUI } from './behaviors/uiManager.js';
import { initExportManager } from './behaviors/exportManager.js';

// Initialize application components
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core functionalities
    initializeUI();
    initializeAnalytics();
    setupNotifications();

    // Initialize parsers
    initProfileParser();
    initTransactionParser();
    initExportManager();
});

// Global error handling
window.onerror = (message, source, lineno, colno, error) => {
    console.error('Application Error:', { message, source, lineno, colno, error });
    // Show user-friendly error message
    document.querySelector('.notifications').innerHTML = `
        <div class="error-message">
            Une erreur est survenue. Veuillez réessayer.
        </div>
    `;
};
