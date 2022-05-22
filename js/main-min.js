function toggleNav() {
  $(".maga-menu-full.menu-active").length
    ? ($(".maga-menu-full")
        .addClass("menu-inactive")
        .removeClass("menu-active"),
      $(".toogle-icon").removeClass("toogle-active"),
      $(".text-menu").text("MENU"),
      $(".header-box").removeClass("position-fixed"))
    : ($(".maga-menu-full")
        .addClass("menu-active")
        .removeClass("menu-inactive"),
      $(".toogle-icon").addClass("toogle-active"),
      $(".text-menu").text("CLOSE"),
      $(".header-box").addClass("position-fixed"));
}
function displaySection() {
  var e = $("[class^=fade-effects]"),
    t = 0,
    i = window.setInterval(function () {
      $(e[t]).fadeIn(1e3), t == e.length && clearInterval(i), t++;
    }, 500);
}
function hidePreloader() {
  $(".init-loader").addClass("opacity-zero-loader"),
    setTimeout(function () {
      $("#preloader").remove(), displaySection();
    }, 1e3);
}
function defalutLoader() {
  $(".init-loader").css("display", "flex"),
    $("#preloader").length &&
      ($(".init-loader img").css("visibility", "visible"),
      setTimeout(function () {
        $(".init-loader").addClass("opacity-preloader"),
          $("#loadingimg").fadeIn(1e3);
      }, 500),
      setTimeout(function () {
        var e = 0,
          t = "Lorem ipsum dummy text blabla.";
        !(function i() {
          e < t.length &&
            ((document.getElementById("typewriter").innerHTML += t.charAt(e)),
            e++,
            setTimeout(i, 50)),
            t.length === e && hidePreloader();
        })();
      }, 500));
}
!(function () {
  var e;
  (e = function (e) {
    var t = e.target.className;
    ~t.indexOf("htmlvid")
      ? BigPicture({ el: e.target, vidSrc: e.target.getAttribute("vidSrc") })
      : ~t.indexOf("vimeo")
      ? BigPicture({
          el: e.target,
          vimeoSrc: e.target.getAttribute("vimeoSrc"),
        })
      : ~t.indexOf("twin-peaks")
      ? BigPicture({
          el: e.target,
          ytSrc: e.target.getAttribute("ytSrc"),
          dimensions: [1226, 900],
        })
      : ~t.indexOf("youtube") &&
        BigPicture({ el: e.target, ytSrc: e.target.getAttribute("ytSrc") });
  }),
    (document.getElementById("video-container").onclick = e);
})(),
  $(".product-swiper .owl-carousel").length &&
    $(".product-swiper .owl-carousel").owlCarousel({
      loop: !0,
      margin: 0,
      nav: !1,
      dots: !1,
      center: !0,
      responsive: { 0: { items: 2 }, 600: { items: 3 }, 1e3: { items: 8 } },
    });
const observer = lozad();
function callHidePerloader() {
  setTimeout(function () {
    $(".loader-img-container").addClass("hide-loader-page-loaded "),
      displaySection();
  }, 900);
}
function hidePageLoader() {
  $(".loader-img-container").addClass("show-page-loader-fast"),
    setTimeout(function () {
      $(".loader-img-container").addClass("hide-page-loader"),
        callHidePerloader();
    }, 1e3);
}
observer.observe(),
  $(window).ready(function () {
    "" === document.referrer.trim()
      ? ($(".loader-img-container").addClass("hide-loader-page-loaded"),
        defalutLoader())
      : ($(".image_visible").addClass("image_visible_animate"),
        $("#preloader").remove(),
        hidePageLoader());
  });
