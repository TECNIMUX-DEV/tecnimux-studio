document.addEventListener('DOMContentLoaded', () => {

// Menu
const menuMain = document.getElementById('menu-main');
const btnMenu = document.getElementById('burger');
const header = document.querySelector('header');

let stateToggle = true;
btnMenu.addEventListener('click', () => {
    if(stateToggle) {
        menuMain.style.display = "block";
        btnMenu.style.position = "fixed";
        header.style.position = "fixed";
        header.style.height = "100vh";
        document.body.style.overflowY = 'hidden';

    } else {
        menuMain.style.display = "none";
        btnMenu.style.position = "fixed";
        header.style.position = "absolute";
        header.style.height = "auto";
        document.body.style.overflowY = 'auto';
    }
stateToggle =! stateToggle;
})

// Close Somos TX Home
const who = document.getElementById('who');
const somosTX = document.getElementById('somos-tx');
const btnCloseSomostx = document.getElementById('btn-close-somostx');

btnCloseSomostx.addEventListener('click', () => {
    somosTX.style.display = "none";
    document.body.style.overflowY = 'auto';
})

who.addEventListener('click', () => {
    somosTX.style.display = "flex";
    document.body.style.overflowY = 'hidden';
    })

// Add header color when scrolling
let lastScrollY = window.scrollY;
const header01 = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header01.classList.add("header-hidden")
    } else{
       header01.classList.remove("header-hidden")
        }
        lastScrollY = window.scrollY;
        });

});

//  window.addEventListener('scroll', () => {
//      if (window.scrollY > lastScrollY) {
//          header01.classList.add("header-hidden")
//      } else if (lastScrollY <= 100){
//         header01.classList.remove("header-hidden")
//          }
//          lastScrollY = window.scrollY;
//          });

// });

// Button back to top
let backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 150 ) {
     backToTop.style.display= "block";
  } else {
     backToTop.style.display= "none";
      }
      });


// Show elements home 
const previews = document.querySelectorAll('.preview'); 
const bgDarkg = document.getElementById('bg-dark-g');
 
previews.forEach(preview => {
preview.addEventListener('click', () => {
    preview.classList.toggle('center-preview');
    bgDarkg.style.display = 'block';
    document.body.style.overflow = 'hidden';
} )


bgDarkg.addEventListener('click', () => {
    bgDarkg.style.display = 'none';
    preview.classList.remove('center-preview');
    document.body.style.overflow = 'auto';
    console.log('error');
})
})

// btn-close-Our
// let somostx = document.getElementById('somos-tx');
// let btnCloseSomostx = document.getElementById('btn-close-somostx');
// btnCloseSomostx.addEventListener('click', () => {

//     })

// Menu accessibility 
const acc = document.getElementById('acc');
const menuAcc = document.getElementById('menu-acc');
const btnCloseMenuAcc = document.getElementById('btn-close-menu-acc');

acc.addEventListener('click', () => {
    menuAcc.style.display = 'block';
})

btnCloseMenuAcc.addEventListener('click', () => {
    menuAcc.style.display = 'none';
})

// document.body.style.cursor = "url('/icons/CURSOR/CURSOR.png') 16 16, auto";



// TEMP
        // Image data - Replace with your own images
        const images = [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1600&h=900&fit=crop',
                title: 'Modern Architecture',
                description: 'Contemporary building design with clean lines',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=1600&h=900&fit=crop',
                title: 'Urban Landscape',
                description: 'Vibrant cityscape at golden hour',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=1600&h=900&fit=crop',
                title: 'Nature & Design',
                description: 'Where architecture meets natural beauty',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=1600&h=900&fit=crop',
                title: 'Minimalist Spaces',
                description: 'Clean and modern interior design',
            },
            {
                id: 5,
                url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop',
                title: 'Creative Workspace',
                description: 'Inspiring environments for productivity',
            },
        ];

        let activeIndex = 0;
        let isTransitioning = false;

        // Initialize carousel
        function init() {
            renderTabs();
            renderCarousel();
            renderDots();
            updateCounter();
            attachEventListeners();
        }

        function renderTabs() {
            const tabsContainer = document.getElementById('tabs');
            tabsContainer.innerHTML = images.map((image, index) => `
                <button class="tab ${index === activeIndex ? 'active' : ''}" data-index="${index}">
                    ${image.title}
                </button>
            `).join('');
        }

        function renderCarousel() {
            const carouselInner = document.getElementById('carouselInner');
            carouselInner.innerHTML = images.map((image, index) => `
                <div class="carousel-item ${index === activeIndex ? 'active' : ''}">
                    <img src="${image.url}" alt="${image.title}">
                    <div class="carousel-overlay"></div>
                    <div class="carousel-content">
                        <h3>${image.title}</h3>
                        ${image.description ? `<p>${image.description}</p>` : ''}
                    </div>
                </div>
            `).join('');
        }

        function renderDots() {
            const dotsContainer = document.getElementById('dots');
            dotsContainer.innerHTML = images.map((_, index) => `
                <button class="dot ${index === activeIndex ? 'active' : ''}" data-index="${index}" aria-label="Go to image ${index + 1}"></button>
            `).join('');
        }

        function updateCounter() {
            const counter = document.getElementById('counter');
            counter.textContent = `${activeIndex + 1} / ${images.length}`;
        }

        function goToSlide(index) {
            if (isTransitioning || index === activeIndex) return;
            
            isTransitioning = true;
            
            // Remove active class from current items
            document.querySelectorAll('.carousel-item.active, .tab.active, .dot.active').forEach(el => {
                el.classList.remove('active');
            });
            
            // Update active index
            activeIndex = index;
            
            // Add active class to new items
            document.querySelectorAll('.carousel-item')[activeIndex].classList.add('active');
            document.querySelectorAll('.tab')[activeIndex].classList.add('active');
            document.querySelectorAll('.dot')[activeIndex].classList.add('active');
            
            updateCounter();
            
            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        }

        function nextSlide() {
            const nextIndex = (activeIndex + 1) % images.length;
            goToSlide(nextIndex);
        }

        function prevSlide() {
            const prevIndex = (activeIndex - 1 + images.length) % images.length;
            goToSlide(prevIndex);
        }

        function attachEventListeners() {
            // Navigation buttons
            document.getElementById('prevBtn').addEventListener('click', prevSlide);
            document.getElementById('nextBtn').addEventListener('click', nextSlide);
            
            // Tabs
            document.querySelectorAll('.tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.index);
                    goToSlide(index);
                });
            });
            
            // Dots
            document.querySelectorAll('.dot').forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.index);
                    goToSlide(index);
                });
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                }
            });
        }

        // Initialize on page load
        init();
