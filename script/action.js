let winW = $(window).width()




if(winW >= 1025) {
  $(".gnb").mouseenter(function () {
    $(".nav_box").stop().fadeIn(200);
  });
  
  $(".gnb").mouseleave(function () {
    $(".nav_box").stop().fadeOut(200);
  });


  $(".nav_box").mouseenter(function () {
    $(".nav_box").stop().fadeIn(200);
  });
  
  $(".nav_box").mouseleave(function () {
    $(".nav_box").stop().fadeOut(200);
  });
  
}


//mo gnb 
$('header .menu_box .menu > li > a').click(function(){
  $('.submenu').slideUp()
  $(this).parent().find('.submenu').stop().slideToggle();

  return false;
})

$('.hambuger').click(function(){
  $('.hambuger').toggleClass('on')
  $('.nav_box').fadeToggle(200)
})


$(document).ready(function() {
  var barHeight = $('.main_position_bar').height();
  $(window).on('scroll', function() {
    var scrollPercentage = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    var newPosition = (scrollPercentage * (barHeight - $('.main_position_bar span').height()) / 100) + 'px';
    $('.main_position_bar span').css('top', newPosition);
  });
});


// 왼쪽 사이드 바 스크롤 화면
// $('.main_position_bar a').click(function(){

//     let aHref = $(this).attr('href')
//     let aHrefTop = $(aHref).offset().top

//     $('html').animate({scrollTop:aHrefTop})

//     return false;
//    })

//    //메인변수
//    let slideTop,sec1Top,sec2Top,sec3Top

//    //서브 변수
//    let sub1,sub2

//    if($('#section_box').length > 0) {
//    slideTop = $('#slide_box').offset().top
//    sec1Top = $('#section1').offset().top
//    sec2Top = $('#section2').offset().top
//    sec3Top = $('#section3').offset().top
//   }

// $(window).scroll(function(){
//   let scrT = $(window).scrollTop() //스크롤값

//   if(scrT >= slideTop - 200){
//     $('.main_position_bar a').eq(0).addClass('active').siblings().removeClass()
//   }
//   if(scrT >= sec1Top - 200){
//     $('.main_position_bar a').eq(1).addClass('active').siblings().removeClass()
//   }
//   if(scrT >= sec2Top - 200){
//     $('.main_position_bar a').eq(2).addClass('active').siblings().removeClass()
//   }
//   if(scrT >= sec3Top - 200){
//     $('.main_position_bar a').eq(3).addClass('active').siblings().removeClass()
//   }
// })

// $(window).scroll(function(){
//   let scrT = $(window).scrollTop() //스크롤값

//   if(scrT >= slideTop - 200){
//     $('.main_position_bar span').css({top:0})
//   }
//   if(scrT >= sec1Top - 200){
//     $('.main_position_bar span').css({top:50})
//   }
//   if(scrT >= sec2Top - 200){
//     $('.main_position_bar span').css({top:100})
//   }
//   if(scrT >= sec3Top - 200){
//     $('.main_position_bar span').css({top:150})
//   } 
//   })




  // top버튼
// let scrT = $(window).scrollTop()
// let winH = $(window).height()

//   if(scrT >= winH) {
//     $('.go_top').css({opacity:1, visibility:'visible'})
//   } else {
//     $('.go_top').css({opacity:0, visibility:'hidden'})
//   }

$('.go_top').click(function(){ 
  $('html').animate({scrollTop:0})
})









    





