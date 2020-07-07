import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import ReviewOnScroll from './modules/RevealOnScroll';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
new Modal();

if(module.hot) {
    module.hot.accept()
}
