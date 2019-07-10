import content from './HTMLComponent';

/* ===  START: Generate loading  === */
class BuildLoadingAnimation {
    constructor(){
        this.loadingAnimation = new content('div', { 
            klass: 'loading-animation', 
            content: 'loading...'
        })
        .addData('anim', 'loading')
        .addData('text', 'loading...');

        this.loadingContainer = new content('div', {
            klass: 'loading-container'
        })
        .append(this.loadingAnimation);
        
        this.loadingWrapper = new content('div', {
            klass: 'loading-wrapper'
        })
        .append(this.loadingContainer);

        this.toggleLoading = this.toggleLoading.bind(this);

        this.loading = false;
    }

    toggleLoading(){
        if (this.loading) {
            this.loadingContainer.element.style.transformOrigin = "bottom";
            this.loadingContainer.element.classList.remove('loading');
        } else {
            this.loadingContainer.element.style.transformOrigin = "top";
            this.loadingContainer.element.classList.add('loading');
        }
        this.loading = !this.loading;
    }

    render(){
        document.body.append(this.loadingContainer.element);
    }

}

export default BuildLoadingAnimation;