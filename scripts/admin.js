function showCustomers(e) {
  document.querySelectorAll('ul li').forEach(item => item.style.fontWeight = '200');
  e.target.style.fontWeight = 'bold';
  document.querySelector('.container').style.display = 'block';
  document.querySelector('.cards').style.opacity = '0';
  document.querySelector('.container').innerHTML = `
  <table class="content-table">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Number</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  `
  customers.forEach((customer, i) => document.querySelector('tbody').innerHTML += `
  <tr>
    <td>${i}</td>
    <td>${customer.user.fName} ${customer.user.lName}</td>
    <td>${customer.number}</td>
    <td>${customer.user.email}</td>
    <td>${customer.address}</td>
  </tr>
  `)
  document.querySelector('.content-table').style.width = '80%';
  document.querySelector('.content-table').style.float = 'right';
}

function showStaff(e) {
  document.querySelectorAll('ul li').forEach(item => item.style.fontWeight = '200');
  e.target.style.fontWeight = 'bold';
  document.querySelector('.container').style.display = 'block';
  document.querySelector('.cards').style.opacity = '0';
  document.querySelector('.container').innerHTML = `
  <table class="content-table">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Date Started</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  `
  employees.forEach((employee, i) => document.querySelector('tbody').innerHTML += `
  <tr>
    <td>${i}</td>
    <td>${employee.user.fName} ${employee.user.lName}</td>
    <td>${employee.user.username}</td>
    <td>${employee.user.email}</td>
    <td>${employee.dateStarted}</td>
  </tr>
  `)
  document.querySelector('.content-table').style.width = '80%';
  document.querySelector('.content-table').style.float = 'right';
}

function showMenu(e) {
  document.querySelectorAll('ul li').forEach(item => item.style.fontWeight = '200');
  e.target.style.fontWeight = 'bold';
  document.querySelector('.container').style.display = 'block';
  document.querySelector('.cards').style.opacity = '0';
  document.querySelector('.container').innerHTML = `
  <table class="content-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Category</th>
      <th>Price</th>
      <th>Chef</th>
      <th>Image</th>

    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  `

  menu.forEach(menuitem => {
    menuitem.forEach(item => {
      document.querySelector('tbody').innerHTML += `
   <tr>
     <td>${item.name.toLowerCase()}</td>
     <td>${item.category}</td>
     <td>$${item.price}</td>
    <td>${item.recipe.chef}</td>
    <td><img src= '${item.img}' /></td>

   </tr>
   `
    })
  })
  document.querySelector('.content-table').style.width = '80%';
  document.querySelector('.content-table').style.float = 'right';
}

function check() {
  if (document.getElementById('check').checked) {
    document.querySelector('.cards').style.width = '80%';
    document.querySelector('.cards').style.float = 'right';
    document.querySelector('.content-table').style.width = '80%';
    document.querySelector('.content-table').style.float = 'right';
  } else {
    document.querySelector('.cards').style.width = '100%';
    document.querySelector('.cards').style.float = 'left';
    document.querySelector('.content-table').style.float = 'left';
    document.querySelector('.content-table').style.width = '100%';
  }
}

function showDashboard(e) {
  document.querySelectorAll('ul li').forEach(item => item.style.fontWeight = '200');
  e.target.style.fontWeight = 'bold';
  document.querySelector('.cards').style.opacity = '1';
  document.querySelector('.container').style.display = 'none';
}
