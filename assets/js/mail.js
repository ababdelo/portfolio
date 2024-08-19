function showCustomAlert(title, message, type) {
    // Create backdrop
    let backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");
    
    // Create alert container
    let alertContainer = document.createElement("div");
    alertContainer.classList.add("alert-container", "animate-popup");
    
    // Create alert content
    let alertContent = document.createElement("div");
    alertContent.classList.add("alert-content");
    
    // Add title and message
    let alertTitle = document.createElement("h2");
    alertTitle.textContent = title;
    let alertMessage = document.createElement("p");
    alertMessage.textContent = message;
    
    // Create OK button
    let okButton = document.createElement("button");
    okButton.textContent = "OK";
    okButton.addEventListener("click", () => {
        document.body.removeChild(backdrop);
        document.body.removeChild(alertContainer);
    });
    
    // Append elements
    alertContent.appendChild(alertTitle);
    alertContent.appendChild(alertMessage);
    alertContent.appendChild(okButton);
    alertContainer.appendChild(alertContent);
    
    // Append to body
    document.body.appendChild(backdrop);
    document.body.appendChild(alertContainer);
}

function sendMail() {
    // Get the contact form field values
    var fromName = document.getElementById("contact-name").value.trim();
    var email = document.getElementById("contact-email").value.trim();
    var message = document.getElementById("contact-message").value.trim();

    // Check if any of the fields are empty
    if (!fromName || !email || !message) {
        showCustomAlert("Error", "All fields are required. Please fill in the missing information.", "error");
        return; // Stop the function if validation fails
    }

    // Get the text content of the <h1> element
    var h1Text = document.getElementById("usr-name").innerText;
    var usrname = h1Text.replace(/\s+/g, ' ').trim();

    // Set up params for email
    var params = {
        from_name: fromName,
        from_email: email,
        message: message,
        to_name: usrname
    };

    const serviceID = "NzZmM2U1N2QwNjhkMTY5Yjk3";
    const templateID = "NDRiM2VkMTM5MmQ2OGM3Njg3";

    // Send email using emailjs
    emailjs.send(serviceID, templateID, params)
    .then((res) => {
        // Clear form fields
        document.getElementById("contact-name").value = "";
        document.getElementById("contact-email").value = "";
        document.getElementById("contact-message").value = "";

        // Show success popup alert
        showCustomAlert("Success", "Your message was sent successfully!", "success");
    })
    .catch((err) => {
        console.error(err);
        // Show error popup alert
        showCustomAlert("Error", "Failed to send the message. Please try again later.", "error");
    });
}
