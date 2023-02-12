 // client-list-business.js

//ES6
import * as clientB from "./client-business";
import * as data from "./data-business";


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

//ES6
export {printClientsAccounts};