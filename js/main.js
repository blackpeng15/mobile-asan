const elFooter = document.querySelector('footer'); 
const elcon_wrap = document.querySelector('#con_wrap'); 
console.log(elcon_wrap);

//#con_wrap의 높이 구하기 -footer에 fixed를 사용 안할때
let winH = $(window).height();        //열려져있는 화면의 높이
const headerH = $('header').height(); //header의 높이
const footerH = elFooter.offsetHeight; //footer높이(자바스크립트)
console.log(`현재 화면 높이 ${winH} / header의 높이 ${headerH} /  footer의 높이 ${footerH}`);

//#con_wrap의 높이는 화면전체 세로에서 헤더, 푸터 높이를 빼준값
let con_wrap_Height =  winH - (headerH +footerH);
//$('#con_wrap').css({height:con_wrap_Height});
console.log(con_wrap_Height);

elcon_wrap.style.height = `${con_wrap_Height}px`;   //#con_wrap의 높이 지정

window.addEventListener('resize',function(){
  let winH = $(window).height(); 
  let con_wrap_Height =  winH - (headerH +footerH); 
  elcon_wrap.style.height = `${con_wrap_Height}px`;  
})

let du = 400;
let open = 0; // 메뉴가 닫혀 있는 상태 (처음)

// lnb 슬라이드 메뉴
$('.lnb_btn').click(function(){
  if( open == 0 ){
    $('#wrap').animate({left:274},du);
    $('#lnb').animate({left:0},du);
    // $('.cover').css('display', 'block');
    $('.cover').fadeIn(du);
    $(this).find('img').attr({'src':'img/bg_header_lnb_active.png', 'alt':'메뉴닫기'})
    open = 1;
  } else {
    $('#wrap').animate({left:0},du);
    $('#lnb').animate({left:-274},du);
    $(this).find('img').attr({'src':'img/bg_header_lnb.png', 'alt':'메뉴열기'})
    $('.cover').fadeOut(du);
    open = 0;
  }
});


