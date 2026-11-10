
/* =========================================
   1. MENÚ HAMBURGUESA
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

        });

        // Cerrar menú al seleccionar una página

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
            });

        });

    }


    /* =========================================
       2. FORMULARIO DE CONTACTO
    ========================================= */

    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm) {

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;

            console.log("Formulario enviado:");
            console.log("Nombre:", nombre);
            console.log("Correo:", email);
            console.log("Mensaje:", mensaje);

            formMessage.textContent =
                "¡Gracias por escribir! Tu mensaje ha sido registrado.";

            alert("¡Gracias por contactar con Disfrutomiarte!");

            contactForm.reset();

        });

    }

});
