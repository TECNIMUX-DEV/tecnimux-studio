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
                details: {
                    overview: 'Our brand identity service creates a cohesive visual language that represents your company\'s values, personality, and vision. We conduct thorough research to understand your market position and develop designs that resonate with your target audience.',
                    deliverables: [
                        'Primary and secondary logo variations',
                        'Comprehensive brand style guide',
                        'Color system with HEX/RGB/CMYK values',
                        'Typography hierarchy and pairing',
                        'Print-ready business collateral',
                        'Digital asset templates',
                        'Brand presentation deck'
                    ],
                    timeline: '4-6 weeks',
                    process: 'Discovery → Strategy → Concept Development → Refinement → Final Delivery'
                }
            },
            {
                id: 2,
                category: 'web',
                icon: '💻',
                title: 'Paginas Web',
                description: 'Diseñamos páginas web modernas y responsivas que atraen a los visitantes.',
                features: [
                    'Diseño personalizado de páginas web',
                    'Compatibilidad con diferentes dispositivos',
                    'Optimización de la experiencia del usuario',
                    'Todo es funcional',
                    'Estructura SEO-friendly'
                ],
                price: 'Desde $300.000',
                details: {
                    overview: 'Transform your online presence with custom web designs that combine aesthetics with functionality. We create responsive, user-centered designs that work seamlessly across all devices and drive conversions.',
                    deliverables: [
                        'Wireframes and information architecture',
                        'High-fidelity mockups (desktop, tablet, mobile)',
                        'Interactive clickable prototypes',
                        'Design system and component library',
                        'Style guide with specifications',
                        'Developer handoff documentation',
                        'Image and icon assets'
                    ],
                    timeline: '6-8 weeks',
                    process: 'Research → Wireframing → Visual Design → Prototyping → Testing → Handoff'
                }
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
            //     details: {
            //         overview: 'Design exceptional user experiences through research-driven insights and iterative design processes. We create interfaces that are not only beautiful but also intuitive and accessible.',
            //         deliverables: [
            //             'User research findings and personas',
            //             'User journey maps and flows',
            //             'Low and high-fidelity wireframes',
            //             'Interactive prototypes',
            //             'Visual interface designs',
            //             'Design system documentation',
            //             'Usability testing reports',
            //             'Developer specifications'
            //         ],
            //         timeline: '5-7 weeks',
            //         process: 'Research → Ideation → Wireframing → Design → Prototyping → Testing → Iteration'
            //     }
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
                    'Posters',
                    'Stikers',
                    'Materiales para impresión',
                    'Implementación de redes sociales',
                    'Banners',
                    'Videos',
                    'Fondos de pantalla personalizados',
                    'Logotipo semi-profesional',
                    'Codigos Qr personalizados',
                    
                ],
                price: 'Desde $15.000',
                details: {
                    overview: 'Elevate your marketing efforts with compelling graphic designs that tell your story and engage your audience. From social media posts to print materials, we create visuals that make an impact.',
                    deliverables: [
                        'Custom graphic designs',
                        'Print-ready files (CMYK)',
                        'Web-optimized graphics (RGB)',
                        'Vector source files',
                        'Multiple size variations',
                        'Template files for future use',
                        'Usage guidelines'
                    ],
                    timeline: '2-4 weeks',
                    process: 'Brief → Concept → Design → Revisions → Final Files'
                }
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
                    'Edición de videos de publicidad'
                ],
                price: 'Desde $30.000',
                details: {
                    overview: 'Capture attention and explain complex concepts through the power of motion design. We create animations that enhance your brand story and engage audiences across all platforms.',
                    deliverables: [
                        'Animated logo sequences',
                        'Motion graphics templates',
                        'Video content (various formats)',
                        'Social media animation loops',
                        'UI animation specifications',
                        'Storyboards and style frames',
                        'Editable project files',
                        'Multiple export formats'
                    ],
                    timeline: '3-5 weeks',
                    process: 'Concept → Storyboarding → Style Frames → Animation → Sound → Final Render'
                }
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
                </div>
            `).join('');
        }

        // Open modal with service details
        function openModal(serviceId) {
            const service = services.find(s => s.id === serviceId);
            if (!service) return;

            const modal = document.getElementById('modal');
            const modalContent = document.getElementById('modalContent');

            modalContent.innerHTML = `
                <button class="modal-close" onclick="closeModal()">×</button>
                <div class="modal-header">
                    <div class="modal-icon ${service.category}">${service.icon}</div>
                    <h3 class="modal-title">${service.title}</h3>
                    <p class="modal-subtitle">${service.price}</p>
                </div>
                <div class="modal-body">
                    <p>${service.details.overview}</p>
                </div>
                <div class="modal-details">
                    <h4>What's Included</h4>
                    <ul>
                        ${service.details.deliverables.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="modal-details">
                    <h4>Timeline & Process</h4>
                    <p style="margin-bottom: 0.5rem;"><strong>Timeline:</strong> ${service.details.timeline}</p>
                    <p><strong>Process:</strong> ${service.details.process}</p>
                </div>
                <div class="modal-footer">
                    <button class="modal-button secondary" onclick="closeModal()">Close</button>
                    <button class="modal-button primary" onclick="alert('Contact form would open here')">Get Started</button>
                </div>
            `;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close modal on outside click
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target.id === 'modal') {
                closeModal();
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Initialize
        renderServices();