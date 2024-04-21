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



// colors
const fluffy = (target) => {
  const startTime = performance.now()

  // 振幅にランダムな値を設定
  const amplitude = {
    x: -7 + Math.random() * 10,  // -5 から 5 の範囲でランダム
    y: 3 + Math.random() * 10    // 5 から 15 の範囲でランダム
  }

  // 速度にランダムな値を設定
  const speed = {
    x: 0.0002 + Math.random() * 0.0006,  // 0.0002 から 0.0008 の範囲でランダム
    y: 0.0002 + Math.random() * 0.001   // 0.0005 から 0.002 の範囲でランダム
  }

  const tick = () => {
    const diff = performance.now() - startTime
    const x = amplitude.x * Math.sin(speed.x * diff)
    const y = amplitude.y * Math.sin(speed.y * diff)

    target.style.transform = `translate(${x}%, ${y}%)`

    requestAnimationFrame(tick)
  }

  tick()
}

// .bird クラスを持つ全ての要素を取得
const fluffyTargets = document.querySelectorAll('.js-color')

// 取得した全要素に対して fluffy 関数を適用
fluffyTargets.forEach(target => {
  if (target) {
    fluffy(target)
  }
})