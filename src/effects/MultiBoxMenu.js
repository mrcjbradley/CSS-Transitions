class MultiBoxMenu {
    constructor(content){
        this.content = content;
    }

    jsRecognize(){
        const menuLis = Array.from(document.getElementsByClassName('js-menu-li'));
        const menuUl = menuLis[0].parentElement;
        const toggleButton = document.getElementsByClassName('js-menu-toggle')[0];
        let openMenu = false;
        toggleButton.addEventListener("click", () => {
            for (let idx = 0; idx < menuLis.length; idx++) {
                const element = menuLis[idx];
                if (openMenu){
                    switch(idx){
                    case 0: element.style.width = '0%'; break;
                    case 1: element.style.height = '0%';  break;
                    case 2: element.style.width = '0%'; break;
                    case 3:  element.style.height = '0%'; break;
                    case 4: element.style.width = '0%';  break;
                    }
                } else {
                switch(idx){
                    case 0: element.style.width = '25%'; break;
                    case 1: element.style.height = '60%'; break;
                    case 2: element.style.width = '25%';  break;
                    case 3: element.style.height = '40%'; break;
                    case 4: element.style.width = '50%'; break;
                }}

        }
        openMenu = !openMenu;
    });
       
    }

    render(hook){
        hook.innerHTML = this.content;

    }
}

const multiBoxContent = `
 <header class="Demo_Header">
    <nav class="Demo_MainNav">
        <span class="DemoMenuToggle js-menu-toggle"> x </span>
        <ul class="MainNav_MenuList">
            <li class="MainNav_MenuListItem js-menu-li">Menu Item 1</li>
            <li class="MainNav_MenuListItem js-menu-li">Menu Item 2</li>
            <li class="MainNav_MenuListItem js-menu-li">Menu Item 3</li>
            <li class="MainNav_MenuListItem js-menu-li">Menu Item 4</li>
            <li class="MainNav_MenuListItem js-menu-li">Menu Item 5</li>
        </ul>
    </nav>
    <article class="DemoMain">
            <h1 class="DemoMain_Title">Demo Title</h1>
            <h2 class="DemoMain_Subtitle">Demo Subtitle</h1>
    </article>   
</header>
`;

export default new MultiBoxMenu(multiBoxContent);