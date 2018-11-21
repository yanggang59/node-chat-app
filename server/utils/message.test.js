const expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',() =>{
  it('should generate correct message object',()=>{
    //store res in var
    //asset from match
    //assert text match
    //assert createdAt is number


    var from = 'Jen';
    var text = 'some message';
    var message = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });
});


describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
    var from ='Deb';
    var latitude = 15;
    var longitude = 11;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    var message = generateLocationMessage(from,latitude,longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});

  });
});
