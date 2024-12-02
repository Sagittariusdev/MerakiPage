document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
        
        // Limpiar el formulario
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").textContent = "Por favor, completa todos los campos.";
    }
});
