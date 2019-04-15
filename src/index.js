import MultiBoxMenu from './effects/MultiBoxMenu';
import './styles/app.scss';

document.addEventListener("DOMContentLoaded", () => {
    // console.log('hello');
    document.querySelector('body').innerHTML = startingContent;
    const effectBtns = Array.from(document.getElementsByClassName('effect-btn'));
    const loadingContainer = document.getElementsByClassName('loading-container')[0];
    const loadingAnimation = document.getElementsByClassName('loading-animation')[0];
    const navLinks = Array.from(document.getElementsByClassName('nav-link'));
    const demoSuperNav = document.getElementsByClassName('demo-super-nav')[0];
    const burger = document.getElementById("burger-box");
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
            toggleLoading();
            document.querySelector('body').classList = btn.getAttribute("data-body-class");
        }, 2000);
    }));

    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home' ;
    const activeElem = document.getElementById('nav-link-' + startingSect);
   
        activeElem.classList.add('active');
        demoSuperNav.classList.add( ['about', 'services'].includes(startingSect) ? 'lightblue' : 'white');


    navLinks.forEach((navLink, idx) => navLink.addEventListener('click', (e) => {
        navLinks.forEach((link, idx2) => {
            link.classList.remove('active');
        });
        navLink.classList.add('active');
        // if(window.innerWidth > 800){
            demoSuperNav.classList.add(idx % 2 !== 0 ? "lightblue" : "white");
            demoSuperNav.classList.remove(idx % 2 === 0 ? "lightblue" : "white");
        // }
        // setTimeout( () => {
            demoSuperNav.classList.remove('open');
            burger.innerText = "menu";
            openMenu = !openMenu;
        // }, 0);
    }));

    // if (document.querySelector('body').classList[0] === 'multi-box-menu-effect'){

    const demo = document.getElementById('demo');

    MultiBoxMenu.render(demo);
    MultiBoxMenu.jsRecognize();

    const menuLis = Array.from(document.getElementsByClassName('js-menu-li'));
    const menuUl = menuLis[0].parentElement;

// }

});


const startingContent = `
    <div id="demo"></div>
    <div class="loading-wrapper">
        <div class="loading-container">
            <div class="loading-animation" data-anim="loading" data-text="loading...">loading...</div>
        </div>
    </div>
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


