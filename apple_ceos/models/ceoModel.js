const db = require('./conn');

class executiveList {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static async getAll() {
        // db.any('SELECT * FROM ceos;').then(response => {
        //     console.log('response is: ', response);
        // });

        try {
            const response = await db.any(`SELECT * FROM ceos;`);
            //console.log('response is: ', response);
            //console.log('hello world!!!!!');
            return response;

        } catch(error) {
            return error.message
        }
    };
}



module.exports = executiveList;