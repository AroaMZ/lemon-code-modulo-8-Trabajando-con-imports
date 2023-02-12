// client-business.js


//CommonJS
const accountB = require("./account-business");
const data = require("./data-business");


function getClientElement(client) {
    const allAccounts = data.getAccounts();
    console.log("allAccounts:" + allAccounts)
    const clientAccounts = [];
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }
    const node = getClientNode(client);
    const ul = accountB.getClientAccountsElement(clientAccounts);
    node.appendChild(ul);
    return node;
}
function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));
    return li;
}
function getFullName(client) {
    return client.first_name + " " + client.last_name;
}

   //CommonJS
   exports.getClientElement = getClientElement;
   

