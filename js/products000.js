function displayInfo(info) {
  // console.log(info);
  // $(".zoom-image-link").attr("href", "");

  $(".productImg").attr("src", info.productImg);
  $(".productName").html(info.productName);
  $(".productDisp").html(info.productDisp);
  $(".zoom-image-link").attr("href", info.productImg);
  // console.log($(".productImg"));

  var $easyzoom = $(".easyzoom").easyZoom();
  var api = $easyzoom.data("easyZoom");

  // $(".dynamicOwl").empty()
  // $('.dynamicOwl').html('<div class="owl-carousel owl-theme dynProImgsCarousel"></div>');
  // $(".dynProImgsCarousel").owlCarousel({
  //   margin: 10,
  //   items: 1,
  //   lazyLoad: true,
  // });
  var html = "";
  for (var i = 0; i < info.productImgArr.length; i++) {
    // console.log(info.productImgArr[i])

    api.swap(info.productImgArr[i].zoomImg, info.productImgArr[i].small);
    html +=
      '<div class="item"><div class="easyzoom easyzoom--overlay"><a class="zoom-image-link" href=' +
      info.productImgArr[i].zoomImg +
      "> <img src=" +
      info.productImgArr[i].small +
      ' class="productImg" alt=""> </a></div></div>';

    // $('#demo').html('<div id="testing" class="owl-carousel"></div>');
    // for(var i=0;i<result.length;i++){
    //     $(".owl-carousel").append('<div class="item"><img src="/img/sub_category/'+result[i].subcategory_img+'" /></div>');
    // };
    // $(".dynProImgsCarousel ").empty()

    // for (var i = 0; i < info.productImgArr.length; i++) {
    //   console.log(info.productImgArr[i])

    // // api.swap(info.productImgArr[i].zoomImg, info.productImgArr[i].small);
    //   $(".dynProImgsCarousel").append(
    //     '<div class="item"><div class="easyzoom easyzoom--overlay"><a class="zoom-image-link" href='+info.productImgArr[i].zoomImg+'> <img src='+info.productImgArr[i].small+' class="productImg" alt=""> </a></div></div>'
    //   );

    // }
  }

  $(".dynProImgsCarousel")
    .trigger("replace.owl.carousel", html)
    .trigger("refresh.owl.carousel");
  api.swap(info.productImg, info.productImg);

  // $(".dynProImgsCarousel").owlCarousel({
  //   margin: 10,
  //   items: 1,
  //   lazyLoad: true,
  // });
}
$(".view-products").on("click", function () {
  $(".place-holder-img").fadeOut("1000");
  $(".product-container-gallery").addClass("d-flex");
});
function activeSelected(selectedel) {
  // console.log(selectedel)
  // console.log($('.product-list').find('.active'))
  console.log(selectedel);
  $(".product-list").find(".product-name").removeClass("active");
  $(selectedel).children(".product-name").addClass("active");
  // $(selectedel).addClass('active')
}
// .
$(".dynProImgsCarousel").owlCarousel({
  margin: 10,
  items: 1,
  lazyLoad: true,
});
function hideSection() {
  console.log("small divices");
  $(".products-container .product-acc").toggle();
  $(".products-container .product-l-bg").toggle();
  $(".products-container .info").toggle();
  $(window).scrollTop(0);
}
// function displayProduct(productid){
$(".product-option").on("click", function () {
  console.log("in click");
  var $easyzoom = $(".easyzoom").easyZoom();
  // $('.place-holder-img').hide()

  // console.log($(this).data('active'))
  let productid = $(this).data("active");

  activeSelected(this);
  if (
    /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // some code..
    console.log("small divices");

    hideSection();
  }
  // activeSelected(this)
  let productInfoObj = Object();
  switch (productid) {
    case "primary1":
      productInfoObj.productId = "display2";
      productInfoObj.productName = "display2 lorem ipluse";
      productInfoObj.productImg =
        "assets/images/products/Whole_Wheat_Bread.png";
      productInfoObj.productImgArr = [
        {
          small: "assets/images/products/Whole_Wheat_Bread.png",
          zoomImg: "assets/images/products/Whole_Wheat_Bread.png",
        },
        {
          small: "assets/images/products/Whole_Wheat_Bread.png",
          zoomImg: "assets/images/products/Whole_Wheat_Bread.png",
        },
        {
          small: "assets/images/products/Whole_Wheat_Bread.png",
          zoomImg: "assets/images/products/Whole_Wheat_Bread.png",
        },
      ];
      productInfoObj.productDisp =
        "display2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias. ";
      productInfoObj.ProIngradinace =
        "display2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias.";
      productInfoObj.natiInfor =
        "display2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias.";
      break;
    case "100AttaBread":
      productInfoObj.productId = "100% Atta Bread";
      productInfoObj.productName = "100% Atta Bread";
      productInfoObj.productImg = "assets/images/recipies-tow.png";
      productInfoObj.productImgArr = [
        {
          small: "assets/images/recipies-tow.png",
          zoomImg: "assets/images/recipies-tow.png",
        },
        {
          small: "assets/images/recipies-tow.png",
          zoomImg: "assets/images/recipies-tow.png",
        },
        {
          small: "assets/images/recipies-tow.png",
          zoomImg: "assets/images/recipies-tow.png",
        },
      ];
      productInfoObj.productDisp =
        "display2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias. ";
      productInfoObj.ProIngradinace =
        "display2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias.";
      productInfoObj.natiInfor =
        "display2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias. Vero exercitationem sapiente ratione? Nemo et doloribus adipisci sunt accusantium earum, at eveniet, autem voluptate molestias aut. Velit, inventore alias.";
      break;
  }
  displayInfo(productInfoObj);
});

// var dynProImgs = new Swiper(".dynProImgs", {
//   slidesPerView: 1,
//   // centeredSlides:true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

$(".avai-gra").change(function () {
  $(".input-price").html($(this).val());
});

// $(document).ready(function () {
//   // hideSection()
//     console.log($(".header-box").outerHeight());
$(".products-container").css("top", $(".header-box").outerHeight());

// });
var productRecipesContaint = new Swiper(".product-recipes-containt", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: "row",
  direction: "vertical",
  mousewheel: true,
  observer: true,
  observeParents: true,
  lazy: true,
});
// $('#products-recipes-tab').click(function(){
//   console.log("click")
//   productRecipesContaint.update()
// })

if (
  /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  console.log("small");
  productRecipesContaint.destroy();
  // hideSection();
  $(".dis-on-mobile").addClass("active show");
}
// window.onhashchange = function() {
//   //blah blah blah
//   console.log("back device")
//  }

//  $(window).on("navigate", function (event, data) {
//   console.log("navigae")
//   event.preventDefault()
//   var direction = data.state.direction;
//   if (direction == 'back') {
//     // do something
//   }
//   if (direction == 'forward') {
//     // do something else
//   }
// });
// <!-- <script src="js/products-min.js"></script> -->
function locationPopup() {
  $(".location-popup").css("top", -$(".location-popup").outerHeight() / 2);
  if ($(".location-popup.display-location").length) {
    $(".location-popup").addClass("hide-location");
    setTimeout(() => {
      $(".location-popup").removeClass("hide-location display-location");
    }, 900);
  } else {
    $(".location-popup").addClass("display-location");
  }
}
