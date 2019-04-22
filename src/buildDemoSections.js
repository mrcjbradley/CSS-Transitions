import content from './HTMLComponent';

class buildDemoSections {
    constructor(effectType) {
        this.demoSections = new content('div', {
            klass: 'demo-section-contatiner'
        });
        this.homeSection = new content('section', {
            klass: 'demo-section',
            id: 'home'
        });
        this.homeSection.element.innerHTML = `<div class="home-section-wrapper">
            <h1>${effectType}</h1>
        </div>`;
        this.htmlSection = new content('section', {
            klass: 'demo-section',
            id: 'html'
        });
        this.htmlSection.element.innerHTML = `<div class="html-section-wrapper">
            <h1>the html</h1>
        </div>`;
        this.cssSection = new content('section', {
            klass: 'demo-section',
            id: 'css',
           });
        this.cssSection.element.innerHTML = `<div class="css-section-wrapper">
            <h1>the css</h1>
        </div>`;
        this.javascriptSection = new content('section', {
            klass: 'demo-section',
            id: 'javascript',
            });
        this.javascriptSection.element.innerHTML = `<div class="javascript-section-wrapper">
            <h1>the javascript</h1>
        </div>`;
        this.resourcesSection = new content('section', {
            klass: 'demo-section',
            id: 'resources',
           });
        this.resourcesSection.element.innerHTML = `<div class="resources-section-wrapper">
            <h1>the resources</h1>
        </div>`;
    }
    render(hook) {
        this.demoSections.append([this.homeSection, this.htmlSection, this.cssSection, this.javascriptSection, this.resourcesSection]);
        hook.appendChild(this.demoSections.element);

        

    }
}

export default buildDemoSections;