class PageAnimator {
    constructor() {
        this.topBar = document.querySelector(".topBar");
        this.button = document.querySelector(".topBar .blackButton");
        this.letters = document.querySelectorAll('.animation svg g');
        this.initEvents();
    }

    initEvents() {
        window.addEventListener("scroll", () => this.handleScroll());
        setInterval(() => this.animateLetters(), 2);
    }

    handleScroll() {
        if (window.scrollY > 550) {
            this.topBar.classList.add("newTopBar");
            this.button.classList.add("newButton");
        } else {
            this.topBar.classList.remove("newTopBar");
            this.button.classList.remove("newButton");
        }
    }

    animateLetters() {
        let randomElement = this.letters[Math.floor(Math.random() * this.letters.length)];
        if (randomElement.classList.contains('letterM')) {
            randomElement.classList.remove('letterM');
        } else {
            randomElement.classList.add('letterM');
        }
    }
}

// Crea l'istanza della classe PageAnimator per avviare le animazioni e gli event listener
const pageAnimator = new PageAnimator();
