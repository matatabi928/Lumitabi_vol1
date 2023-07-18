window.addEventListener('scroll', function() {
    animateElements('.main-about-item-img-content > p, .main-about-item-img-content-text > p, .main-about-item-img img,.main-pickup-item-text > p, .main-point-item-text, .main-point-item-img, .main-point_block__img, .main-point-item-text-list, .main-blog-item-content, .main-blog-item-text, .button-container', 'fadeInUp 1s ease-out forwards');
    animateElements('.main-pickup-item-1, .main-blog-item-1, h3, .main-bot-item ,.scroll-to-top-btn', 'fadeInUp 0.5s ease-out forwards');
    animateElements('.h2-title-polygon, .h2-title', 'fadeIn 2s ease-out forwards');
  });
  
  function animateElements(selector, animation) {
    var elements = document.querySelectorAll(selector);
  
    for(var i = 0; i < elements.length; i++) {
        var position = elements[i].getBoundingClientRect();
  
        if(position.top <= window.innerHeight && position.bottom >= 0 && !elements[i].classList.contains('animated')) {
            elements[i].style.animation = animation;
            elements[i].classList.add('animated');
        }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    let titles = document.querySelectorAll(".h2-title");
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
  
    titles.forEach(title => {
        observer.observe(title);
    });
  });
  
  