
// for side  navbar
function toggleNav() {
  if (!$(".maga-menu-full.menu-active").length) {
    $(".maga-menu-full").addClass("menu-active").removeClass("menu-inactive");;
    $('.toogle-icon').addClass('toogle-active')
    $(".text-menu").text("CLOSE");
    $('.header-box').addClass('position-fixed')
    // $(".social-icons").hide();
  } else {
    $(".maga-menu-full").addClass("menu-inactive").removeClass("menu-active");
    $('.toogle-icon').removeClass('toogle-active')
    $(".text-menu").text("MENU");
    $('.header-box').removeClass('position-fixed')

    // $(".social-icons").show();
  }
}

// FOR THE MOBILE MENU YOUTUBE VIDEO LINK
(function () { var t; (t = function (t) { var e = t.target.className; ~e.indexOf("htmlvid") ? BigPicture({ el: t.target, vidSrc: t.target.getAttribute("vidSrc") }) : ~e.indexOf("vimeo") ? BigPicture({ el: t.target, vimeoSrc: t.target.getAttribute("vimeoSrc"), }) : ~e.indexOf("twin-peaks") ? BigPicture({ el: t.target, ytSrc: t.target.getAttribute("ytSrc"), dimensions: [1226, 900], }) : ~e.indexOf("youtube") && BigPicture({ el: t.target, ytSrc: t.target.getAttribute("ytSrc") }); }), (document.getElementById("video-container").onclick = t); })();



if ($(".product-swiper .owl-carousel").length) {
  $(".product-swiper .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 8,
      },
    },
  });
}
// $(".product-fresh").click(function () {
//   $(".bg-fresh .content").css("height", "0");
//   $(".product-swiper").css("height", "100%");
//   $(".header-box").css("z-index", "0");
// });
// $(".closebtn").click(function () {
//   $(".bg-fresh .content").css("height", "70%");
//   $(".product-swiper").css("height", "30%");
//   $(".header-box").css("z-index", "3");
// });
// for page loader
// $(function(){
//   ​  $('a').click(function(){
//        $('<div class=loadingDiv>loading...</div>').prependTo(document.body);
//     });​
//   });
// $(".page-link-animate").click(function (e) {
//   $(".loader-img-container").addClass("menu-active");
//   $(".loader-img-container img").show();
//   // $(this).text('Loading...'); // do your UI thing here
//   e.preventDefault();
//   var destination = this.href;
//   setTimeout(function () {
//     window.location = destination;
//   }, 3000);
//   $("<iframe>")
//     .hide()
//     .appendTo("body")
//     .load(function () {
//       window.location = destination;
//     })
//     .attr("src", destination);
// });
function displaySection(){
  var divs = $("[class^=fade-effects]");
  
  var i = 0;
  var loop = window.setInterval(function () {
      $(divs[i]).fadeIn(1000);
      if (i == divs.length)
          clearInterval(loop);
      i++;

  }, 500);
}
// displaySection()

function hidePreloader(){
  $(".init-loader").addClass("opacity-zero-loader");
    setTimeout(function () {
    $('#preloader').remove();
    displaySection()
  }, 1000);
}
function defalutLoader(){
  $(".init-loader").css('display','flex');
  if ($("#preloader").length) {
    $(".init-loader img").css('visibility','visible')
    setTimeout(function () {
      // $('#div').fadeOut('fast');
      $(".init-loader").addClass("opacity-preloader");
      $('#loadingimg').fadeIn(1000);
    }, 500);
    setTimeout(function () {
      var i = 0;
      var txt = "Lorem ipsum dummy text blabla.";
      var speed = 50;
      // console.log("-----")
      function typeWriter() {
        if (i < txt.length) {
          document.getElementById("typewriter").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
        if(txt.length === i){
          hidePreloader()
        }
      }
      typeWriter();
      
    }, 500);
  }
}
// $(document).ready(function () {
//   console.log($("#preloader").length)

  // $(window).on('load',function () {
  //   // console.log($("#preloader").length)
    
    
  // });
// });

// togglebtn page
// function brandnavigation() {
//   $(".navigation-btn").removeClass("right-btn");
//   $(".navigation-btn").addClass("left-btn");
//   window.location.href = "index.html";
// }
// function bussnavigation() {
//   $(".navigation-btn").removeClass("left-btn");
//   $(".navigation-btn").addClass("right-btn").delay("slow");
//   window.location.href = "index.html";
// }
// $("#swiper-btn").on("swipeleft", function () {
//   bussnavigation();
// });
// $("#swiper-btn").on("swiperight", function () {
//   brandnavigation();
// });

// document.addEventListener("mousemove", parallax);

// function parallax(e) {
//   this.querySelectorAll(".bread-indiv").forEach((layer) => {
//     let speed = layer.getAttribute("data-speed");
//     let x = (window.innerWidth - e.pageX * speed) / 100;
//     let y = (window.innerWidth - e.pageY * speed) / 100;
//     layer.style.transform = `translate(${x}px, ${y}px)`;
//   });
// }



const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

// window.fadeIn = function (obj) {
//   $(obj).fadeIn(1000);
// };
function callHidePerloader(){
  setTimeout(function() {
    $('.loader-img-container').addClass('hide-loader-page-loaded ')
    displaySection()
  },900);
}


// LOADING PAGE LOADER
function hidePageLoader(){
  $('.loader-img-container').addClass('show-page-loader-fast')
  
  // 
  setTimeout(function() {
    $('.loader-img-container').addClass('hide-page-loader')
    callHidePerloader();
    // 
  },1000);
}
// $('a').click(function(e) {
//   let checkAsync = $(this).attr("data-async")
//   var url = this.href.trim();
//   if(checkAsync === undefined || window.location.href === url){
//     return 
//   }

//   e.preventDefault();
//   $('.loader-img-container').removeClass('hide-loader-page-loaded show-page-loader-fast hide-page-loader image_visible_animate').addClass('show-page-loader')
//   $('.image_visible').addClass('image_visible_animate');
//   setTimeout(function() {
//     $('.loader-img-container').addClass('hide-page-loader')
//     hidePageLoader();
//     window.location.href = url;
//   },3000);
// });


$(window).ready(function(){
  // $('.loader-img-container').removeClass('hide-loader-page-loaded hide-page-loader show-page-loader-fast show-page-loader')
  // var referrer = document.referrer.trim();
  // // console.log("referrer "+referrer)
  // if(referrer === ""){
  //   // Fresh User 
  //   // console.log("defalutLoader")
  //   $('.loader-img-container').addClass('hide-loader-page-loaded')
  //   defalutLoader()
  // }else{
    // console.log("referrer")
    $('.image_visible').addClass('image_visible_animate');
    $('#preloader').remove();
    hidePageLoader()

  // }
})