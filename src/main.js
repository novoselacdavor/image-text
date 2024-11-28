import './main.scss';

class ImageTextSection extends HTMLElement {
  constructor() {
    super();

    // Define the values
    this.mobileImage = "img/image-text-mobile.svg";
    this.desktopImage = "img/image-text-desktop.svg";
    this.heading = "Handcrafted and Responsibly Sourced";
    this.btnText = "Learn more";
    this.text = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.";

    // Set the HTML content of the elements
    this.section = document.createElement('section');
    this.section.classList.add('image-text', 'bg-color-pink');
    this.section.innerHTML = `
      <div class="image-text__image">
        <img src="${this.mobileImage}" alt="mobile-image" class="hide-on-desktop">
        <img src="${this.desktopImage}" alt="desktop-image" class="hide-on-mobile">
      </div>
      <div class="image-text__text px-1 py-1 px-md-1 py-md-1">
        <h1 class="mb-1">${this.heading}</h1>
        <p class="mb-2">${this.text}</p>
        <button>${this.btnText}</button>
        <p class="image-text__additional-text mt-2">${this.text}</p>
      </div>
    `;

    // Append the elements
    this.appendChild(this.section);

    // Get the elements
    this.button = this.section.querySelector('button');
    this.additionalText = this.section.querySelector('.image-text__additional-text');

    // Add event listeners
    this.button.addEventListener('click', this.toggleAdditionalText.bind(this));

    // Create an intersection observer
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.section.classList.add('visible');
        } else {
          this.section.classList.remove('visible');
        }
      });
    }, {
      // Set the options
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    // Start observing
    this.observer.observe(this.section);
  }

  // Toggle the additional text
  toggleAdditionalText() {
    this.additionalText.classList.toggle('active');
    this.button.textContent === 'Learn more' ? this.button.textContent = 'Hide info' : this.button.textContent = 'Learn more';
  }
}

// Register the custom element
customElements.define('image-text-section', ImageTextSection);
