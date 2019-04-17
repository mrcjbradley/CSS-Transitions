import content from './HTMLComponent';

class buildEffectSelection {
    constructor(effectNames = ['collapsing menu', 'sliding box menu', 'multi box menu']) {
        this.effectSelection = new content('div', {
            klass: 'effect-selection'
        });
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
                document.querySelector('body').classList = menuType;
                document.querySelector('html').style.scrollBehavior = menuType === "collapsing-menu-effect" ? "smooth" : "auto";
            }, 500);
            setTimeout(() => {
                toggleLoading();
            }, 2000);
        }));

    }

    render(hook) {
        hook.appendChild(this.effectSelection.element);
    }
}

export default buildEffectSelection;