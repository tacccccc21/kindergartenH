
// この関数はページが読み込まれた後に実行されます
window.onload = () => {

    // スクロールリビールアニメーション
    ScrollReveal().reveal('.c-fadeIn', {
      duration: 2000, // アニメーションの完了にかかる時間
      viewFactor: 0.4, // 0~1,どれくらい見えたら実行するか
      distance: '50px',
    });

    ScrollReveal().reveal('.c-fadeInRight', {
      duration: 2000, // アニメーションの完了にかかる時間
      viewFactor: 0.4, // 0~1,どれくらい見えたら実行するか
      origin: 'right',
      distance: '50px',
    });

    ScrollReveal().reveal('.c-fadeInLeft', {
      duration: 2000, // アニメーションの完了にかかる時間
      viewFactor: 0.4, // 0~1,どれくらい見えたら実行するか
      distance: '50px',
      origin: 'left',
    });

    // タイトルアニメーション
  }







  document.addEventListener('DOMContentLoaded', function() {
    // 各メニュー項目（<li>）に対する処理
    const menuItems = document.querySelectorAll('li');

    menuItems.forEach(function(item) {
        let timer; // 遅延を管理するためのタイマーIDを保持する変数

        // メニュー項目にマウスが入った時
        item.addEventListener('mouseover', function() {
            // 既に設定されている遅延をクリア
            clearTimeout(timer);
            // .dropMenuを表示
            const dropMenu = this.querySelector('.dropMenu');
            if (dropMenu) {
                dropMenu.style.display = 'block';
            }
        });

        // メニュー項目からマウスが離れた時
        item.addEventListener('mouseout', function() {
            // .dropMenuを取得
            const dropMenu = this.querySelector('.dropMenu');
            if (dropMenu) {
                // 0.5秒後に.dropMenuを非表示にするタイマーを設定
                timer = setTimeout(function() {
                    dropMenu.style.display = 'none';
                }, 500);
            }
        });
    });
});


// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function() {
  const ham = document.querySelector('.ham');
  const spans = ham.querySelectorAll('span'); // .ham内の全spanを取得
  const conSp = document.querySelector('.l-header__contentsSp');
  
  
  ham.addEventListener('click', function() {
    spans.forEach(span => {
      span.classList.toggle('is-active'); // 各spanにis-activeクラスをトグル
      conSp.classList.toggle('is-active');
    });
  });
});