$(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: '80px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '60px'
        }
      }]
  });
