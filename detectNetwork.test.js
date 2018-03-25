/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   // This test doesn't really test anything at all! It will pass no matter what.
  //   var even = function(num){
  //     return num/2 === 0;
  //   }
  //   return even(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
  }
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') !== 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') !== 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') !== 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011039479387502').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011039479387502048').should.equal('Discover');
  });

var assert = function(isTrue) {
  if(isTrue){
    throw new Error('Test failed');
  }
}

  for (var prefix = 644; prefix <= 649; prefix++) {

    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(String(prefix).concat('1039479387502')).should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(String(prefix).concat('1039479387502048')).should.equal('Discover');
      });
    })(prefix)
  }

  it('has a prefix of 65 and length of 16', function(){
    detectNetwork('6511039479387502').should.equal('Discover');
  });
  it('has a prefix of 65 and length of 19', function(){
    detectNetwork('6511039479387502048').should.equal('Discover');
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  
  
    var prefix = ['5018', '5020', '5038', '6304'];

    for (var i = 0; i < prefix.length; i++){

      var cardNum = prefix[i].concat('1234567');

      for (var cnLength = 12; cnLength<= 19; cnLength++) {
        cardNum = cardNum.concat('1');
        (function(cardNum) {
        it('has a prefix of ' + prefix[i] + ' and a length of ' + cnLength, function(){
        detectNetwork(cardNum).should.equal('Maestro');
        });
        })
       (cardNum)
  }}

});

describe('China UnionPay', function(){
  var should =chai.should();

  //testing from 622126 to 622925
  var cUnionPayPrefix = []; 
    (function(prefix){
      for (var p = 622126; p <= 622925; p++){
        cUnionPayPrefix.push(String(p));
      }
    }()
   );

for (var i = 0; i < cUnionPayPrefix.length; i++){

  var cardNum = cUnionPayPrefix[i].concat('123456789');

  for (var cnLength = 16; cnLength<= 19; cnLength++) {
    cardNum = cardNum.concat('1');
    (function(cardNum) {
    it('has a prefix of ' + cUnionPayPrefix[i] + ' and a length of ' + cnLength, function(){
    detectNetwork(cardNum).should.equal('China UnionPay');
    });
    })
   (cardNum)
}}

//testing prefix of ['624', '625', '626']

var cUnionPayPrefixthree = ['624', '625', '626'];

for (var i = 0; i < cUnionPayPrefixthree.length; i++){
  var should =chai.should();

  var cardNum = cUnionPayPrefixthree[i].concat('123456789000');

  for (var cnLength = 16; cnLength<= 19; cnLength++) {
    cardNum = cardNum.concat('1');
    (function(cardNum) {
    it('has a prefix of ' + cUnionPayPrefixthree[i] + ' and a length of ' + cnLength, function(){
    detectNetwork(cardNum).should.equal('China UnionPay');
    });
    })
   (cardNum)
}}

//testing prefix of ['6282','6283','6284','6285', '6286', '6287', '6288']

var cUnionPayPrefix4 = []; 
    (function(prefix){
      for (var p = 6282; p <= 6288; p++){
        cUnionPayPrefix4.push(String(p));
      }
    }()
   );

for (var i = 0; i < cUnionPayPrefix4.length; i++){

  var cardNum = cUnionPayPrefix4[i].concat('12345678900');

  for (var cnLength = 16; cnLength<= 19; cnLength++) {
    cardNum = cardNum.concat('1');
    (function(cardNum) {
    it('has a prefix of ' + cUnionPayPrefix4[i] + ' and a length of ' + cnLength, function(){
    detectNetwork(cardNum).should.equal('China UnionPay');
    });
    })
   (cardNum)
}}
});


describe('Switch', function(){
  var should = chai.should();
  var prefix4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var sLength = [16, 18, 19];

  //Testing prefix with 4 digits
  for (var i = 0; i < prefix4.length; i++){
  
    for (var l = 0; l < sLength.length ; l++) {
      var cardNum = prefix4[i];
      cardNum = cardNum.concat('0'.repeat(sLength[l]-4));
      (function(cardNum) {
      it('has a prefix of ' + prefix4[i] + ' and a length of ' + sLength[l] +' ' + cardNum + ' ' + detectNetwork(cardNum) + ' ' + cardNum.length, function(){
      detectNetwork(cardNum).should.equal('Switch');
      });
      })
     (cardNum)
  }}

  var prefix6 = ['564182', '633110'];

  //Testing prefix with 6 digits
  for (var i = 0; i < prefix6.length; i++){
  
    for (var l = 0; l < sLength.length ; l++) {
      var cardNum = prefix6[i];
      cardNum = cardNum.concat('0'.repeat(sLength[l]-6));
      (function(cardNum) {
      it('has a prefix of ' + prefix6[i] + ' and a length of ' + sLength[l] +' ' + cardNum + ' ' + detectNetwork(cardNum) + ' ' + cardNum.length, function(){
      detectNetwork(cardNum).should.equal('Switch');
      });
      })
     (cardNum)
  }}

})
