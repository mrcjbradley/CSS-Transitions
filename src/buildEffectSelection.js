import content from './HTMLComponent';
import MultiBoxMenu from './effects/MultiBoxMenu';
import SlidingBoxMenu from './effects/SlidingBoxMenu';
import CollapsingMenu from './effects/CollapsingMenu';


function buildEffectSelection (toggleLoading) {

        const EFFECT_NAMES = [
            'collapsing menu', 
            'sliding box menu', 
            'multi box menu'
        ];

        const effectSelection = new content('div', {klass: 'effect-selection' });
        const effectLinks = {};
        EFFECT_NAMES.forEach(effect => {
            const newEffect = new content('a', {
                klass: "effect-btn",
                content: effect
            });
            newEffect.addData('body-class', `${effect.replace(/ /g , '-')}-effect`);
            effectSelection.append(newEffect);
            effectLinks[newEffect.content] = newEffect;
        });

        const handleEffectChange = (effectLink) => {
            window.location.hash = "";
            const menuType = effectLink.element.getAttribute("data-body-class");
            document.body.classList = menuType;
            if (menuType === "multi-box-menu-effect") {
                MultiBoxMenu.render(toggleLoading);
            } else if (menuType === "sliding-box-menu-effect") {
                SlidingBoxMenu();
            } else if (menuType === "collapsing-menu-effect") {
                CollapsingMenu();
            }
            document.querySelector('html').style.scrollBehavior = menuType === "collapsing-menu-effect" ? "smooth" : "auto";
        }

        Object.values(effectLinks).forEach(effectLink => effectLink.element.addEventListener("click", (e) => {
            e.preventDefault();
            toggleLoading();
            setTimeout(() => {
                handleEffectChange(effectLink);
            }, 500);
            setTimeout(() => {
                toggleLoading();
            }, 2000);
        }));

       document.body.append(effectSelection.element);
}

export default buildEffectSelection;