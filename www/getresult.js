/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var arr;
function extractFromDB() {
    
        var db = window.openDatabase("portanatura", "1.0", "product", false);
        db.transaction(function(tx){
            tx.executeSql('SELECT DISTINCT category_name FROM product_aqi', [], querySuccess, errorCB);
        });
        function querySuccess(tx, result) {
        var len = result.rows.length;
        alert(len);
           var dataset= result.rows;
           $("#MyFriendsList").empty();

          for (var i = 0; i < len; i++)
         {  
             item = dataset.item(i);
           $("#MyFriendsList").append( "<li data-theme='c' data-name='"+item['category_name']+"'><h3>"+item['category_name']+"</h3></li>" );
           $('#MyFriendsList').listview();
          } 
          $('#MyFriendsList').children('li').on('click', function (tx) {
              arr=$(this).attr('data-name');
              alert('Selected Name=' + arr);
              $.getScript("complete.js",function (){
                  complete_info();
                  alert("loaded another script");
              });

 });
    
   
    }
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
        alert("error"+err.message);
    }
    }