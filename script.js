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
        // document.body.style.overflowY = 'hidden';

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
// New images array
const galleryItems = [
    {
        id: 1,
        url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763510816/CONCJBO2_fzsqtl.webp',
        title: 'Portfolio Grid',
        description: 'A collection of creative projects',
        size: 'large'
    },
    {
        id: 3,
        url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1741884404/TECNIMUX-OG.png',
        title: 'Open Graph',
        description: 'Cityscape at golden hour',
        size: 'tall'
    },
    {
        id: 2,
        url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763510111/LALAU_tobxlb.png',
        title: 'Modern Architecture',
        description: 'Contemporary building design',
        size: 'normal'
    },
    {
        id: 4,
        url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763510607/CONCJBO_gqnbf0.webp',
        title: 'Nature & Design',
        description: 'Architecture meets beauty',
        size: 'wide'
    },
    {
        id: 5,
        url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763510111/Calculator-OG_kmao9m.png',
        title: 'Minimalist Spaces',
        description: 'Modern interior design',
        size: 'normal'
    },
    {
        id: 6,
        url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763516478/J-v23_kalehm.png',
        title: 'Nature & Design',
        description: 'Architecture meets beauty',
        size: 'normal'
    },
    {
        id: 7,
        url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763510111/BEDOYA_nlmoqx.png',
        title: 'Nature & Design',
        description: 'Architecture meets beauty',
        size: 'normal'
    },
    {
        id: 8,
        url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763517794/1_pr68gp.png',
        title: 'Nature & Design',
        description: 'Architecture meets beauty',
        size: 'tall'
    },
    {
        id: 9,
        url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763517793/2_zfkzqg.png',
        title: 'Nature & Design',
        description: 'Architecture meets beauty',
        size: 'tall'
    }
];

let currentIndex = 0;

// Initialize gallery
function initGallery() {
    renderGallery();
    setupEvents();
}

function renderGallery() {
    const grid = document.getElementById("galleryGrid");

    grid.innerHTML = galleryItems.map((item, i) => `
        <div class="gallery-card ${item.size}" data-index="${i}">
            <img src="${item.url}" alt="">
            <div class="card-overlay">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function openLightbox(i) {
    currentIndex = i;
    const item = galleryItems[i];

    const lb = document.getElementById("lightbox");
    const content = document.getElementById("lightboxContent");

    content.innerHTML = `
        <img src="${item.url}" alt="">
        <div class="lightbox-info">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;

    lb.classList.add("active");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
}

function navigate(dir) {
    if (dir === "next") {
        currentIndex = (currentIndex + 1) % galleryItems.length;
    } else {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    openLightbox(currentIndex);
}

function setupEvents() {
    document.querySelectorAll(".gallery-card").forEach(card => {
        card.addEventListener("click", e => {
            const i = parseInt(e.currentTarget.dataset.index);
            openLightbox(i);
        });
    });

    document.getElementById("closeLightbox").onclick = closeLightbox;
    document.getElementById("lightboxPrev").onclick = () => navigate("prev");
    document.getElementById("lightboxNext").onclick = () => navigate("next");
}

initGallery();













        // Image data - Replace with your own images
        const images = [
            {
                id: 1,
                url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763514422/zer-web_pblovz.png',
                title: 'Zer Utilities',
                description: 'Sitio web de utilidades personales',
            },
            {
                id: 2,
                url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763514422/cjbo-web_qozmhe.png',
                title: 'CJBO Redes',
                description: 'Centro administrativo de infraestructura de redes para un centro educativo',
            },
            {
                id: 3,
                url: 'https://res.cloudinary.com/dxwfpc5fu/image/upload/v1763514597/presim-web_rwmubi.png',
                title: 'Presim',
                description: 'Presentación escolar interactiva',
            }
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



        