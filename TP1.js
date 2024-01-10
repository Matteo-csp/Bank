class Customer {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

class Ticket201 {
  constructor() {
    this.customers = [];
  }

  addCustomer(name, balance) {
    const newCustomer = new Customer(name, balance);
    this.customers.push(newCustomer);
    console.log(`Customer ${name} successfully added.`);
  }

  removeCustomer(name) {
    const index = this.customers.findIndex(customer => customer.name === name);
    if (index !== -1) {
      this.customers.splice(index, 1);
      console.log(`Customer ${name} successfully removed.`);
    } else {
      console.log(`Customer ${name} not found.`);
    }
  }

  displayCustomerInfo(name) {
    const customer = this.customers.find(customer => customer.name === name);
    if (customer) {
      console.log(`Information for customer ${name}:`);
      console.log(`Balance: ${customer.balance}`);
    } else {
      console.log(`Customer ${name} not found.`);
    }
  }

  displayAllCustomerNames() {
    const customerNames = this.customers.map(customer => customer.name);
    console.log("Names of all customers:", customerNames.join(", "));
  }

  findTopCustomers(topX) {
    const sortedCustomers = [...this.customers].sort((a, b) => b.balance - a.balance);
    const topCustomers = sortedCustomers.slice(0, topX);

    console.log(`Top ${topX} richest customers:`);
    topCustomers.forEach((customer, index) => {
      console.log(`${index + 1}. ${customer.name} - Balance: ${customer.balance}`);
    });
  }
}

const ticket201 = new Ticket201();

ticket201.addCustomer("customer1", 5000);
ticket201.addCustomer("customer2", 7000);
ticket201.addCustomer("customer3", 3000);

ticket201.displayAllCustomerNames();

ticket201.findTopCustomers(2);

ticket201.removeCustomer("customer2");

ticket201.displayAllCustomerNames();
