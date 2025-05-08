document.addEventListener('DOMContentLoaded', function() {    
    const nav = document.querySelector('nav');
    const items = document.querySelectorAll('.experiencia-item');

    function updateActiveSection() {
        
        const windowMiddle = window.innerHeight / 2;
        
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemMiddle = rect.top + (rect.height / 2);
            
            if (Math.abs(itemMiddle - windowMiddle) < rect.height / 2) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        // Actualizar nav background
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    // Ejecutar al hacer scroll
    window.addEventListener('scroll', updateActiveSection);
    // Ejecutar al cargar la página
    updateActiveSection();
});