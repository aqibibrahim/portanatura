/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function complete_info(){
    
    var db = window.openDatabase("portanatura", "1.0", "product", false);
    db.transaction(function(tx){
        $.getScript("getresult.js",function (){
       alert("loading "); 
    });
            tx.executeSql('SELECT DISTINCT category_name FROM product_aqi',[],querrysuccessCB,errorCB);
        });
        function querrysuccessCB(tx,results){
                  var total=results.row.length;
                  alert(total);
                  
              }
              function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
        alert("error"+err.message);
    }
}