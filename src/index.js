import MultiBoxMenu from './effects/MultiBoxMenu';
import BuildLoadingAnimation from './BuildLoadingAnimation';
import buildEffectSelection from './buildEffectSelection';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab); 

document.addEventListener("DOMContentLoaded", () => {
    const loader = new BuildLoadingAnimation();
    // const profileLinksDiv = document.createElement('div');
    // profileLinksDiv.className = "profile-links";
    // effectMenu.effectSelection.append(profileLinksDiv);
    // profileLinksDiv.innerHTML = `
    //     <a href="https://github.com/mrcjbradley/" target="_blank"><i class="fab fa-github"></i></a>
    //     <a href="https://www.linkedin.com/in/collin-james-bradley-a87763a0/" target="_blank"><i class="fab fa-linkedin"></i></a>
    //     <a href="https://angel.co/collin-james-bradley?public_profile=1" target="_blank"><i class="fab fa-angellist"></i></a>
    // `;
    // dom.i2svg();
    loader.render();
    
    document.body.insertAdjacentHTML("beforeend", `<div id="effect-render-container"></div>`);
    
    loader.toggleLoading();
    buildEffectSelection(loader.toggleLoading);
    setTimeout(() => {
        // const startDemo = new content('div', {klass: 'demo'});
        MultiBoxMenu.render(loader.toggleLoading);
        
        setTimeout(loader.toggleLoading, 500);
    }, 500);
});
