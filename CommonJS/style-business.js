 // style-business.js
 function getNodeStyle(account) {
   console.log(account)
    if (account.money < 0) {
    return "color: red";
    }
    return "color: blue";
   }
   
//CommonJS
exports.getNodeStyle = getNodeStyle