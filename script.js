// Añadir animaciones suaves al scroll
document.addEventListener('DOMContentLoaded', () => {
    // Animación para elementos que aparecen al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                if (!element.classList.contains('animate__fadeIn')) {
                    element.classList.add('animate__fadeIn');
                }
            }
        });
    };

    // Escuchar el evento scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Animación inicial
    animateOnScroll();

    // Animación para los botones
    const buttons = document.querySelectorAll('.btn-primary, .btn-social');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Animación para las tarjetas
    const cards = document.querySelectorAll('.feature-card, .team-member, .gallery-item');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });

    // Información para cada sección
    const sectionInfo = {
        innovation: {
            title: 'Innovación',
            content: 'Nuestro enfoque innovador nos permite desarrollar soluciones únicas y efectivas para el monitoreo ambiental.'
        },
        quality: {
            title: 'Calidad',
            content: 'Mantenemos los más altos estándares de calidad en todos nuestros procesos y productos.'
        },
        team: {
            title: 'Equipo',
            content: 'Contamos con un equipo multidisciplinario de profesionales comprometidos con el medio ambiente.'
        }
    };

    // Función para mostrar la información
    function showInfo(section) {
        const infoDisplay = document.getElementById('info-display');
        const info = sectionInfo[section];
        
        // Animación de desvanecimiento
        infoDisplay.style.opacity = '0';
        
        setTimeout(() => {
            infoDisplay.innerHTML = `
                <h3>${info.title}</h3>
                <p>${info.content}</p>
            `;
            infoDisplay.style.opacity = '1';
        }, 300);
    }

    // Agregar evento de clic a los botones de sección
    const sectionButtons = document.querySelectorAll('.section-button');
    sectionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            showInfo(section);
        });
    });

    // Función para crear hojas cayendo
    function createFallingLeaves() {
        const container = document.createElement('div');
        container.className = 'falling-leaves';
        document.body.appendChild(container);

        const maxLeaves = 15; // Número máximo de hojas en pantalla

        function createLeaf() {
            // Verificar si ya hay demasiadas hojas
            if (container.children.length >= maxLeaves) {
                return;
            }

            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            leaf.style.left = Math.random() * 100 + 'vw';
            leaf.style.animationDuration = (Math.random() * 3 + 4) + 's'; // Entre 4 y 7 segundos
            leaf.style.opacity = Math.random() * 0.5 + 0.3; // Opacidad entre 0.3 y 0.8
            leaf.style.transform = `scale(${Math.random() * 0.3 + 0.3})`; // Tamaño más pequeño
            
            container.appendChild(leaf);
            
            // Eliminar la hoja después de que termine su animación
            setTimeout(() => {
                if (leaf.parentNode === container) {
                    container.removeChild(leaf);
                }
            }, parseFloat(leaf.style.animationDuration) * 1000);
            
            // Eliminar la hoja cuando termine la animación
            leaf.addEventListener('animationend', () => {
                leaf.remove();
            });
        }

        // Crear nuevas hojas periódicamente
        setInterval(createLeaf, 2000); // Crear una nueva hoja cada 2 segundos
        
        // Crear algunas hojas iniciales
        for(let i = 0; i < 5; i++) {
            setTimeout(createLeaf, i * 500);
        }
    }

    createFallingLeaves();
});
