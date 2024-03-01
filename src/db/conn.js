const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    try{
        const DbConnect = await mongoose.connect('mongodb://127.0.0.1:27017/olympic');
        if(DbConnect){
            console.log("Connection successfull !!! : ");
        }
    }catch(err){
        console.log("Connection not successfull , something went wrong !!! : "+err);
    } 
}