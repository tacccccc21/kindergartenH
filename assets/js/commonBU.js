console.log("common")

// loader
const loaderComplete = () => {
  return new Promise((resolve) => {
    let percent = 0;
    const loaderText = document.getElementById("loader-text");
    const loader = document.getElementById("loader");
    const loaderCircle = document.querySelector('.l-loader__circle');

    const interval = setInterval(() => {
      percent += 1;
      loaderText.textContent = percent + "%";
      const offset = 125.6 - (125.6 * percent / 100); // 円グラフの進行
      loaderCircle.style.strokeDashoffset = offset;

      if (percent >= 100) {
        clearInterval(interval);
        loader.classList.add('l-loader--fade-out'); // BEMスタイルの修飾子クラスを追加
        setTimeout(() => {
          loader.style.display = 'none'; // フェードアウトが完全に終了した後に非表示に設定
          resolve(); // ローダー完了を通知
        }, 420);
      }
    }, 5);
  });
};

// この関数はページが読み込まれた後に実行されます
window.onload = () => {
  loaderComplete().then(() => {
    // ハンバーガーメニュー
    const ham = document.getElementById('ham');
    const spans = document.getElementsByClassName('hamSpan');
    ham.addEventListener('click', () => {
      for(let i = 0; i < spans.length; i++){
          spans[i].classList.toggle('is-active');
      }
      document.getElementById('headerMenuSp').classList.toggle('is-active');
    });

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
      const container = document.getElementById('animated-text');
    if (container) {
    const html = container.innerHTML;
    let newHTML = '';

    // 文字を一文字ずつ処理
    for (let i = 0; i < html.length; i++) {
      if (html.substring(i, i+4) === "<br>") {
        newHTML += "<br>";
        i += 3; // <br>タグをスキップ
      } else {
        newHTML += `<span>${html[i]}</span>`;
      }
    }

    // 新しいHTMLをコンテナに設定
    container.innerHTML = newHTML;

    // アニメーション適用
    const spans = container.querySelectorAll('span');
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.1}s`;
    });
  }

  const classAddFunction = (id) => {
      document.getElementById(id).classList.add("start");
  }
  classAddFunction("mvLogo");
  classAddFunction("animated-text");
  });
};


// ボタンアニメーション
  const btns = document.querySelectorAll('.c-btn');

  btns.forEach(btn => {
    const btnMark = btn.querySelector('.c-btn__mark');

    const applyHoverStyle = () => {
      btn.style.padding = "32px 18px 8px 42px";
      btn.style.transform = 'translate(-12px, -12px)';
      if (btnMark) {
        btnMark.style.width = `${btn.offsetWidth}px`;
        btnMark.style.height = `${btn.offsetHeight}px`;
        btnMark.style.top = "6.5px";
        btnMark.style.left = "6.5px";
      }
    };

    const resetHoverStyle = () => {
      btn.style.padding = "";
      btn.style.transform = '';
      if (btnMark) {
        btnMark.style.width = '';
        btnMark.style.height = '';
        btnMark.style.top = '';
        btnMark.style.left = '';
      }
    };

    // ボタンとマークの両方に対してホバーイベントを適用
    [btn, btnMark].forEach(element => {
      if (element) {
        element.addEventListener('mouseover', applyHoverStyle);
        element.addEventListener('mouseout', resetHoverStyle);
      }
    });
  });


  // ポインターの装飾
  if (window.innerWidth > 768) {
const cursorPointer = document.getElementById('cursor-pointer');
  const cursorChangeElements = document.querySelectorAll('.cursorChange');

  document.addEventListener('mousemove', (e) => {
    cursorPointer.style.display = 'block'; // ポインターを常に表示
    cursorPointer.style.left = e.clientX + 'px';
    cursorPointer.style.top = e.clientY + 'px';
  });

  cursorChangeElements.forEach(element => {
    element.addEventListener('mouseover', () => {
      cursorPointer.classList.add('special-cursor');
    });
    element.addEventListener('mouseout', () => {
      cursorPointer.classList.remove('special-cursor');
    });
  });
  }




  // スムーススゥロール
  const header = document.querySelector('.l-header'); // ヘッダー要素を選択
  const headerHeight = header.offsetHeight; // ヘッダーの高さを取得

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // 通常のリンクの動作を防止

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }

      if (window.innerWidth < 769){
        for(let i = 0; i < document.getElementsByClassName('hamSpan').length; i++){
            document.getElementsByClassName('hamSpan')[i].classList.toggle('is-active');
        }
        document.getElementById('headerMenuSp').classList.toggle('is-active');
      }
    });
  });