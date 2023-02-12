 // client-list-business.js

//CommonJS
const clientB = require("./client-business");
const data = require("./data-business");


 function printClientsAccounts() {
    const clients = data.getClients();
    console.log("clients: " + clients)
    const ul = document.createElement("ul");
    for (let client of clients) {
    const element = clientB.getClientElement(client);
    ul.appendChild(element);
    }
    document.getElementById("root").appendChild(ul);
   }

 //CommonJS
 //module.exports ={
   // printClientsAccounts: printClientsAccounts
 //}
 exports.printClientsAccounts = printClientsAccounts;