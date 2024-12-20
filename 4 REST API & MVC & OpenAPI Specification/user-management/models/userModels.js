const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'data', 'userData.json');

const getUserDetails = () => {
    fs.readFile(p,(err, fileContent) => {
        if (err) throw err;
        console.log(JSON.parse(fileContent));
    });
};

module.exports = class User {
    constructor(n, l) {
        this.name = n;
        this.language = l;
    }

    /*save() {
        getUserDetails()
    }*/

    static fetchAll() {
        getUserDetails();
    }
};