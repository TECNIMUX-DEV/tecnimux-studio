        // Services data
        const services = [
            {
                id: 1,
                category: 'brand',
                icon: '🎨',
                title: 'Identidad de marca',
                description: 'Creamos marcas memorables desde cero que destaquen y conecten con el publico objetivo.',
                features: [
                    'Diseño de Logotipo y marca',
                    'Logotipo profesional',
                    'Paleta de colores y tipografía',
                    'Manual completo de marca',
                    'Formato para negocios y estampas',
                    'Implementación en redes sociales',
                    'Visualización en producción'
                ],
                price: 'Desde $250.000',
                select: 'Iniciar Chat',
                link: "https://wa.me/573008380370?text=Hola%20%F0%9F%98%8E%2C%20Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Identidad%20de%20Marca",

            },
            {
                id: 2,
                category: 'web',
                icon: '💻',
                title: 'Páginas Web',
                description: 'Diseñamos páginas web modernas y responsivas que atraen a los visitantes.',
                features: [
                    'Diseño personalizado de páginas web',
                    'Compatibilidad con diferentes dispositivos',
                    'Optimización de la experiencia del usuario',
                    'Dominio dedicado', 
                    'Hosting por 1 Año',
                    'Todo es funcional',
                    'Estructura SEO-friendly',
                ],
                price: 'Desde $300.000',
                select: 'Iniciar Chat',
                link: 'https://wa.me/573008380370?text=Hola%20%F0%9F%92%A5%2C%20Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Paginas%20Web.',
            },
            // {
            //     id: 3,
            //     category: 'uiux',
            //     icon: '📱',
            //     title: 'UI/UX Design',
            //     description: 'Craft intuitive digital experiences that delight users and achieve business objectives.',
            //     features: [
            //         'User research and personas',
            //         'Wireframing and prototyping',
            //         'Interface design systems',
            //         'Usability testing',
            //         'Interaction design'
            //     ],
            //     price: 'From $4,000',
            //     select: 'Iniciar Chat',
            // },
            {
                id: 4,
                category: 'graphic',
                icon: '🖼️',
                title: 'Diseño Gráfico Especifico',
                description: 'Suplimos tus necesidades con calidad adaptandonos a lo que necesitas.',
                features: [
                    'Edición de fotos',
                    'Creación de ilustraciones',
                    'Diseño de presentaciones',
                    'Stikers, Posters y Banners',
                    'Materiales para impresión',
                    'Implementación de redes sociales',
                    'Videos',
                    'Fondos de pantalla personalizados',
                    'Logotipo semi-profesional',
                    'Codigos Qr personalizados',
                    
                ],
                price: 'Desde $15.000',
                select: 'Iniciar Chat',
                link: 'https://wa.me/573008380370?text=Hola%20%F0%9F%8E%AF%2C%20Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Dise%C3%B1o%20Especifico.',
            },
            {
                id: 5,
                category: 'motion',
                icon: '🎬',
                title: 'Publicidad',
                description: 'Creamos toda la publicidad que tu marca necesita.',
                features: [
                    'Exposicion de productos',
                    'Afiches para eventos',
                    'Targeteria y volantes',
                    'Publicidad en redes sociales',
                    'Carteles informativos',
                    'Videos publicitarios'
                ],
                price: 'Desde $30.000',
                select: 'Iniciar Chat',
                link: 'https://wa.me/573008380370?text=Hola%20%F0%9F%93%A3%2C%20Quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Publicidad.',
                // details: {
                //     overview: 'Capture attention and explain complex concepts through the power of motion design. We create animations that enhance your brand story and engage audiences across all platforms.',
                //     deliverables: [
                //         'Animated logo sequences',
                //         'Motion graphics templates',
                //         'Video content (various formats)',
                //         'Social media animation loops',
                //         'UI animation specifications',
                //         'Storyboards and style frames',
                //         'Editable project files',
                //         'Multiple export formats'
                //     ],
                //     timeline: '3-5 weeks',
                //     process: 'Concept → Storyboarding → Style Frames → Animation → Sound → Final Render'
                // }
            }
        ];

        // Render services
        function renderServices() {
            const grid = document.getElementById('servicesGrid');
            grid.innerHTML = services.map(service => `
                <div class="service-card ${service.category}" onclick="openModal(${service.id})">
                    <div class="service-icon">${service.icon}</div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.description}</p>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <div class="service-price">${service.price}</div>
                    <div class="service-select">${service.select}</div>
                </div>
            `).join('');
        }


        function openModal(serviceId) {
            window.location.href = services.find(s => s.id === serviceId).link;
        }



        // // Open modal with service details
        // function openModal(serviceId) {
        //     const service = services.find(s => s.id === serviceId);
        //     if (!service) return;

        //     const modal = document.getElementById('modal');
        //     const modalContent = document.getElementById('modalContent');

        //     modalContent.innerHTML = `
        //         <button class="modal-close" onclick="closeModal()">×</button>
        //         <div class="modal-header">
        //             <div class="modal-icon ${service.category}">${service.icon}</div>
        //             <h3 class="modal-title">${service.title}</h3>
        //             <p class="modal-subtitle">${service.price}</p>
        //         </div>
        //         <div class="modal-body">
        //             <p>${service.details.overview}</p>
        //         </div>
        //         <div class="modal-details">
        //             <h4>What's Included</h4>
        //             <ul>
        //                 ${service.details.deliverables.map(item => `<li>${item}</li>`).join('')}
        //             </ul>
        //         </div>
        //         <div class="modal-details">
        //             <h4>Timeline & Process</h4>
        //             <p style="margin-bottom: 0.5rem;"><strong>Timeline:</strong> ${service.details.timeline}</p>
        //             <p><strong>Process:</strong> ${service.details.process}</p>
        //         </div>
        //         <div class="modal-footer">
        //             <button class="modal-button secondary" onclick="closeModal()">Cerrar</button>
        //             <button class="modal-button primary" onclick="alert('Contact form would open here')">Iniciar</button>
        //         </div>
        //     `;

        //     modal.classList.add('active');
        //     document.body.style.overflow = 'hidden';
        // }

        // // Close modal
        // function closeModal() {
        //     const modal = document.getElementById('modal');
        //     modal.classList.remove('active');
        //     document.body.style.overflow = '';
        // }

        // // Close modal on outside click
        // document.getElementById('modal').addEventListener('click', function(e) {
        //     if (e.target.id === 'modal') {
        //         closeModal();
        //     }
        // });

        // // Close modal on Escape key
        // document.addEventListener('keydown', function(e) {
        //     if (e.key === 'Escape') {
        //         closeModal();
        //     }
        // });

        // Initialize
        renderServices();


        const hero = document.getElementById('hero');
        const heroTitle = document.getElementById('hero-title');
        const heroDescrip = document.getElementById('hero-descrip');
        const container = document.querySelector('.container');
        const capa = document.querySelector('.capa');

        //  let scrollY = 0;

        // function hiddenHero() {
        //     if (window.scrollY > 100) {
        //         scrollY = window.scrollY;
        //         hero.classList.add('hidden'); 
        //         console.log('hola');
        //     } else {
        //         hero.classList.remove('hidden');
        //         window.scrollTo(0, scrollY);
        //     }
        // }

        // window.addEventListener('scroll', hiddenHero);

        // window.addEventListener('scroll', () => {
        //     if (window.scrollY > 50) {
        //     hero.classList.add('hidden');
        //     heroTitle.classList.add('fh1');

        //     container.classList.add('ct');

        //     } else {
        //         hero.classList.remove('hidden');
        //         heroTitle.classList.remove('fh1');  
        //         heroDescrip.classList.add('fp');
        //     }
        // })

    function hiddenHero() {

        setTimeout(() => {
            hero.classList.add('hidden');
            heroTitle.classList.add('fh1');
            heroDescrip.classList.add('fp');
            capa.style.display = 'none';
            overflow();

        }, 2000);
        overflowNone();
        }


        function overflow() {
            document.body.style.overflow = 'auto';
        }
        function overflowNone() {
            document.body.style.overflow = 'hidden';
        }


        hiddenHero();


        hero.addEventListener('click', () => {
            hero.style.display = 'none';
            overflow();
        })