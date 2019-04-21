import content from './HTMLComponent';

class demoNav {
    constructor(...navLinkNames){
        this.navLinkNames =/* navLinkNames ? navLinkNames : */["home", "html", "css", "javascript", "resources"];
        this.navLinkElements = {};
        this.navLinkNames.forEach(navItem => {
            const newNavLink = new content('a', {klass:"nav-link", id:`nav-link-${navItem}`, content: navItem === "home" ? "home" : `the ${navItem}`});
            newNavLink.addAttr('href', `#${navItem}`);
            this.navLinkElements[navItem] = newNavLink ;
        });
        this.demoNavDiv = new content('div', {klass: 'demo-nav'});
        this.demoNavDiv.append(Object.values(this.navLinkElements));

        this.demoSuperNavDiv = new content('div', {klass: 'demo-super-nav', content: this.demoNavDiv.element});
        this.demoSuperNavDiv.addClass('white');

        this.burgerBoxMenu = new content('div', {id:'burger-box', content: 'menu'});

        this.activeSection = "home";
        this.toggleActive = this.toggleActive.bind(this);
        this.openMenu = false;

        this.activateListeners = this.activateListeners.bind(this);
    }
    
    toggleActive(sectionGiven) {
        const section = sectionGiven.replace("the ", "");
        const lastActiveId = this.navLinkNames.indexOf(this.activeSection); 
        this.activeSection = section;
        const activeId = this.navLinkNames.indexOf(this.activeSection);
        if (lastActiveId % 2 !== activeId % 2) {
            this.demoSuperNavDiv.toggleClass('white', 'lightblue');
        }
        Object.values(this.navLinkElements).forEach(el => el.element.classList.remove('active'));
        this.navLinkElements[this.activeSection].element.classList.add('active');
    }

    activateListeners(){
        Object.values(this.navLinkElements).forEach(navLink => navLink.element.addEventListener("click", (e) => {
            this.toggleActive(e.target.innerText);
            this.demoSuperNavDiv.element.classList.remove('open');
            this.burgerBoxMenu.element.innerText = "menu";
            this.openMenu = !this.openMenu;
            // debugger
            if (document.querySelector('body').classList.contains("sliding-box-menu-effect")){
            setTimeout(() => {
                this.demoSuperNavDiv.element.style.zIndex = "-1";
            }, 1500);
        }
        }));

        this.burgerBoxMenu.element.addEventListener("click", (e) => {
            if (this.openMenu) {
                this.demoSuperNavDiv.element.classList.remove('open');
                this.burgerBoxMenu.element.innerText = "menu";
            if (document.querySelector('body').classList.contains("sliding-box-menu-effect")) {
                setTimeout(() => {this.demoSuperNavDiv.element.style.zIndex = "-1";}, 1500);
            }
            } else {
                this.demoSuperNavDiv.element.style.zIndex = '100';
                this.demoSuperNavDiv.element.classList.add('open');
                this.burgerBoxMenu.element.innerText = "X";
            }
            this.openMenu = !this.openMenu;
        });
    }

    render(hook){
        hook.append(this.demoSuperNavDiv.element);
        hook.append(this.burgerBoxMenu.element);
    }

}

export default demoNav;