import Collapse from './js/classes/collapse';
import Slider from './js/classes/slider';

new Collapse('collapse');

const opinionsArgs = {
    centeredSlides: true,
    initialSlide: 3,
    // loop: true
}

new Slider('opinions', 5, 32, true, opinionsArgs);