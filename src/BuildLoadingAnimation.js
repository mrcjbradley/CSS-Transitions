import content from './HTMLComponent';

/* ===  START: Generate loading  === */
class BuildLoadingAnimation {
    constructor(){
        this.loadingAnimation = new content('div', {klass: 'loading-animation', content: 'loading...'});
        this.loadingAnimation.addData('anim', 'loading');
        this.loadingAnimation.addData('text', 'loading...');

        this.loadingContainer = new content('div', {klass: 'loading-container'});
        this.loadingContainer.append(this.loadingAnimation);
        
        this.loadingWrapper = new content('div', {klass: 'loading-wrapper'});
        this.loadingWrapper.append(this.loadingContainer);

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

    render(hook){
        hook.append(this.loadingWrapper.element);
    }

}

export default BuildLoadingAnimation;