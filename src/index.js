import MultiBoxMenu from './effects/MultiBoxMenu';
import './styles/app.scss';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body').innerHTML = startingLoadWrapperContent;
    const loadingContainer = document.getElementsByClassName('loading-container')[0];
    
    let openMenu = false;
    let loading = false;

    const toggleLoading = () => {
        if (loading) {
            loadingContainer.style.transformOrigin = "bottom";
            loadingContainer.classList.remove('loading');
        } else {
            loadingContainer.style.transformOrigin = "top";
            loadingContainer.classList.add('loading');
        }
        loading = !loading;
    };

    toggleLoading();
    document.getElementById('starting-content-container').innerHTML = startingContent;
       const demo = document.getElementById('demo');

       MultiBoxMenu.render(demo);
       MultiBoxMenu.jsRecognize(toggleLoading);
    setTimeout(toggleLoading, 1000);
        
    // debugger

    const effectBtns = Array.from(document.getElementsByClassName('effect-btn'));
    const navLinks = Array.from(document.getElementsByClassName('nav-link'));
    const demoSuperNav = document.getElementsByClassName('demo-super-nav')[0];
    const burger = document.getElementById("burger-box");

    burger.addEventListener("click", (e) => {
        if (openMenu) {
            demoSuperNav.classList.remove('open');
            burger.innerText = "menu";
        } else {
            demoSuperNav.classList.add('open');
            burger.innerText = "x";
        }
        openMenu = !openMenu;
    });

    effectBtns.forEach(btn => btn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleLoading();
        setTimeout(() => {
            document.querySelector('body').classList = btn.getAttribute("data-body-class");
        }, 500);
        setTimeout(() => {
            toggleLoading();
        }, 2000);
    }));

    // ======= START:  handle initial active selection ======= //

    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home' ;
    const activeElem = document.getElementById('nav-link-' + startingSect);
    activeElem.classList.add('active');
    demoSuperNav.classList.add( ['about', 'services'].includes(startingSect) ? 'lightblue' : 'white');

    // ======= END:  handle initial active selection ======= //

    // ======= START:  addEventListeners to Demo Nav Links ======= //

    navLinks.forEach((navLink, idx) => navLink.addEventListener('click', (e) => {
        navLinks.forEach((link, idx2) => {
            link.classList.remove('active');
        });
        navLink.classList.add('active');
            demoSuperNav.classList.add(idx % 2 !== 0 ? "lightblue" : "white");
            demoSuperNav.classList.remove(idx % 2 === 0 ? "lightblue" : "white");
            demoSuperNav.classList.remove('open');
            burger.innerText = "menu";
            openMenu = !openMenu;
    }));

    // ======= END:  addEventListeners to Demo Nav Links ======= //

 

});


const startingLoadWrapperContent = `
    <div id="demo"></div>
    <div class="loading-wrapper">
        <div class="loading-container">
            <div class="loading-animation" data-anim="loading" data-text="loading...">loading...</div>
        </div>
    </div>
    <div id="starting-content-container">
        
    </div>
`;

const startingContent = `
    <div class="effect-selection">
            <span class="effect-btn" data-body-class="collapsing-menu-effect">Collapsing Menu</span>
            <span class="effect-btn" data-body-class="sliding-box-menu-effect">Sliding Box Menu</span>
            <span class="effect-btn" data-body-class="multi-box-menu-effect">Multi Box Menu</span>
            <!-- <span class="effect-btn" data-body-class="hover-split-menu-effect">Hover Split Menu</span> -->
            <!-- <span class="effect-btn" data-body-class="card-flip-effect">Card Flip</span> -->
            <!-- <span class="effect-btn" data-body-class="hover-reveal-effect">Hover Reveal</span> -->
            <!-- <span class="effect-btn" data-body-class="page-slide-effect">Page Slide</span> -->
    </div>




<div id="burger-box">menu</div>
<div class="demo-super-nav white">
    <nav class="demo-nav">
        <a href="#home" class="nav-link active" id="nav-link-home">home</a>
        <a href="#about" class="nav-link" id="nav-link-about">about</a>
        <a href="#products" class="nav-link" id="nav-link-products">products</a>
        <a href="#services" class="nav-link" id="nav-link-services">services</a>
        <a href="#contact" class="nav-link" id="nav-link-contact">contact</a>
    </nav>
</div>


<div class="demo-section-container">
    <section class="demo-section" id="home" >home</section>
    <section class="demo-section" id="about">about</section>
    <section class="demo-section" id="products" >products</section>
    <section class="demo-section" id="services">services</section>
    <section class="demo-section" id="contact" >contact</section>
</div>

`;


