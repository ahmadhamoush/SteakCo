function changeIcon() {
  if (document.getElementById('check').checked == true) {
    document.querySelector('label i').classList.remove('fa-bars');
    document.querySelector('label i').classList.add('fa-x');
    document.querySelector('label i').style.color = '#FFFFFF';
    document.querySelector('nav h1').style.color = '#FFFFFF';
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('label i').classList.add('fa-bars');
    document.querySelector('label i').classList.remove('fa-x');
    document.querySelector('nav h1').style.color = '#1A5151';
    document.querySelector('label i').style.color = '#1A5151';
    document.querySelector('body').style.overflow = 'visible';
  }
}
const credentials = {
  username: 'admin',
  password: 'admin'
}

function loginValidation() {
  const username = document.querySelector('.username').value;
  const password = document.querySelector('.password').value;
  if (username == credentials.username && password == credentials.password) {
    window.location.href = 'admin.html';
  } else {
    alert('Wrong Credentials!')
  }
}
