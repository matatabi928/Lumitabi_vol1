window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.main-about-item-img-content > p, .main-about-item-img-content-text > p, .main-about-item-img img, h3,.main-pickup-item-text > p, .main-point-item-text, .main-point-item-img, .main-point_block__img, .main-point-item-text-list, .main-blog-item-content, .main-blog-item-text');

  for(var i = 0; i < elements.length; i++) {
      var position = elements[i].getBoundingClientRect();

      // 要素がビューポート内に存在する場合
      if(position.top <= window.innerHeight && position.bottom >= 0) {
          elements[i].style.animation = 'fadeInUp 1s ease-out forwards';
      } else {
          // 要素がビューポート外に存在する場合
          elements[i].style.animation = 'none';
      }
  }
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.main-pickup-item-1, .main-blog-item-1, .main-bot-item ,.scroll-to-top-btn');

  for(var i = 0; i < elements.length; i++) {
      var position = elements[i].getBoundingClientRect();

      // 要素がビューポート内に存在する場合
      if(position.top <= window.innerHeight && position.bottom >= 0) {
          elements[i].style.animation = 'fadeInUp 0.5s ease-out forwards';
      } else {
          // 要素がビューポート外に存在する場合
          elements[i].style.animation = 'none';
      }
  }
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.h2-title-polygon, .h2-title');

  for(var i = 0; i < elements.length; i++) {
      var position = elements[i].getBoundingClientRect();

      // 要素がビューポート内に存在する場合
      if(position.top <= window.innerHeight && position.bottom >= 0) {
          elements[i].style.animation = 'fadeIn 1s ease-out forwards';
      } else {
          // 要素がビューポート外に存在する場合
          elements[i].style.animation = 'none';
      }
  }
});

window.onload = function() {
  var title = document.getElementById('myTitle');
  var textNodes = Array.from(title.childNodes);
  title.textContent = "";

  var count = 0;
  for (let textNode of textNodes) {
    if (textNode.nodeName === "#text") {
      var text = textNode.nodeValue;
      for (let i = 0; i < text.length; i++) {
        let newLetter = document.createElement('span');
        newLetter.textContent = text[i];
        newLetter.style.animationDelay = `${count * 0.1}s`;
        newLetter.classList.add('fadeIn');
        title.appendChild(newLetter);
        count++;
      }
    } else if (textNode.nodeName === "BR") {
      title.appendChild(textNode.cloneNode());
    }
  }
};



//バーガーメニューアイコンがクリックされたときの動作を定義
document.querySelector('.burger-menu').addEventListener('click', () => {
  document.querySelector('.header-nav').classList.add('nav-active');
  document.querySelector('.burger-menu').classList.add('toggle');
  // メニューが開いているときは閉じるボタンを表示し、バーガーメニューを非表示にします。
  document.querySelector('.close-menu').style.display = 'block';
  document.querySelector('.burger-menu').style.display = 'none';  // 追加：バーガーメニューを非表示に
});

// 閉じるボタンがクリックされたときの動作を定義
document.querySelector('.close-menu').addEventListener('click', () => {
  document.querySelector('.header-nav').classList.remove('nav-active');
  document.querySelector('.burger-menu').classList.remove('toggle');
  // メニューが閉じているときは閉じるボタンを非表示にし、バーガーメニューを表示します。
  document.querySelector('.close-menu').style.display = 'none';
  document.querySelector('.burger-menu').style.display = 'block';  // 追加：バーガーメニューを表示に
});

window.addEventListener('scroll', function() {
  // ヘッダー要素とカバー画像要素を取得します。
  let header = document.querySelector('.header');
  let coverImage = document.querySelector('.main-img');
  // カバー画像の高さを取得します。
  let coverImageHeight = coverImage.offsetHeight;
  // ロゴ画像要素を取得します。
  let logoImg = document.getElementById('logo-img');
  let burgerMenu = document.querySelector('.burger-menu');


  // "white-header" クラスが body 要素に追加されているかどうかをチェックします。これは、このページでヘッダーの背景色を白にするかどうかを決定します。
  if (document.body.classList.contains('white-header')) {
    // "white-header" クラスが追加されている場合、色の変更はスキップされます（つまり、何もしません）。
    return;  
  }

  // ユーザーがページをスクロールしたとき、カバー画像の高さを超えたらヘッダーの色を変更します。
  if (window.pageYOffset > coverImageHeight) {
    header.classList.add('colorized');
    logoImg.classList.add('colorized');
    burgerMenu.classList.add('colorized');
    let navItems = document.querySelectorAll('.header-nav-menu-item a');
    navItems.forEach(function(item) {
      item.classList.add('colorized');
    });
  } else {
    // スクロール位置がカバー画像の高さ未満の場合、ヘッダーの色を元に戻します。
    header.classList.remove('colorized');
    logoImg.classList.remove('colorized');
    burgerMenu.classList.remove('colorized');
    let navItems = document.querySelectorAll('.header-nav-menu-item a');
    navItems.forEach(function(item) {
      item.classList.remove('colorized');
    });
  }
});
