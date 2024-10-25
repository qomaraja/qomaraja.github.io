/**
 * Template Name: Bootslander
 * Template URL: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  'use strict';

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach((navmenu) => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }
  window.addEventListener('load', aosInit);

  // Initiate GLightbox for each gallery group
  const glightboxSertif = GLightbox({
    selector: '.glightbox-sertif',
  });

  const glightboxPro1 = GLightbox({
    selector: '.glightbox-pro-1',
  });

  const glightboxPro2 = GLightbox({
    selector: '.glightbox-pro-2',
  });

  const glightboxPro3 = GLightbox({
    selector: '.glightbox-pro-3',
  });

  // /**
  //  * Initiate Pure Counter
  //  */
  // new PureCounter();

  // /**
  //  * Init swiper sliders
  //  */
  // function initSwiper() {
  //   document.querySelectorAll('.init-swiper').forEach(function (swiperElement) {
  //     let config = JSON.parse(swiperElement.querySelector('.swiper-config').innerHTML.trim());

  //     if (swiperElement.classList.contains('swiper-tab')) {
  //       initSwiperWithCustomPagination(swiperElement, config);
  //     } else {
  //       new Swiper(swiperElement, config);
  //     }
  //   });
  // }

  // window.addEventListener('load', initSwiper);

  // /**
  //  * Frequently Asked Questions Toggle
  //  */
  // document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
  //   faqItem.addEventListener('click', () => {
  //     faqItem.parentNode.classList.toggle('faq-active');
  //   });
  // });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        document.querySelectorAll('.navmenu a.active').forEach((link) => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  $(document).ready(function () {
    $('.details-carousel').owlCarousel({
      smartSpeed: 1000,
      margin: 20,
      loop: true,
      nav: true,
      navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
      autoplay: true,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1, // 1 item untuk layar kecil
        },
        600: {
          items: 2, // 2 item untuk layar sedang
        },
        1000: {
          items: 2, // 3 item untuk layar besar
        },
      },
    });
  });

  $(document).ready(function () {
    $('.gallery-carousel').owlCarousel({
      smartSpeed: 1000,
      margin: 20,
      loop: true,
      nav: true,
      navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
      autoplay: true,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1, // 1 item untuk layar kecil
        },
        600: {
          items: 2, // 2 item untuk layar sedang
        },
        1000: {
          items: 3, // 3 item untuk layar besar
        },
      },
    });
  });

  document.querySelector('.php-email-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for custom processing
    const loading = document.querySelector('.loading');
    const errorMessage = document.querySelector('.error-message');
    const sentMessage = document.querySelector('.sent-message');

    loading.style.display = 'block'; // Show loading message
    errorMessage.style.display = 'none'; // Hide previous error message
    sentMessage.style.display = 'none'; // Hide previous success message

    // Create a FormData object for AJAX submission
    const formData = new FormData(this);

    // Send the form data using Fetch API
    fetch('contact.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        loading.style.display = 'none'; // Hide loading
        if (data.status === 'success') {
          sentMessage.innerText = data.message; // Show success message
          sentMessage.style.display = 'block';
        } else {
          errorMessage.innerText = data.message; // Show error message
          errorMessage.style.display = 'block';
        }
      })
      .catch((error) => {
        loading.style.display = 'none'; // Hide loading
        errorMessage.innerText = 'Terjadi kesalahan saat mengirim pesan.'; // Show generic error message
        errorMessage.style.display = 'block';
      });
  });
})();
