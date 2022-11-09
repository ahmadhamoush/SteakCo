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

document.addEventListener('scroll', function() {
   document.querySelectorAll('.review-container').forEach(item=>{
     var top = window.pageYOffset + window.innerHeight;
       var isVisible = top > item.offsetTop;
       if (isVisible) {
          item.classList.add('review-active');
       } else {
            item.classList.remove('review-active');
       }
   })

});

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
