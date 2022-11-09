document.addEventListener('scroll', function() {
  var top = window.pageYOffset + window.innerHeight;
  var isVisible = top > document.querySelector('.view-menu').offsetTop;
  if (isVisible) {
    document.querySelector('nav').classList.add('scrolled-body');
    document.querySelector('nav h1').classList.add('scrolled-content');
    document.querySelector('.nav-btn').style.color = 'black';
    document.querySelectorAll('nav ul li').forEach(item => {
      item.classList.add('scrolled-content')
    });
  } else {
    document.querySelector('nav').classList.remove('scrolled-body');
    document.querySelector('nav h1').classList.remove('scrolled-content');
    document.querySelector('.nav-btn').style.color = 'white';
    document.querySelectorAll('nav ul li').forEach(item => {
      item.classList.remove('scrolled-content')
    });
  }
});

animate('.view-menu', 'transform');
animate('.book', 'transform');
animate('.reviews-title','fade');
animate('.contact .inputs', 'fade');
animate('.contact .message', 'transform');
animateForEach('.review-container', 'review-active');
animateForEach('.links .link', 'changeBg')
animateMultiple('.why-us', ['.img-container','.why-us-body'],['transform2','slideLeft']);
animateMultiple('.book', ['.contact span','.contact h2'],['slideLeft','slideRight']);


function animate(item,classToAdd){
  document.addEventListener('scroll', function() {
    var top = window.pageYOffset + window.innerHeight;
    var isVisible = top > document.querySelector(item).offsetTop;
    if (isVisible) {
          document.querySelector(item).classList.add(classToAdd);
    } else {
        document.querySelector(item).classList.remove(classToAdd);
    }
  });
}
function animateForEach(itemToAnimate, classToAdd){
  document.addEventListener('scroll', function() {
  document.querySelectorAll(itemToAnimate).forEach(item=>{
    var top = window.pageYOffset + window.innerHeight;
      var isVisible = top > item.offsetTop;
      if (isVisible) {
         item.classList.add(classToAdd);
      } else {
           item.classList.remove(classToAdd);
      }
  });
  });
}

function animateMultiple(view, items,classes){
  document.addEventListener('scroll', function() {
    var top = window.pageYOffset + window.innerHeight;
    var isVisible = top > document.querySelector(view).offsetTop;
    if (isVisible) {
        document.querySelector(items[0]).classList.add(classes[0]);
          document.querySelector(items[1]).classList.add(classes[1]);
    } else {
        document.querySelector(items[0]).classList.remove(classes[0]);
        document.querySelector(items[1]).classList.remove(classes[1]);
    }
  });
}
function changeIcon() {
  if (document.getElementById('check').checked == true) {
    document.querySelector('label i').classList.remove('fa-bars');
    document.querySelector('label i').classList.add('fa-x');
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('label i').classList.add('fa-bars');
    document.querySelector('label i').classList.remove('fa-x');
    document.querySelector('body').style.overflow = 'visible';
  }
}
