/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


     function getresult(){
         jQuery(document).ready(function(){
             
             var db;
    db=window.openDatabase("portanatura","1.0","product",2*1024*1024);
    db.transaction(querydb,errorCB,successCB); 
    function querydb(tx){
               // tx.executeSql('DROP TABLE IF EXISTS product');
        var sql="SELECT COUNT(*)FROM product";      
        tx.executeSql(sql);
        //alert(sql);
                
                
            }
            function errorCB(err){
                alert("Error processing sql"+err.code);
            }
            function successCB(tx,result){
                
                var sql="SELECT COUNT(*)FROM product";      
                tx.executeSql(sql);
        var len=result.rows.length;
                alert(len);
                console.log("Create  database" + len);
               // alert("YEAH!!!!");
                
                //insertDB();
            }
         });
     }