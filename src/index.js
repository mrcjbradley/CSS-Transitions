import content from './HTMLComponent';
import MultiBoxMenu from './effects/MultiBoxMenu';
import BuildLoadingAnimation from './BuildLoadingAnimation';
import buildEffectSelection from './buildEffectSelection';
import buildDemoSections from './buildDemoSections';
import demoNav from './demoNav';
import './styles/app.scss';


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

document.addEventListener("DOMContentLoaded", () => {
    const thatBod = document.querySelector('body');

    const loader = new BuildLoadingAnimation();
    loader.render(thatBod);
    thatBod.append(startDemo);
 
    loader.toggleLoading();
    
        const effectMenu = new buildEffectSelection();
        const demoSections = new buildDemoSections();
        const movingBG = buildMovingBackground();

        effectMenu.render(thatBod);
        demoSections.render(thatBod);
        thatBod.appendChild(movingBG);

        const demoMenu = new demoNav();
        demoMenu.render(thatBod);

        MultiBoxMenu.render(demo.element);
        MultiBoxMenu.jsRecognize(loader.toggleLoading);

        const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
        demoMenu.toggleActive(startingSect); 
        demoMenu.activateListeners();
        effectMenu.activateListeners(loader.toggleLoading);

    setTimeout(loader.toggleLoading, 1000);



});
