async function loadHTML(url) {
    const response = await fetch(url);
    return await response.text();
}

class LogoComponent extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const content = await loadHTML('components/logo-component.html');
        this.innerHTML = content;
    }
}

customElements.define('logo-component', LogoComponent);