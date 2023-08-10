import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselData = [
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "First Card",
            description: "First card description.",
            alternativeText: "First card accessible description.",
            href: "https://www.example.com",
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "Second Card",
            description: "Second card description.",
            alternativeText: "Second card accessible description.",
            href: "https://www.example.com",
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header: "Thirds Card",
            description: "Thirds card description.",
            alternativeText: "Thirds card accessible description.",
            href: "https://www.example.com",
        },
    ]

    percentage = 10;

    handleChange(event) {
        this.percentage = event.target.value;
    }

    handleClick() {
        this.template.querySelector('c-p2c-slider-component').resetSlider();
    }
}
