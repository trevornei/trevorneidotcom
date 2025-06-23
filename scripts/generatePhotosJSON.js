import fs from 'fs';

// create the variable for the file path.
let path = 'public/assets/images/amsterdam25/photos';
// create a variable that reads the contents of the photos directory.
let files = fs.readdirSync(path)

let photos = files.map(file => {
    src: `${path}/${file}` 
});

// Write the files to the .json file.
fs.writeFileSync('./src/app/amsterdam25/photos.json', JSON.stringify(photos))
