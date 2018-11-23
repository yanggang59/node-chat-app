const expect = require('expect');
 //import isRealString
 const {isRealString} = require('./validation');

 //isRealString
  //should reject non-string values
  //should reject string with only sapces
  //should allow string with non-string charactes

  describe('isRealString',() => {
    it('should reject non-string values',() =>{
      var res = isRealString(98);
      expect(res).toBe(false);
    });

    it('should reject string with only sapces',()=>{
      var res = isRealString('  ');
      expect(res).toBe(false);
    });

    it('should reject string with only sapces',()=>{
      var res = isRealString('   abc   ');
      expect(res).toBe(true);
    });
  });
