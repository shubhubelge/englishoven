// import { hello } from '../js/mousewhel.js';
var scrollOnVideoPlay= false;
var swiper = new Swiper(".home-scroll-swiper", {
  direction: "vertical",
  slidesPerView: 1,
  simulateTouch: false,
  edgeSwipeThreshold: 0,
  speed: 1500,
  spaceBetween: 0,
  mousewheel: true,
  enabled: false,
  // scrollbar:false
  breakpoints: {
    768: {
      enabled: true,
      scrollbar: {
        el: '.recipies-sroll',
        draggable: true,
      }
    },
  },
});

var mySwiperInner = new Swiper(".mySwiperInner", {
  direction: "vertical",
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  mousewheel: true,
  speed: 500,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 3,
      spaceBetween: 0,
      direction: "horizontal",
      // cssMode: true,
      mousewheel: false,
      // touchMoveStopPropagation: true,
      // allowTouchMove: true,
      // preloadImages: true,
      autoHeight: false,
      // autoplayDisableOnInteraction: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});


mySwiperInner.on("slideChange", function () {
  window.scrollTo(0, 1);
  $(window).scroll(0);
  // window.open('http://127.0.0.1:5501/index.html','','toolbar=no');
  // console.log("cc")
})

// FOR YOUTUBE VIDEO PLAY
var player,
  playing = false;
console.log(window.location.origin);
function onYouTubeIframeAPIReady() {
  player = new YT.Player("videoCorporate", {
    height: "100%",
    width: "100%",
    videoId: "2giJeVLouOM",
    loopPlaylists: false,
    // playerVars: {
    //   'playsinline': 1
    // },
    playerVars: { rel: 0, playsinline: 1 },
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
  let src = player.getIframe().getAttribute("src");
  player
    .getIframe()
    .setAttribute(
      "src",
      src +
        "?showinfo=1&enablejsapi=1&playlist=2giJeVLouOM&loop=1&origin=" +
        window.location.origin
    );
}
function displayHeaderFooter(status){
  // console.log("status")
  // console.log(status)
  // $('#brandstrip').addClass('d-none')
  // $('.scrollDownBtn').hide()
  if(!status){
    $('#brandstrip').addClass('d-none')
    $('.scrollDownBtn').hide()
  }
  // else{
    // $('#brandstrip').removeClass('d-none')
    // $('.scrollDownBtn').show()

  // }
}
let fisrttimeplay = true;
function onPlayerStateChange(event) {
  console.log("play");
  if (event.data == YT.PlayerState.PLAYING) {
    playing = true;
    console.log("playing");
    fisrttimeplay = true;
    $('.playButtonContainer').hide()
    let ele = $(".youtube-scroll-container")
    ele.scrollTop( ele.scrollTop() + 3 );

    $(".restBox").removeClass("remove-height");
    $(".restBox").addClass("set-height");
    $(".standardSize").removeClass("rotate-x");
    hideFooter();

    displayHeaderFooter(false)
  } else if (event.data == YT.PlayerState.PAUSED) {
    playing = false;
    fisrttimeplay = false;
    console.log("PAUSED");
    // $('.standardSize').show()
    // $(".video-bg").show(10);
    $(".controls-vid").hide();

    $(".standardSize").css("visibility", "visible");
    displayHeaderFooter(true)

  }
}


$("#goto-second").click(function () {
  swiper.slideNext();
});

// new code for footer
function displayFooter() {
  // $('.newsListWrapper').removeClass('footerSlideDown')
  $(".newsListWrapper").addClass("footerSlideUp");
}

function hideFooter() {
  $(".newsListWrapper").addClass("footerSlideDown");
  // $('.newsListWrapper').removeClass('footerSlideDown')
  setTimeout(() => {
    $(".newsListWrapper").removeClass("footerSlideUp footerSlideDown");
  }, 1000);
}
$(".newsButton").click(function (e) {
  if ($(".restBox.set-height").length == 1) {
    $(".restBox").removeClass("set-height");
    $(".restBox").addClass("remove-height");
    // new code for the footer
    displayFooter();
    $(".standardSize").addClass("rotate-x");
  } else {
    $(".restBox").removeClass("remove-height");
    $(".restBox").addClass("set-height");
    // new code for the footer
    hideFooter();
    // $(".standardSize").fadeIn(3000);
    $(".standardSize").removeClass("rotate-x");
  }
});

// $(".main-video").click(function () {
//   let video = document.getElementById("video-eo");
//   if (video.paused) {
//   } else {
//     video.pause();
//     // $(".playButtonContainer").show("slow");
//     $(".standardSize").css("visibility", "visible");
//   }
// });
var mySwiperScroll = new Swiper(".mySwiperScroll", {
  cssMode: true,
});

var lastScrollTop = 0,
  count = 0;
$(".youtube-scroll-container").scroll(function (event) {
  
  var st = $(this).scrollTop();
  //  let count = 0;
  console.log("st--------");
  console.log(st);
  console.log(lastScrollTop);
  console.log("st--------");

  if (st < lastScrollTop) {
    // downscroll code
    //  console.log("scroll down")
    if ($(".restBox.remove-height").length === 1) {
      setTimeout(function () {
        $(".restBox").removeClass("remove-height");
        $(".restBox").addClass("set-height");
        $(".standardSize").removeClass("rotate-x");
        hideFooter();
      }, 0);
      swiper.enabled = false;
    } else {
      swiper.enabled = true;
    }
    console.log(lastScrollTop);
    if (lastScrollTop === 1 && st === 0) {
      swiper.slidePrev();
    }
    // if(lastScrollTop<=1){
    //   count++

    //   console.log("*****************" +count)
    //   // if(count === 2){
    //     // count = 2;
    //     // setTimeout(function(){
    //     //   swiper.slidePrev();
    //     // },2000)
    //   // swiper.slidePrev();
    // // }

    // }
  } else {
    // upscroll code
    // console.log("scroll up")
    setTimeout(function () {
      $(".restBox").removeClass("set-height");
      $(".restBox").addClass("remove-height");
      $(".standardSize").addClass("rotate-x");
      displayFooter();
    }, 500);
    // console.log(lastScrollTop)
  }
  lastScrollTop = st;
});
$(".mySwiperScroll").bind("mousewheel", function (e, delta) {
  console.log("delta");
  console.log(e.originalEvent.wheelDelta);
  if(scrollOnVideoPlay){
    return
  }
  // console.log(e.originalEvent.wheelDelta)
  // console.log("e.originalEvent.wheelDelta")
  // console.log(e.originalEvent.wheelDelta)
  if (e.originalEvent.wheelDelta / 120 > 0) {
    // console.log('scrolling up !');
    // console.log($('.restBox.remove-height').length )
    if ($(".restBox.remove-height").length === 1) {
      setTimeout(function () {
        $(".restBox").removeClass("remove-height");
        $(".restBox").addClass("set-height");
        $(".standardSize").removeClass("rotate-x");
        hideFooter();
      }, 2000);
      swiper.enabled = false;
    } else {
      swiper.enabled = true;
    }
  } else {
    // console.log('scrolling down !');
    setTimeout(function () {
      $(".restBox").removeClass("set-height");
      $(".restBox").addClass("remove-height");
      $(".standardSize").addClass("rotate-x");
      displayFooter();
    }, 500);
  }

});
$("#gotofirst").click(function () {
  swiper.slidePrev();
});
$("#closeBtnVideo").click(function () {
  swiper.slidePrev();
});
// function mousewheel(turn, delta) {
//   console.log("============")
//   // this.mousewheel.bind(this), { passive: false }
//   turn.preventDefault();
//   if (delta == 1) {
//     console.log("mouse up")
//   }
//   else {
//     console.log("going down")
//   }

//   // all kinds of code

//   return false;
// }
// window.addEventListener('wheel', mousewheel, {passive:false})
// myID = document.getElementById("myID");

// var myScrollFunc = function () {
//   // console.log("shubhnam");

//   var y = window.scrollY;
//   if (y >= 100) {
//     console.log("shubhnam");
//   } else {
//     console.log("shubhnam");
//   }
// };

// window.addEventListener("scroll", myScrollFunc);

// $(document).ready(function () {
$("#playButton").hover(
  function () {
    $(this).addClass("animated pulse");
    $("#playCircle").addClass("hover-play-btn");
  },
  function () {
    $(this).removeClass("animated pulse");
    $("#playCircle").removeClass("hover-play-btn");
  }
);
//  });
// $(document).ready(function () {
//   var divs = $("[class^=fade-effects]");

//   console.log(divs)
//   var i = 0;
//   var loop = window.setInterval(function () {
//       $(divs[i]).fadeIn(1000);
//       if (i == divs.length)
//           clearInterval(loop);
//       i++;

//   }, 10000);
// });

$(".img-container-first")
  .mouseenter(function () {
    $(".story-back-img").addClass("postion-relative");
    $(".img-container-first").addClass("zoom-reduce");
    $(".overlay-img").addClass("rotet-img-right");
  })
  .mouseleave(function () {
    $(".story-back-img").removeClass("postion-relative");
    $(".img-container-first").removeClass("zoom-reduce");
    $(".overlay-img").removeClass("rotet-img-right");
  });
$(".story-back-img").hover(function (el) {
  $(".story-back-img.postion-relative")
    .mouseenter(function (el) {
      $(this).addClass("zoom-inhance");
    })
    .mouseleave(function () {
      $(this).removeClass("zoom-inhance");
    });
});

$(document).ready(function () {
  var today = new Date();
  var curHr = today.getHours();
  if (curHr < 12) {
    console.log("good morning");
  } else if (curHr < 18) {
    console.log("good afternoon");
  } else {
    console.log("good evening");
  }
});




// function onPlayerStateChange(event) {
//   console.log("play")
//   console.log(playing)
//   // if (event.data == YT.PlayerState.PLAYING && !done) {
//   //   setTimeout(stopVideo, 6000);
//   //   done = true;
//   // }
// // }
// $(".playButtonContainer").click(function(){
//   if(fisrttimeplay){
//     $(".video-bg").show(10);
//     player.stopVideo();
//       $(".standardSize").css("visibility", "visible");
//   // }
// })
swiper.on("slideChange", function () {
  // $(".main-video")[0].pause();
  $(".standardSize").removeClass("rotate-x");
  $("#playButton").hover(
    function () {
      $(this).addClass("animated pulse");
    },
    function () {
      $(this).removeClass("animated pulse");
    }
  );
  // .{
  fisrttimeplay = true;
  // $(".video-bg").show(10);
  $(".controls-vid").hide();

  player.pauseVideo();
  $(".standardSize").css("visibility", "visible");
  $("#playCircle").addClass("hover-play-btn");
  $("#playButton").addClass("animated pulse");
  setTimeout(function () {
    $("#playCircle").removeClass("hover-play-btn");
    $("#playButton").removeClass("animated pulse");
  }, 5000);
  // $('.play-btn-postion').hover()
  // console.log('slide changed');
  // console.log(swiper);
  console.log("swiper.activeIndex");
  console.log(swiper.activeIndex);
  //   console.log($('.main-video'))
  // console.log()
  // console.log(swiper.activeIndex);
  // swiper.slideNext();
  // console.log($('.social-icons'))
  // if (swiper.activeIndex) {
  //   $(".social-icons").hide("slow");
  // } else {
  //   $(".social-icons").show("slow");
  // }
  $(".restBox").removeClass("remove-height");
  $(".restBox").addClass("set-height");
  $(".standardSize").fadeIn(1000);

  // 
  if(swiper.activeIndex===0){
    // console.log("")
    $('#brandstrip').removeClass('d-none')
  }
  if(swiper.activeIndex===1){
    console.log(swiper.activeIndex)
   let ele = $(".youtube-scroll-container")
    ele.scrollTop( ele.scrollTop() + 3 );
  }
  // $('.scrollDownBtn').show()
  hideFooter();
  //   console.log("$('.restBox.remove-height').length")
  return false;
  // if(swiper.activeIndex){
  //  console.log($('.restBox'))
  //   if($('.restBox .remove-height').length){
  //   console.log("active")
  //     swiper.lockSwipes();
  //     // $(".newsButton").click();
  //     return false
  //     // swiper.activeIndex=1
  //   // }
  // }
  // });
  // $('.main-video').click()
  // $('.main-video').pause()
  // if(swiper.activeIndex==1){
  //   $('.restBox').css("display","block")
  // }else{
  //   $('.restBox').css("display","none")

  // }
});
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener("load",function() {
//   setTimeout(function(){
//       // This hides the address bar:
//       window.scrollTo(0, 1);
//   }, 0);
// });
$(".playButtonContainer").click(function () {
  if (fisrttimeplay) {
    scrollOnVideoPlay = true;
    player.playVideo();
    $(".video-bg").hide("slow");
    $(".controls-vid").show();
    $(".standardSize").css("visibility", "hidden");
    $('.playButtonContainer').hide();
    $('#closeBtnVideo').addClass('d-block')
    hideFooter();
    fisrttimeplay = false;
  } else {
    fisrttimeplay = true;
    // $(".video-bg").show("slow");
    $(".controls-vid").hide();

    player.pauseVideo();
    $(".standardSize").css("visibility", "visible");
  }

  // let video = document.getElementById("video-eo");
  //  console.log(video)
  //  console.log(this)
  // if (video.paused) {
  //   video.play();
  //   $(".playButtonContainer").hide("slow");
  //   $(".standardSize").css("visibility", "hidden");
  //   hideFooter()
  // } else {
  //   video.pause();
  //   // $('.standardSize').show()
  //   $(".playButtonContainer").show("slow");

  //   $(".standardSize").css("visibility", "visible");
  // }
});