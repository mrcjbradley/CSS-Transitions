import MultiBoxMenu from './effects/MultiBoxMenu';
import './styles/app.scss';

class content {
    constructor(elementType, {klass = 'test' , id = "", content = ""}){
        this.klass = klass ? klass :  "demo-section";
        this.id = id ? id : "";
        this.content = content ? content : "";
        this.element = document.createElement(elementType);
        this.element.classList.add(klass);
        this.element.setAttribute('id', id);
        this.element.append(content);
    }

    addClass(klass){
        this.element.classList.add(klass);
    }

    removeClass(klass){
        this.element.classList.remove(klass);
    }

    toggleClass(klass){
        if (this.element.classList.includes(klass)){
            this.element.classList.remove(klass);
        } else {
            this.element.classList.remove(klass);
        }
    }

    append(innerContent){
        if (Array.isArray(innerContent)){
            innerContent.forEach(inner => {
                this.element.append(inner.constructor === content ? inner.element : inner);
            });
        } else {
            this.element.append(innerContent.constructor === content ? innerContent.element : innerContent);
        }
    }
    
    addAttr(type, detail){
        this.element.setAttribute( type, detail);
    }

    addData(type, detail){
        this.addAttr(`data-${type}`, detail);
    }

} 

const homeSection = new content('section', {klass: 'demo-section', id: 'home', content: 'home'});
const aboutSection = new content('section', {klass: 'demo-section', id: 'about', content: 'about'});
const productsSection = new content('section', {klass: 'demo-section', id: 'products', content: 'products'});
const servicesSection = new content('section', {klass: 'demo-section', id: 'services', content: 'services'});
const contactSection = new content('section', {klass: 'demo-section', id: 'contact', content: 'contact'});

const demoSections = new content('div', {klass: 'demo-section-contatiner'});
demoSections.append([homeSection, aboutSection, productsSection, servicesSection, contactSection]);
const movingBackground = new content('div', {klass: 'bg'});
movingBackground.addClass('bg-cosmic-city');
movingBackground.addClass('bg-overlay-black');

const loadingAnimation = new content('div', {klass: 'loading-animation', content: 'loading...'});
loadingAnimation.addData('anim', 'loading');
loadingAnimation.addData('text', 'loading...');

const loadingContainer = new content('div', {klass: 'loading-container'});
loadingContainer.append(loadingAnimation);
const loadingWrapper = new content('div', {klass: 'loading-wrapper'});
loadingWrapper.append(loadingContainer);
const demo = new content('div', {klass: 'demo'});
const startDemo = document.createDocumentFragment();
startDemo.appendChild(demo.element);
startDemo.appendChild(loadingWrapper.element);

const demoNav = ["home", "about", "products", "services", "contact"];
const demoNavLinks = document.createDocumentFragment();
demoNav.forEach(navItem => {
    const newNavLink = new content('a', {klass:"nav-link", id:`nav-link-${navItem}`, content: navItem});
    newNavLink.addAttr('href', `#${navItem}`);
    demoNavLinks.appendChild(newNavLink.element);
});


const burgerBoxMenu = new content('div', {id:'burger-box', content: 'menu'});
const demoNavDiv = new content('div', {klass: 'demo-nav', content: demoNavLinks});
const demoSuperNavDiv = new content('div', {klass: 'demo-super-nav', content: demoNavDiv.element});
demoSuperNavDiv.addClass('white');
const demoMenuContainer = document.createDocumentFragment();
demoMenuContainer.appendChild(burgerBoxMenu.element);
demoMenuContainer.appendChild(demoSuperNavDiv.element);

const effectSelection = new content('div', {klass:'effect-selection'});
const effectNames = ['collapsing menu', 'sliding box menu', 'multi box menu'];
effectNames.forEach(effect => {
    const newEffect = new content('a', {klass:"effect-btn", content: effect});
    newEffect.addData('body-class', `${effect.replace(/ /g , '-')}-effect`);
    effectSelection.append(newEffect);
});


const startingContent = document.createDocumentFragment();
startingContent.append(effectSelection.element);
startingContent.append(demoSections.element);
startingContent.append(movingBackground.element);
startingContent.append(demoMenuContainer);




document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body').append(startDemo);
    // const loadingContainer = document.getElementsByClassName('loading-container')[0];
    // debugger
    let openMenu = false;
    let loading = false;

    const toggleLoading = () => {
        if (loading) {
            loadingContainer.element.style.transformOrigin = "bottom";
            loadingContainer.element.classList.remove('loading');
        } else {
            loadingContainer.element.style.transformOrigin = "top";
            loadingContainer.element.classList.add('loading');
        }
        loading = !loading;
    };

    toggleLoading();
    document.querySelector('body').appendChild(startingContent);
    MultiBoxMenu.render(demo.element);
    MultiBoxMenu.jsRecognize(toggleLoading);
    setTimeout(toggleLoading, 1000);

    

    const effectBtns = Array.from(document.getElementsByClassName('effect-btn'));
    // debugger
    const navLinks = Array.from(document.getElementsByClassName('nav-link'));
    const demoSuperNav = document.getElementsByClassName('demo-super-nav')[0];
    const burger =burgerBoxMenu.element;

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

    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
    const activeElem = document.getElementById('nav-link-' + startingSect);
    activeElem.classList.add('active');
    demoSuperNav.classList.add(['about', 'services'].includes(startingSect) ? 'lightblue' : 'white');

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
