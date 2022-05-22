$(document).ready(function () {
var storyNavBar = new Swiper(".story-nav-bar", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var storyContentSwipwer = new Swiper(".story-content-swipwer", {
  slidesPerView: "auto",
  mousewheel: true,
  freeMode: true,
  direction: "vertical",
  thumbs: {
    swiper: storyNavBar,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      mousewheel: false,
      freeMode: false,
      direction: "horizontal",
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: storyNavBar,
      },
      on: {
        init: function () {
          console.log('swiper activeIndexChange');
        },
      },
    },
  },
});

storyContentSwipwer.on("slideChange", function () {
  // console.log("click");
  $(".story-video").trigger("pause");
  if (storyContentSwipwer.activeIndex === 0) {
    $(".story-img").attr("src", "assets/images/whoweare.jpg");
  } else if (storyContentSwipwer.activeIndex === 1) {
    $(".story-img").attr("src", "assets/images/story-2.jpg");
  } else if (storyContentSwipwer.activeIndex === 2) {
    $(".story-img").attr("src", "assets/images/story-3.jpg");
  } else {
    $(".story-img").attr("src", "assets/images/story-4.jpg");
  }
});

if ($( document ).width()<768) {
  storyContentSwipwer.destroy();
  // hideSection(); 
}
});
$(".story-video").click(function () {
  console.log(this);
  this.paused ? this.play() : this.pause();
});

$(document).ready(function () {
  // console.log($(".header-box").outerHeight());
  $(".storypage").css("top", $(".header-box").outerHeight());
  
  

});

function readmoreabt(){
  $('.abtcaptwo').toggle()
  $('.abtcapone').toggle()
  // $(window).scrollTop(0);
  // $('.abtcaptwo').scrollTop(0);
}
