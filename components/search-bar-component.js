async function loadHTML(url) {
    const response = await fetch(url);
    return await response.text();
}

class SearchBarComponent extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const content = await loadHTML('components/search-bar-component.html');
        this.innerHTML = content;
        this.initializeComponent();
    }

    initializeComponent() {
        const searchInput = this.querySelector('#search-input');
        const searchButton = this.querySelector('#search-button');

        if (searchInput && searchButton) {
            searchButton.addEventListener('click', (e) => {
                e.preventDefault();
                // Prevent default action, keeping the search bar non-functional
                console.log('Search button clicked, but search is non-functional as per requirements.');
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    // Prevent default action, keeping the search bar non-functional
                    console.log('Enter pressed in search input, but search is non-functional as per requirements.');
                }
            });
        }
    }
}

customElements.define('search-bar-component', SearchBarComponent);