import content from './HTMLComponent';

class buildDemoSections {
    constructor() {
        this.demoSections = new content('div', {
            klass: 'demo-section-contatiner'
        });
        this.homeSection = new content('section', {
            klass: 'demo-section',
            id: 'home',
            content: 'home'
        });
        this.aboutSection = new content('section', {
            klass: 'demo-section',
            id: 'about',
            content: 'about'
        });
        this.productsSection = new content('section', {
            klass: 'demo-section',
            id: 'products',
            content: 'products'
        });
        this.servicesSection = new content('section', {
            klass: 'demo-section',
            id: 'services',
            content: 'services'
        });
        this.contactSection = new content('section', {
            klass: 'demo-section',
            id: 'contact',
            content: 'contact'
        });
    }
    render(hook) {
        this.demoSections.append([this.homeSection, this.aboutSection, this.productsSection, this.servicesSection, this.contactSection]);
        hook.appendChild(this.demoSections.element);
    }
}

export default buildDemoSections;