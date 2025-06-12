document.addEventListener('DOMContentLoaded', function() {    
    const nav = document.querySelector('nav');
   
    // const items = document.querySelectorAll('.experiencia-item');
    const form = document.querySelector('form[action^="https://formspree.io"]');
    
    form.addEventListener('submit', function(e) {
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errores = [];

        if (!nombre) {
        errores.push("El nombre es obligatorio.");
        }
        if (!email || !emailRegex.test(email)) {
        errores.push("El email no es válido.");
        }
        if (!mensaje) {
        errores.push("El mensaje es obligatorio.");
        }

        // Si hay errores, evita el envío y muestra alert
        if (errores.length > 0) {
        e.preventDefault();
        alert(errores.join('\n'));
        }
    });

    function updateActiveSection() {
        
        // const windowMiddle = window.innerHeight / 2;
        
        // items.forEach(item => {
        //     const rect = item.getBoundingClientRect();
        //     const itemMiddle = rect.top + (rect.height / 2);
            
        //     if (Math.abs(itemMiddle - windowMiddle) < rect.height / 2) {
        //         item.classList.add('active');
        //     } else {
        //         item.classList.remove('active');
        //     }
        // });

        const scrollThreshold = 0.7 * window.innerHeight;
        // Actualizar nav background
        if (window.scrollY > 90 && window.scrollY < scrollThreshold) {
            nav.classList.remove('scrolled');
        } else {
            nav.classList.add('scrolled');
        }
    }

    // Ejecutar al hacer scroll
    window.addEventListener('scroll', updateActiveSection);
    // Ejecutar al cargar la página
    updateActiveSection();
});