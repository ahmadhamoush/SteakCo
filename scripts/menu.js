document.querySelector('.menu').innerHTML = 'Press an Option to View Menu';

function handleMenuClick(e) {
  document.querySelector('.container h3').innerText = e.target.name;

  if (e.target.name === 'Salads') {
    document.querySelector('.menu').innerHTML = '';
    showMenu(salads);
  } else if (e.target.name === 'Steak') {
    document.querySelector('.menu').innerHTML = '';
    showMenu(steaks);
  } else if (e.target.name === 'Soups') {
    document.querySelector('.menu').innerHTML = '';
    showMenu(soups);
  } else if (e.target.name === 'Drinks') {
    document.querySelector('.menu').innerHTML = '';
    showMenu(drinks);
  }

}

function showMenu(items) {
  items.forEach(item => {
    document.querySelector('.menu').innerHTML += `
    <div id='${item.name}' onclick='openModal(event)' class='item-container'>
    <img name='${item.name}' src=${item.img}></img>
      <div class='info'>
      <h1 class='${item.name}'>${item.name}</h1>
      <p class='${item.name}'>${item.recipe.ingredients}</p>
      </div>
      <span>$${item.price}</span></div>
  `
  });
}

let item;
let cart = [];
let cartCount = 0;
let totalPrice = 0;

document.querySelector('.cart-num').innerHTML = cartCount;

function openModal(e) {
  document.querySelector('.container').style.opacity = 0.1;
  let name;
  if (e.target.nodeName == 'IMG') {
    name = e.target.name
  } else if (e.target.nodeName == 'DIV') {
    name = e.target.id;
  } else {
    name = e.target.className;
  }

  const items = menu.map(menuitem => menuitem.filter(item => item.name == name));
  item = items.filter(item => Object.keys(item).length !== 0)[0][0];
  item = {
    ...item,
    quantity: 0
  };
  console.log(item);

  document.querySelector('.menu-modal').open = true;
  document.querySelector('.menu-modal').innerHTML = `
  <span class='close' onclick='closeModal()'>x</span>
  <img class='modal1-img' name='${item.name}' src=${item.img}></img>
    <div class='dialog-container'>
    <span>${item.category}</span>
    <h1 class='${item.name}'>${item.name}</h1>
    <span>$${item.price}</span>
    <p class='${item.name}'>${item.recipe.ingredients}</p>
    <!-- <span>Chef: ${item.recipe.chef}</span>
    <span>Preparation: ${item.recipe.preparation}</span> -->
    <div class='cart'>
    <div style='position: relative;'>
      <h4>Quantity:</h4>
      <span class='quantity'></span>
      </div>
    <button onclick='addToCart()'>Add To Cart</button>
    </div>
    </div>
`
  document.querySelector('body').style.overflow = 'hidden';
};

function closeModal() {
  document.querySelector('.menu-modal').open = false;
  document.querySelector('.container').style.opacity = 1;
  document.querySelector('body').style.overflow = 'visible';
}

function closeCart() {
  document.querySelector('.cart-modal').open = false;
  document.querySelector('.container').style.opacity = 1;
  document.getElementById('check').checked = false;
  document.querySelector('nav h1').style.color = 'black';
  document.querySelector('label i').style.color = 'black';
  document.querySelector('label i').classList.add('fa-bars');
  document.querySelector('label i').classList.remove('fa-x');
  document.querySelector('body').style.overflow = 'visible';
  document.querySelector('.container').style.display = 'block';
  document.querySelector('nav').style.display = 'flex';
  totalPrice = 0;
}

function addToCart() {
  if (item.quantity == 0) {
    cart.push(item);
    item.quantity++;
  } else {
    item.quantity++;
  }

  console.log(cart);
  let cartString = document.querySelector('.cart-num').innerHTML;
  let cartNum = Number(cartString);
  cartNum++;
  document.querySelector('.cart-num').innerHTML = cartNum;
  document.querySelector('.quantity').innerHTML = item.quantity;
  cartCount = cartNum;
}

function openCart() {
  document.querySelector('.container').style.opacity = 0.1;
  document.querySelector('.cart-modal').open = true;
  document.querySelector('body').style.overflow = 'visible';
  document.querySelector('.container').style.display = 'none';
  document.querySelector('nav').style.display = 'none';
  document.querySelector('.cart-modal').innerHTML = `
<span class='close' onclick='closeCart()'>x</span>
  <h1>Cart</h1>
  <div class='cart-items'></div>
  <div class='cartBottom'>
  <button>Order</button>
  <div class='totalContainer'>
  <h4>Total</h4>
  <span class='total'></span>
  </div>
  </div>
`
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;
    document.querySelector('.cart-items').innerHTML += `
  <div class='cart-item'>
    <div>
    <span>Name</span>
    <p class='cart-desc'>${item.name}</p>
    </div>
    <div>
    <span>Image</span>
    <img class='cart-desc' src=${item.img}></img>
    </div>
    <div>
    <span>Quantity</span>
    <p class='cart-desc'>${item.quantity}</p>
    </div>
    <div>
    <span>Price</span>
    <p class='cart-desc'>$${item.price*item.quantity}</p>
    </div>
    <i id='${item.name}' onclick='remove(event)' class="fa-solid fa-trash trash"></i>
  </div>`
  });
  document.querySelector('.total').innerHTML = `$${totalPrice}`;

}

function remove(e) {
  const price = e.target.parentElement.children[3].querySelector('p').innerHTML;
  price.split('');
  newPrice = price.substring(1);
  totalPrice -= newPrice;
  const name = e.target.id;
  cart = cart.filter(item => item.name != name, cartCount -= item.quantity);
  console.log(cart);
  e.target.parentElement.remove();
  document.querySelector('.total').innerHTML = `$${totalPrice}`;
}

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
    document.querySelector('nav h1').style.color = 'black';
    document.querySelector('label i').style.color = 'black';
    document.querySelector('body').style.overflow = 'visible';
  }
}
