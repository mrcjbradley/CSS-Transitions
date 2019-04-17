import content from './HTMLComponent';
import MultiBoxMenu from './effects/MultiBoxMenu';
import BuildLoadingAnimation from './BuildLoadingAnimation';
import demoNav from './demoNav';
import './styles/app.scss';


/* ===  START: Generate Demo Sections  === */
const buildDemoSections = () => {
    const demoSections = new content('div', {klass: 'demo-section-contatiner'});
    
    const homeSection = new content('section', {klass: 'demo-section', id: 'home', content: 'home'});
    const aboutSection = new content('section', {klass: 'demo-section', id: 'about', content: 'about'});
    const productsSection = new content('section', {klass: 'demo-section', id: 'products', content: 'products'});
    const servicesSection = new content('section', {klass: 'demo-section', id: 'services', content: 'services'});
    const contactSection = new content('section', {klass: 'demo-section', id: 'contact', content: 'contact'});
    
    demoSections.append([homeSection, aboutSection, productsSection, servicesSection, contactSection]);
    return demoSections.element;
};

/* ===  END: Generate Demo Sections  === */

/* ===  START: Generate BG  === */
const buildMovingBackground = () => {
    const movingBackground = new content('div', {klass: 'bg'});
    movingBackground.addClass('bg-cosmic-city');
    movingBackground.addClass('bg-overlay-black');
    return movingBackground.element;
};

/* ===  END: Generate BG  === */

/* ===  START: Generate Demo  === */


const demo = new content('div', {klass: 'demo'});
const startDemo = document.createDocumentFragment();
startDemo.appendChild(demo.element);

/* ===  END: Generate Demo === */

/* ===  START: Generate Demo Menu Container === */

const effectSelection = new content('div', {klass:'effect-selection'});
const effectNames = ['collapsing menu', 'sliding box menu', 'multi box menu'];
effectNames.forEach(effect => {
    const newEffect = new content('a', {klass:"effect-btn", content: effect});
    newEffect.addData('body-class', `${effect.replace(/ /g , '-')}-effect`);
    effectSelection.append(newEffect);
});

/* ===  END: Generate Demo Menu Container === */

const startingContent = document.createDocumentFragment();
startingContent.append(effectSelection.element);
startingContent.append(buildDemoSections());
startingContent.append(buildMovingBackground());

document.addEventListener("DOMContentLoaded", () => {
    const loader = new BuildLoadingAnimation();
    const thatBod = document.querySelector('body');
    loader.render(thatBod);
    thatBod.append(startDemo);
 
    loader.toggleLoading();
    thatBod.appendChild(startingContent);
    const demoMenu = new demoNav();
    demoMenu.render(thatBod);
    MultiBoxMenu.render(demo.element);
    MultiBoxMenu.jsRecognize(loader.toggleLoading);
    setTimeout(loader.toggleLoading, 1000);

    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
    demoMenu.toggleActive(startingSect); 
    demoMenu.activateListeners();

    const effectBtns = Array.from(document.getElementsByClassName('effect-btn'));

    effectBtns.forEach(btn => btn.addEventListener("click", (e) => {
        e.preventDefault();
        loader.toggleLoading();
        setTimeout(() => {
            document.querySelector('body').classList = btn.getAttribute("data-body-class");
        }, 500);
        setTimeout(() => {
            loader.toggleLoading();
        }, 2000);
    }));

});
