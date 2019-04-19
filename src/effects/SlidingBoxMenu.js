
import demoNav from '../demoNav';
import buildDemoSections from '../buildDemoSections';

const SlidingBoxMenu = () => {
    const slidingDemoNav = new demoNav();
    const sections = new buildDemoSections("Sliding-Box Menu");
    const hook = document.getElementById("effect-render-container");
    
    hook.innerHTML = '';
    slidingDemoNav.render(hook);
    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
    slidingDemoNav.toggleActive(startingSect);
    sections.render(hook);
    slidingDemoNav.activateListeners();
        
};

export default SlidingBoxMenu;