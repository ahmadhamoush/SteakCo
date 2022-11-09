function User(fName, lName, username, email, password, authorized) {
  this.fName = fName;
  this.lName = lName;
  this.username = username;
  this.email = email;
  this.password = password;
  this.authorized = authorized;
}

function Customer(user, address, number, creditCard) {
  this.user = user;
  this.address = address;
  this.number = number;
  this.creditCard = creditCard;
}

function CreditCard(number, date, cvv) {
  this.number = number;
  this.date = date;
  this.cvv = cvv;
}

function Employee(user, dateStarted) {
  this.user = user;
  this.user.authorized = true;
  this.dateStarted = dateStarted;

}
const user = new User('John', 'Doe', 'johndoe1', 'johnDoe@gmail.com', 'johnDoe123', false);
const employee = new User('John', 'Doe', 'johndoe1', 'johnDoe@gmail.com', 'johnDoe123');
const card = new CreditCard(12345678910, '12/24', '123');

const customer1 = new Customer(user, 'Street1', 03123242, card);
const customer2 = new Customer(user, 'Street1', 03123242, card);
const customer3 = new Customer(user, 'Street1', 03123242, card);
const customer4 = new Customer(user, 'Street1', 03123242, card);
const customer5 = new Customer(user, 'Street1', 03123242, card);
const customer6 = new Customer(user, 'Street1', 03123242, card);
const customer7 = new Customer(user, 'Street1', 03123242, card);
const customer8 = new Customer(user, 'Street1', 03123242, card);
const customer9 = new Customer(user, 'Street1', 03123242, card);
const customer10 = new Customer(user, 'Street1', 03123242, card);

const customers = [customer1, customer2, customer3, customer4, customer5,
  customer6, customer7, customer8, customer9, customer10
];

const employee1 = new Employee(employee, '01/01/2022');
const employee2 = new Employee(employee, '01/01/2022');
const employee3 = new Employee(employee, '01/01/2022');
const employee4 = new Employee(employee, '01/01/2022');
const employee5 = new Employee(employee, '01/01/2022');
const employee6 = new Employee(employee, '01/01/2022');
const employee7 = new Employee(employee, '01/01/2022');
const employee8 = new Employee(employee, '01/01/2022');
const employee9 = new Employee(employee, '01/01/2022');
const employee10 = new Employee(employee, '01/01/2022');

const employees = [employee1, employee2, employee3, employee4, employee5,
  employee6, employee7, employee8, employee9, employee10
];

console.log(customers);
console.log(employees);


console.log(menu);
