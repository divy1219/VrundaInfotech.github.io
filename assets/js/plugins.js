const shouldUseLoop = (selector, minSlides) => {
  const slider = document.querySelector(selector);
  if (!slider) return false;
  return slider.querySelectorAll(".swiper-slide").length >= minSlides;
};

// Digital Marketing partner slider setup

if (document.querySelector(".partnerSlider")) {
  new Swiper(".partnerSlider", {
    spaceBetween: 30,
    slidesPerView: 3,
    // centeredSlides: "auto",
    loop: shouldUseLoop(".partnerSlider", 5),
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });
}

// Digital Marketing project Slider

if (document.querySelector(".projectSlider")) {
  new Swiper(".projectSlider", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: shouldUseLoop(".projectSlider", 3),
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".project-slider-next",
      prevEl: ".project-slider-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

// Digital Marketing testimonials slider
if (document.querySelector(".testimonialsSlider")) {
  new Swiper(".testimonialsSlider", {
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: shouldUseLoop(".testimonialsSlider", 3),
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
  });
}

// Mobile App testimonials slider
if (document.querySelector(".h2-testimonialsSlider")) {
  new Swiper(".h2-testimonialsSlider", {
    direction: "vertical",
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: shouldUseLoop(".h2-testimonialsSlider", 3),
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
  });
}

// faq

const faqsWrapper = document.querySelectorAll(".faq-wrapper");

faqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  window.addEventListener("load", (event) => {
    faqs.forEach((item, index) => {
      if (index !== 0) {
        item.classList.remove("active-faq");
        item.style.height = item.children[0].clientHeight + 10 + "px";
      } else {
        item.classList.add("active-faq");
      }
    });
  });
});

faqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  faqs.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < e.target.parentElement.children.length; i++) {
        if (e.target.parentElement.children[i] === e.target) {
          e.target.parentElement.children[i].classList.add("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight +
            e.target.parentElement.children[i].children[1].clientHeight +
            10 +
            "px";
        } else {
          e.target.parentElement.children[i].classList.remove("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight +
            10 +
            "px";
        }
      }
    });
  });
});

// faq home 2
const h2FaqsWrapper = document.querySelectorAll(".h2-faq-wrapper");

h2FaqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  window.addEventListener("load", (event) => {
    faqs.forEach((item, index) => {
      if (index !== 0) {
        item.classList.remove("active-faq");
        item.style.height = item.children[0].clientHeight + "px";
      } else {
        item.classList.add("active-faq");
      }
    });
  });
});

h2FaqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  faqs.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < e.target.parentElement.children.length; i++) {
        if (e.target.parentElement.children[i] === e.target) {
          e.target.parentElement.children[i].classList.add("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight +
            e.target.parentElement.children[i].children[1].clientHeight +
            "px";
        } else {
          e.target.parentElement.children[i].classList.remove("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight + "px";
        }
      }
    });
  });
});

// counter

const counter = (item) => {
  let countdown = null;
  const count = Number(item.getAttribute("data-count-fm"));
  const valueType = item.getAttribute("data-type-fm");
  const speed = Number(item.getAttribute("data-speed-fm"));
  let startNumber = 0;
  clearInterval(countdown);
  countdown = setInterval(function () {
    item.innerText = startNumber + valueType;
    if (count > 10000 && startNumber < count - 10000) {
      startNumber += 1000;
    } else if (count > 1000 && startNumber < count - 1000) {
      startNumber += 100;
    } else if (count > 100 && startNumber < count - 100) {
      startNumber += 10;
    } else {
      startNumber++;
    }
    if (startNumber > count) {
      clearInterval(countdown);
    }
  }, speed / count);
};

// scroll control

let running = [];

const scrollAnimate = (event) => {
  const allData = document.querySelectorAll("[data-scroll-fm='scroll']");
  if (allData) {
    allData.forEach((item) => {
      const rect = item.getBoundingClientRect()?.y;
      if (rect - window.innerHeight <= 0 && rect >= 0) {
        if (running.indexOf(item) < 0) {
          const animType = item.getAttribute("data-anim-type");
          switch (animType) {
            case "count-width":
              if (item.classList.value.includes("width-increase")) {
                item.classList.remove("width-increase");
                setTimeout(() => {
                  item.classList.add("width-increase");
                }, 10);
              } else {
                item.classList.add("width-increase");
              }

              break;

            default:
              break;
          }
          if (item.getAttribute("data-count-fm")) {
            counter(item);
          }
          running.push(item);
        }
      } else {
        running = running.filter((value) => value != item);
      }
    });
  }
};

window.addEventListener("load", (event) => {
  scrollAnimate(event);
});

window.addEventListener("scroll", (event) => {
  scrollAnimate(event);
  // sticky header
  const header = document.getElementById("stickyHeader");
  if (!header.classList.value.includes("bg-white") && window.scrollY > 0) {
    header.classList.add("bg-white");
  } else if (
    header.classList.value.includes("bg-white") &&
    window.scrollY === 0
  ) {
    header.classList.remove("bg-white");
  }
});

// IT Solutions project Slider

if (document.querySelector(".projectSlider-h3")) {
  new Swiper(".projectSlider-h3", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: shouldUseLoop(".projectSlider-h3", 3),
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".project-slider-next",
      prevEl: ".project-slider-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

if (document.querySelector(".testimonials-h3")) {
  new Swiper(".testimonials-h3", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: shouldUseLoop(".testimonials-h3", 3),
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

// Thumbslider
if (document.querySelector(".project-detail-slider-thumb")) {
  const swiperThumb = new Swiper(".project-detail-slider-thumb", {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".project-detail-slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperThumb,
    },
  });
}

// modal slider
// image slider zoom
let sliderActive = 0;
const swiper3 = new Swiper(".modal-slider", {
  initialSlide: sliderActive,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const zoomBtns = document.querySelectorAll(".zoom-slider");

if (zoomBtns) {
  zoomBtns.forEach((btn, index) => {
    btn.addEventListener("click", (index) => {
      document.getElementById("slider-modal").classList.remove("hidden");
      sliderActive = index;
    });
  });
}

if (document.getElementById("modal-close")) {
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("slider-modal").classList.add("hidden");
  });
}

if (document.querySelector(".ms-swiper")) {
  new Swiper(".ms-swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: shouldUseLoop(".ms-swiper", 3),
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
}
