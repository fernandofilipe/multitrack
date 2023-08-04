const fs = require('fs');

class CsvServices {    
    constructor() {}
    
    save(filePath, fileName, parsedItem) {
        fs.writeFileSync(`${filePath}${fileName}.csv`,parsedItem, { flag: 'a' });
    }
    
    clear (filePath, fileName) {
        fs.writeFileSync(`${filePath}${fileName}.csv`, '', { flag: 'w' });
    }    
}

module.exports = new CsvServices();