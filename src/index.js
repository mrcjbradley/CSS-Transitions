import content from './HTMLComponent';
import MultiBoxMenu from './effects/MultiBoxMenu';
import BuildLoadingAnimation from './BuildLoadingAnimation';
import buildEffectSelection from './buildEffectSelection';
import buildDemoSections from './buildDemoSections';
import demoNav from './demoNav';
import './styles/app.scss';


/* ===  START: Generate BG  === */

class buildMovingBackground {
    constructor(klassList){
        this.movingBackground = new content('div', {klass: 'bg'});
        this.movingBackground.addClass(klassList);//('bg-cosmic-city', 'bg-overlay-black');
        // movingBackground.addClass('bg-overlay-black');
    }
    render(hook){
    hook.appendChild(this.movingBackground.element);
    }
}

/* ===  END: Generate BG  === */

/* ===  START: Generate Demo  === */

// const startDemo = document.createDocumentFragment();
// startDemo.appendChild(demo.element);

/* ===  END: Generate Demo === */


document.addEventListener("DOMContentLoaded", () => {

    const thatBod = document.querySelector('body');
    const startDemo = new content('div', {klass: 'demo'});
    
    const loader = new BuildLoadingAnimation();
    loader.render(thatBod);
    thatBod.append(startDemo.element);
    
    const effectMenu = new buildEffectSelection('collapsing menu', 'sliding box menu', 'multi box menu');
    const demoSections = new buildDemoSections();
    const movingBG = new buildMovingBackground('bg-cosmic-city', 'bg-overlay-black');
    const demoMenu = new demoNav();

    const buildEffect = (effectFunc) => {
        loader.toggleLoading();

        effectMenu.render(thatBod);
        demoSections.render(thatBod);
        demoMenu.render(thatBod);

        effectFunc.render(startDemo.element);
        effectFunc.activateListeners(loader.toggleLoading);
        
        movingBG.render(thatBod);
        
        const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
        demoMenu.toggleActive(startingSect); 
        demoMenu.activateListeners();
        effectMenu.activateListeners(loader.toggleLoading);
        
        
    };
    // MultiBoxMenu.render(demo.element);

    buildEffect(MultiBoxMenu);
    
    
    setTimeout(loader.toggleLoading, 1000);
        





});
