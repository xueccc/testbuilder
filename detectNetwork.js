// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
//Diner Club  
  var dinerClubPrefix = ['38', '39'];
  if (cardNumber.length === 14 && dinerClubPrefix.includes(cardNumber.slice(0,2))){
    return 'Diner\'s Club';
  }
//American Express
 if (cardNumber.length === 15) {
    if (cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37'){
     return 'American Express';
    }
   }

//Visa
 var visaCardNumberLengths = [13, 16, 19];
  if (cardNumber[0] === '4' && visaCardNumberLengths.includes(cardNumber.length)){
    return 'Visa';
  }

//MasterCard
 var MasterCardPrefix = ['51', '52', '53', '54', '55'];
  if (MasterCardPrefix.includes(cardNumber.slice(0,2)) && cardNumber.length === 16){
    return 'MasterCard';
  }

//Discover  
  var discoverCardNumberLengths = [16, 19];
  var discoverPrefix3Digits = ['6011','644', '645', '646', '647', '648', '649', '65'];
  if (discoverCardNumberLengths.includes(cardNumber.length) && 
  (discoverPrefix3Digits.includes(cardNumber.slice(0,3)) || cardNumber.slice(0, 4) === '6011' || cardNumber.slice(0,2) === '65')){
    return 'Discover';
  }

 //Maestro 
  var maestroNumberLength = [12, 13, 14, 15, 16, 17, 18, 19];
  var maestroPrefix = ['5018', '5020', '5038', '6304'];
  if (maestroNumberLength.includes(cardNumber.length) && maestroPrefix.includes(cardNumber.slice(0, 4))) {
   return 'Maestro';
  }

//China UnionPay
var cUnionPayCardNumLength = [16, 17, 18, 19];
var cUnionPayPrefix = []; 
  (function(prefix){
    for (var p = 622126; p <= 622925; p++){
      cUnionPayPrefix.push(String(p));
    }
  }()
  );
cUnionPrefix = cUnionPayPrefix.concat(['624', '625', '626', '6282','6283','6284','6285', '6286', '6287', '6288']);

if (cUnionPayCardNumLength.includes(cardNumber.length) && 
  cUnionPayPrefix.includes(cardNumber.slice(0, 6))){
    return "China UnionPay";
}

if (cUnionPayCardNumLength.includes(cardNumber.length) && 
  cUnionPayPrefix.includes(cardNumber.slice(0, 3))){
    return "China UnionPay";
}

if (cUnionPayCardNumLength.includes(cardNumber.length) && 
  cUnionPayPrefix.includes(cardNumber.slice(0, 4))){
    return "China UnionPay";
}

}