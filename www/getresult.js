/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    function extractFromDB() {
        var db = window.openDatabase("portanatura", "1.0", "product", false);
        db.transaction(function(tx){
            tx.executeSql('SELECT DISTINCT category_name FROM product_aqi', [], querySuccess, errorCB);
        });
        function querySuccess(tx, results) {
        var len = results.rows.length;
       // console.log("DEMO table: " + len + " rows found.");
        alert(len);
                                
    }

    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }
    }