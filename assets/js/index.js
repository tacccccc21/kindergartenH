// swiper
var mySwiper = new Swiper('.swiper-container', {
  // effect: 'coverflow', // エフェクトの種類を「coverflow」に設定
  centeredSlides: true, // 真ん中のスライドを中央に表示
  slidesPerView: 'auto', // 自動でスライド数を調整
  spaceBetween: 30, // スライド間に30pxの隙間を設ける
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000, // 2.5秒ごとにスライドを切り替える
    disableOnInteraction: false, // ユーザーの操作後も自動スワイプを継続
  },
});

// swiper
