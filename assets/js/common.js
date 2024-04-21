
// この関数はページが読み込まれた後に実行されます
window.onload = () => {

    // スクロールリビールアニメーシ

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






// メニューアコーディオン
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
                }, 220);
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


// モーダルウィンドウ
let imageContainers = document.querySelectorAll('.swichImgModal');
let modal = document.getElementById('imgModal');
let modalImg = document.getElementById("img01");

// divごとにクリックイベントを追加
imageContainers.forEach(container => {
  container.onclick = function(){
    modal.style.display = "grid";
    modalImg.src = this.children[0].src; // divの最初の子要素（画像）のsrc
  }
});

// クローズボタンでモーダルを非表示にする
modal.onclick = function(event) {
  if (event.target === modal) { // クリックされた要素がモーダル自身なら閉じる
    modal.style.display = "none";
  }
}



// フッターアニメーション
const fly = (target) => {
  const startTime = performance.now()
  
  // 振幅と回転にランダムな値を設定
  const amplitude = {
    x: -20 + Math.random() * 20,  // -5 から 5 の範囲でランダム
    y: -15 + Math.random() * 5,   // 5 から 15 の範囲でランダム
    rotation: -7 + Math.random() * 8  // -3 から 3 の範囲でランダム
  }

  // 速度にランダムな値を設定
  const speed = {
    x: 0.0002 + Math.random() * 0.0006,  // 0.0002 から 0.0008 の範囲でランダム
    y: 0.0005 + Math.random() * 0.0015   // 0.0005 から 0.002 の範囲でランダム
  }

  const tick = () => {
    const diff = performance.now() - startTime
    const x = amplitude.x * Math.sin(speed.x * diff)
    const y = amplitude.y * Math.sin(speed.y * diff)
    const rotation = amplitude.rotation * (1 + Math.sin(speed.y * diff))

    target.style.transform = `rotate(${rotation}deg) translate(${x}%, ${y}%)`

    requestAnimationFrame(tick)
  }

  tick()
}

// .bird クラスを持つ全ての要素を取得
const targets = document.querySelectorAll('.bird')

// 取得した全要素に対して fly 関数を適用
targets.forEach(target => {
  if (target) {
    fly(target)
  }
})