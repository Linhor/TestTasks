class Slider {
    constructor(images) {
        this.images = images;
        this.currentSlide = 0;
        this.init();
    }

    init() {
        this.createSlides();
        this.showSlide();
        setInterval(() => this.nextSlide(), 3000);
    }

    createSlides() {
        const slidesContainer = document.getElementById('img-content');
        this
            .images
            .forEach((image, index) => {
                const slide = document.createElement('div');
                slide.className = 'img';
                slide.style.backgroundImage = `url('./img/gallery/${image}')`;
                slide.style.backgroundColor = `${image}`;
                slidesContainer.appendChild(slide);
            });
    }

    showSlide() {
        const slidesContainer = document.getElementById('img-content');
        slidesContainer.style.transform = `translateX(${ - this.currentSlide * 100}%)`;
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
        this.showSlide();
    }
}

const imageUrls = ['image186.jpg', '123.jpg', '222.jpg', '111.jpg', '444.jpg'];

const slider = new Slider(imageUrls);