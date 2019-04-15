import MultiBoxMenu from './effects/MultiBoxMenu';
import './styles/app.scss';

document.addEventListener("DOMContentLoaded", () => {
    
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

    if (location.hash.length > 1){
    const startingSect = location.hash.slice(1);
    const activeElem = document.getElementById('nav-link-' + startingSect);
    activeElem.classList.add('active');
    demoSuperNav.classList.add( ['about', 'services'].includes(startingSect) ? 'lightblue' : 'white');}

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





