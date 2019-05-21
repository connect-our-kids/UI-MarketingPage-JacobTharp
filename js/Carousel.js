class Carousel {
    constructor(element) {
        this.carousel = element;
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.carouselItems = this.carousel.querySelectorAll('img');
   
        this.counter = 0;
        this.itemCount = Array.from(this.carouselItems).length;
   
        this.current = this.carouselItems[0];
        this.current.style.display = 'block';
   
        this.rightBtn.addEventListener('click', this.next.bind(this));
        this.leftBtn.addEventListener('click', this.prev.bind(this));
       }
        
       prev(){
           this.current.style.display = 'none';
           if (this.counter === 0) {
               this.counter = this.itemCount-1;
               this.current = this.carouselItems[this.counter];
               this.current.style.display = 'block';
           } else {
               this.counter -= 1;
               this.current = this.carouselItems[this.counter];
               this.current.style.display = 'block';
           }
       }
   
       next(){
           this.current.style.display = 'none';
           if (this.counter === this.itemCount-1) {
               this.counter = 0;
               this.current = this.carouselItems[this.counter];
               this.current.style.display = 'block';
           } else {
               this.counter += 1;
               this.current = this.carouselItems[this.counter];            this.current.style.display = 'block';
           }
       }
   }
   
   let carousel = new Carousel(document.querySelector('.dev1'));
   document.querySelector('.top-bar').style.zIndex = '1';