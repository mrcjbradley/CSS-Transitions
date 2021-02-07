import content from './HTMLComponent';

class demoNav {
    constructor(){
        this.navLinkNames = [
            "home", 
            "html", 
            "css", 
            "javascript", 
            "resources"
        ];
        this.navLinkElements = this.navLinkNames.map( navItem => (
            new content( 'a', {
                klass:"nav-link", 
                id:`nav-link-${navItem}`, 
                content: navItem === "home" ? "home" : `the ${navItem}`
            })
            .addAttr('href', `#${navItem}`)));

        this.demoNavDiv = new content('div', {
            klass: 'demo-nav'
        })
        .append(this.navLinkElements);

        this.demoSuperNavDiv = new content('div', {
            klass: 'demo-super-nav', 
            content: this.demoNavDiv.element
        })
        .addClass('white');

        this.burgerBoxMenu = new content('div', {
            id:'burger-box', 
            content: 'menu'
        });

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
        this.navLinkElements.forEach( el => {
            el.element.classList.remove('active');
            if (el.id === `nav-links-${section}`) {
                this.navLinkElements[this.activeSection].element.classList.add('active');
        }});
    }

    activateListeners(){
        let demoNavLinks = document.querySelectorAll(".nav-link");
        
        const handleScroll = (event) => {
            if (document.querySelectorAll('.demo-section').length < 5) return event;
            let fromTop = window.scrollY;

            demoNavLinks.forEach(link => {
                let section = document.querySelector(link.hash);

                if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                    link.classList.add("active");
                    const lastActiveId = this.navLinkNames.indexOf(this.activeSection);
                    this.activeSection = link.hash.slice(1);
                    const activeId = this.navLinkNames.indexOf(this.activeSection);
                    if (lastActiveId % 2 !== activeId % 2) {
                        this.demoSuperNavDiv.toggleClass('white', 'lightblue');
                    }
                } else {
                    link.classList.remove("active");
                }
            });
        }

        window.addEventListener("scroll", handleScroll);

        this.navLinkElements.forEach(navLink => navLink.element.addEventListener("click", (e) => {
            window.removeEventListener('scroll', handleScroll);
            this.toggleActive(e.target.innerText);
            this.demoSuperNavDiv.element.classList.remove('open');
            this.burgerBoxMenu.element.innerText = "menu";
            this.openMenu = !this.openMenu;
           setTimeout(() => {
               window.addEventListener('scroll', handleScroll);
           }, 1500);
            if (document.querySelector('body').classList.contains("sliding-box-menu-effect")){
            setTimeout(() => {
                this.demoSuperNavDiv.element.style.zIndex = "-1";
            }, 1500);
        }
        }));

        this.burgerBoxMenu.element.addEventListener("click", (e) => {
            document.querySelector('#burger-box').classList.remove('bouncer');
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
        document.querySelector('#burger-box').classList.add('bouncer');
    }

}

export default demoNav;