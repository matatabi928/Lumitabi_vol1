window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.main-about-item-img-content > p, .main-about-item-img-content-text > p, .main-about-item-img img,.main-pickup-item-text > p, .main-point-item-text, .main-point-item-img, .main-point_block__img, .main-point-item-text-list, .main-blog-item-content, .main-blog-item-text, .button-container');

  for(var i = 0; i < elements.length; i++) {
      var position = elements[i].getBoundingClientRect();

      if(position.top <= window.innerHeight && position.bottom >= 0 && !elements[i].classList.contains('animated')) {
          elements[i].style.animation = 'fadeInUp 1s ease-out forwards';
          elements[i].classList.add('animated');
      }
  }
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.main-pickup-item-1, .main-blog-item-1, h3, .main-bot-item ,.scroll-to-top-btn');

  for(var i = 0; i < elements.length; i++) {
      var position = elements[i].getBoundingClientRect();

      if(position.top <= window.innerHeight && position.bottom >= 0 && !elements[i].classList.contains('animated')) {
          elements[i].style.animation = 'fadeInUp 0.5s ease-out forwards';
          elements[i].classList.add('animated');
      }
  }
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.h2-title-polygon, .h2-title');

  for(var i = 0; i < elements.length; i++) {
      var position = elements[i].getBoundingClientRect();

      if(position.top <= window.innerHeight && position.bottom >= 0 && !elements[i].classList.contains('animated')) {
          elements[i].style.animation = 'fadeIn 2s ease-out forwards';
          elements[i].classList.add('animated');
      }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  let titles = document.querySelectorAll(".h2-title");
  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if(entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // Once the element is visible, stop observing it
          }
      });
  }, { threshold: 0.1 });
  
  titles.forEach(title => {
      observer.observe(title);
  });
});







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
