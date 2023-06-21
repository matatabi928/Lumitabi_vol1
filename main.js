
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
  let header = document.querySelector('.header');
  let coverImage = document.querySelector('.main-img');
  let coverImageHeight = coverImage.offsetHeight;
  let logoImg = document.getElementById('logo-img');

  if (window.pageYOffset > coverImageHeight) {
    header.classList.add('colorized');
    logoImg.classList.add('colorized');
    // ナビメニューの色を変更するコードを追加
    let navItems = document.querySelectorAll('.header-nav-menu-item a');
    navItems.forEach(function(item) {
      item.classList.add('colorized');
    });
  } else {
    header.classList.remove('colorized');
    logoImg.classList.remove('colorized');
    // ナビメニューの色を元に戻すコードを追加
    let navItems = document.querySelectorAll('.header-nav-menu-item a');
    navItems.forEach(function(item) {
      item.classList.remove('colorized');
    });
  }
});