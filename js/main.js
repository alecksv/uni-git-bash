let nextArr = document.querySelector(".slick-next");
let prevArr = document.querySelector(".slick-prev");

$(".wr-articles-item").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  nextArrow: nextArr,
  prevArrow: prevArr,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
