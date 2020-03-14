var events=require('events');

var emitter=new events.EventEmitter();


function handle(){
  console.log('scream');
}



emitter.on('scream',handle);

emitter.emit('scream');