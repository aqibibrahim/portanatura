/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


        function getSqlResultSet() {
            var db;
    if (!db) {
        db = window.openDatabase("portanatura", "1.0", "Product", 2*1024*1024);
    }
    db.transaction(queryDB, errorCB); 
} 

function queryDB(tx) {
    tx.executeSql('SELECT * FROM product', [], querySuccess, errorCB);
}
function errorCB(err){
                alert("Error processing sql"+err.code);
            }
            function querySuccess(){
                alert("YEAH!!!!");
                //insertDB();
            }
            