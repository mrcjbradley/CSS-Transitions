import demoNav from '../demoNav';
import buildDemoSections from '../buildDemoSections';

const CollapsingMenu = () => {
    const collapsingDemoNav = new demoNav();
    const sections = new buildDemoSections();
    const hook = document.getElementById("effect-render-container");

    hook.innerHTML = '';
    collapsingDemoNav.render(hook);
    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
    collapsingDemoNav.toggleActive(startingSect);
    sections.render(hook);
    collapsingDemoNav.activateListeners();

};

export default CollapsingMenu;