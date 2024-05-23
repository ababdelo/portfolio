'use strict';

// Custom alert function
function customAlert(title, message) {
    const body = document.body;

    // Create a backdrop for the page content
    const backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    body.appendChild(backdrop);

    // Create the alert container
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert-container');

    const alertContent = document.createElement('div');
    alertContent.classList.add('alert-content');

    const alertTitle = document.createElement('h2');
    alertTitle.textContent = title;

    const alertMessage = document.createElement('p');
    alertMessage.textContent = message;

    const alertButton = document.createElement('button');
    alertButton.textContent = 'OK';
    alertButton.addEventListener('click', function() {
        body.removeChild(backdrop); // Remove the backdrop
        body.removeChild(alertContainer); // Remove the alert container
        document.removeEventListener('keydown', escKeyListener); // Remove keydown event listener
    });

    // Append elements to the alert container
    alertContent.appendChild(alertTitle);
    alertContent.appendChild(alertMessage);
    alertContent.appendChild(alertButton);
    alertContainer.appendChild(alertContent);
    body.appendChild(alertContainer);

    // Function to handle Esc key press
    function escKeyListener(event) {
        if (event.key === 'Escape') {
            body.removeChild(backdrop); // Remove the backdrop
            body.removeChild(alertContainer); // Remove the alert container
            document.removeEventListener('keydown', escKeyListener); // Remove keydown event listener
        }
    }

    // Add event listener for keydown event to handle Esc key
    document.addEventListener('keydown', escKeyListener);
}

// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable F12 and other key combinations for viewing source or opening developer tools
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && (event.key === 'u' || event.key === 'U' || event.key === 's' || event.key === 'S'))) {
        customAlert('Content Protection', 'Content is protected. Viewing the page source or using developer tools is disabled.');
        event.preventDefault();
    }
});

// jQuery part to handle ctrl+u
$(document).keypress("u", function(event) {
    if (event.ctrlKey) {
        customAlert('Content Protection', 'Content is protected. Viewing the page source is disabled.');
        event.preventDefault();
    }
});
