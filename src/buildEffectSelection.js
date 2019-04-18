import content from './HTMLComponent';
import MultiBoxMenu from './effects/MultiBoxMenu';
import SlidingBoxMenu from './effects/SlidingBoxMenu';

class buildEffectSelection {
    constructor(...effectNames) {
        this.effectSelection = new content('div', {klass: 'effect-selection' });
        this.effectLinks = {};
        effectNames.forEach(effect => {
            const newEffect = new content('a', {
                klass: "effect-btn",
                content: effect
            });
            newEffect.addData('body-class', `${effect.replace(/ /g , '-')}-effect`);
            this.effectSelection.append(newEffect);
            this.effectLinks[newEffect.content] = newEffect;
        });

        this.activateListeners = this.activateListeners.bind(this);
    }

    activateListeners(toggleLoading) {
        Object.values(this.effectLinks).forEach(effectLink => effectLink.element.addEventListener("click", (e) => {
            e.preventDefault();
            toggleLoading();
            setTimeout(() => {
                const menuType = effectLink.element.getAttribute("data-body-class");
                const datBody = document.querySelector('body');
                datBody.classList = menuType;
                if (menuType === "multi-box-menu-effect") {
                    MultiBoxMenu.render(toggleLoading);
                } else if (menuType === "sliding-box-menu-effect"){
                    SlidingBoxMenu();
                } else if (menuType === "collapsing-menu-effect"){
                    SlidingBoxMenu();
                }
                document.querySelector('html').style.scrollBehavior = menuType === "collapsing-menu-effect" ? "smooth" : "auto";
            }, 500);
            setTimeout(() => {
                toggleLoading();
            }, 2000);
        }));

    }

    render(hook) {
        if (hook){
        hook.appendChild(this.effectSelection.element);
        } else {
            return this.effectSelection;
        }
    }
}

export default buildEffectSelection;