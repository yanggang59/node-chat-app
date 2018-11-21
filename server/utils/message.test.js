const expect = require('expect');

var {generateMessage} = require('./message');

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
