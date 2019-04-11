const HelloWorld = () => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'hello-world';
    const header = document.createElement('h1');
    header.innerHTML = `
        Title
    `;
    mainDiv.appendChild(header);
    
    return mainDiv;
};



export default HelloWorld;