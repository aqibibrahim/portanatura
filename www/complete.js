/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function complete_info(){
    
    var db = window.openDatabase("portanatura", "1.0", "product", false);
        db.transaction(function(tx){
//            $.getScript("complete.js",function (){
//                 //  complete_info();
//                  alert("loaded another script");
//              });
            tx.executeSql('SELECT product_id,product_name FROM product_aqi WHERE category_name= '+arr+'', [], querySuccess, errorCB);
        });
        function querySuccess(tx, result) {
        var len = result.rows.length;
        alert(len);
           var dataset= result.rows;
           $("#MyFriendsList").empty();

          for (var i = 0; i < len; i++)
         {  
             item = dataset.item(i);
           $("#MyFriendsList").append( "<li data-theme='c' data-name='"+item['category_id']+"'><h3>"+item['product_name']+"</h3><h3>"+item['product_id']+"</h3></li>" );
           $('#MyFriendsList').listview();
          } 
          $('#MyFriendsList').children('li').on('click', function (tx) {
              var arr=$(this).attr('data-name');
              alert('Selected Name=' + arr);
//              $.getScript("complete.js",function (){
//                  complete_info();
//                  alert("loaded another script");
//              });
//              tx.executeSql('SELECT product_id,product_name FROM product_aqi WHERE category_name='+arr+'',[],querrysuccessCB,errorCB);
//              });
//              function querrysuccessCB(tx,results){
//                  var total=results.row.length;
//                  alert(total);
//                  
//              }
////            $('#MyFriendsList').empty();
////        $.each(result.rows,function(index){
////            var row = result.rows.item(index);
////            //alert(row);
////            $('#MyFriendsList').append('<li onclick="myFunction(this)">'+row['category_name']+'</li>');});
////  
////        $('#MyFriendsList').listview();
//    }
////            var len = results.rows.length;
////       // console.log("DEMO table: " + len + " rows found.");
////        alert(len);
////                                
////    }
//
 });
    
   
    }
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
        alert("error"+err.message);
    }
    }