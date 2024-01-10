const Client = require('./client');
const Ticket201 = require('./ticket201');

const ticket201 = new Ticket201();

ticket201.addClient("clent1", 5000);
ticket201.addClient("client2", 7000);
ticket201.addClient("client3", 3000);

ticket201.displayAllClientNames();

ticket201.findTopClients(2);

ticket201.removeClient("client2");

ticket201.displayAllClientNames();

console.log(TP1.name);