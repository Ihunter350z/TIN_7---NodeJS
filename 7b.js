const fs = require('fs');

let dir = process.argv[2];


fs.watch(dir, (eventType, filename) => {
    console.log(`event type is: ${eventType}`);
    if (filename) {
      fs.readFile(dir+'\\'+filename, (err, data) =>{
        if(err){
          throw error
        }
        console.log(data.toString());
      });
      console.log(`filename provided: ${filename}`);
      
    } else {
      console.log('filename not provided');
    }
  });