const fs = require('fs');

console.log('** Start reading a file...');
// Read file asynchronously
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
console.log('** End of the file');

//console.log('** Start reading a asynchronously file...')
// Read file asynchronously
//fs.readFile('data.txt', 'utf8', (err, data) => {
//    if (err){
//       console.error(err);
//        return;
//    }
//    console.log(data);
//});
//console.log('** End of the asynchrompusly file');
 
function readFileAsync(){
    console.log('** Start reading a asynchronously file...');
    // Read file asynchrounously
    fs.readFile('data.txt', 'utf8', (err, data) => {
        console.log(data);
    });
    console.log('** End of the asynchronously file');
}

// readFileAsync();

console.log('** Start writing a file...');
// Write file asynchronoulsy
const dataToWrite = 'Hello, Node.js';
fs.writeFileAsync('output.txt', dataToWrite, 'utf8');
console.log('** End of the write file');

function writeFileAsync(){
    console.log('** Start writing a asynchronously file...');
    // Write file asynchronously
    fs.writeFile('output.txt', dataToWrite, 'utf8', (err) => { 
        if (err){
            console.error(err);
            return;
        }
        console.log('Write aperation complete.');
    });
    console.log('** Enf of the asynchrounously write file')
}

// writeFileAsync();

// Delete file 
//fs.unlink('output.txt', (err) => {
//    if (err){
//        console.error(err);
//        return;
//    }
//    console.log('File deleted successfully');
//});

// Rename file and move to another directory 
fs.rename('output.txt', './data/new_output.txt', (err) => {
    if (err){
        console.error(err);
        return;
    }
    console.log('File renamed successfully');
});


