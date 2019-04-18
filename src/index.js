import MultiBoxMenu from './effects/MultiBoxMenu';
import BuildLoadingAnimation from './BuildLoadingAnimation';
import buildEffectSelection from './buildEffectSelection';
import './styles/app.scss';

document.addEventListener("DOMContentLoaded", () => {
    const loader = new BuildLoadingAnimation();
    const effectMenu = new buildEffectSelection('collapsing menu', 'sliding box menu', 'multi box menu');
        
    const thatBod = document.querySelector('body');
    loader.render(thatBod);
        effectMenu.render(thatBod);
        effectMenu.activateListeners(loader.toggleLoading);

    thatBod.insertAdjacentHTML("beforeend", `<div id="effect-render-container"></div>`);

    loader.toggleLoading();
    setTimeout(() => {
        MultiBoxMenu.render(loader.toggleLoading);
        setTimeout(loader.toggleLoading, 500);
    }, 500);
});
