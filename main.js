
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

  // "white-header" クラスが body 要素に追加されているかどうかをチェックします。これは、このページでヘッダーの背景色を白にするかどうかを決定します。
  if (document.body.classList.contains('white-header')) {
    // "white-header" クラスが追加されている場合、色の変更はスキップされます（つまり、何もしません）。
    return;  
  }

  // ユーザーがページをスクロールしたとき、カバー画像の高さを超えたらヘッダーの色を変更します。
  if (window.pageYOffset > coverImageHeight) {
    header.classList.add('colorized');
    logoImg.classList.add('colorized');
    let navItems = document.querySelectorAll('.header-nav-menu-item a');
    navItems.forEach(function(item) {
      item.classList.add('colorized');
    });
  } else {
    // スクロール位置がカバー画像の高さ未満の場合、ヘッダーの色を元に戻します。
    header.classList.remove('colorized');
    logoImg.classList.remove('colorized');
    let navItems = document.querySelectorAll('.header-nav-menu-item a');
    navItems.forEach(function(item) {
      item.classList.remove('colorized');
    });
  }
});
