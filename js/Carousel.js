class Carousel {
    constructor(element) {
        this.carousel = element;
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.carouselItems = this.carousel.querySelectorAll('.dev1');
        
        

        this.counter = 0;
        this.itemCount = Array.from(this.carouselItems).length;
        this.current = this.carouselItems[0];
        this.current.style.display = 'flex';
        

        this.rightBtn.addEventListener('click', this.next.bind(this));
        this.leftBtn.addEventListener('click', this.prev.bind(this));
        
    }

    prev() {
        console.log("buttonclick");
        this.current.style.display = 'none';
        if (this.counter === 0) {
            this.counter = this.itemCount - 1;
            this.current = this.carouselItems[this.counter];
            this.current.style.display = 'flex';
        } else {
            this.counter -= 1;
            this.current = this.carouselItems[this.counter];
            this.current.style.display = 'flex';
        }
        
    }

    next() {
        console.log("buttonclick");
        this.current.style.display = 'none';
        if (this.counter === this.itemCount - 1) {
            this.counter = 0;
            this.current = this.carouselItems[this.counter];
            this.current.style.display = 'flex';
        } else {
            this.counter += 1;
            this.current = this.carouselItems[this.counter];
            this.current.style.display = 'flex';
        }
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));