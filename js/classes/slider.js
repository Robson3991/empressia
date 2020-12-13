import Swiper, { Pagination } from 'swiper';

export default class Slider {

  constructor(
    sliderData = '',
    slidesPerView = 1,
    spaceBetween = 0,
    pagination = false,
    sliderArgs
  ) {
      this.sliderData = sliderData,
      this.slidesPerView = slidesPerView,
      this.spaceBetween = spaceBetween,
      this.pagination = pagination,
      this.sliderArgs = sliderArgs
      
      if(!this.setVars()) return false;
      this.init();
  }

  setVars() {
    if(this.slider = document.querySelector(`[data-slider-${this.sliderData}]`)) return true;

    return false;
  }

  init() {
    const sliderArgs = {
      slidesPerView: this.slidesPerView,
      spaceBetween: this.spaceBetween,
      ...this.sliderArgs
    }

    if(this.pagination) {
      sliderArgs.pagination = {
        el: `.${this.sliderData}__pagination`,
        clickable: true,
      }
    }

    console.log(sliderArgs)

    Swiper.use([Pagination]);

    new Swiper(this.slider, {
      ...sliderArgs,
    });
  }

}