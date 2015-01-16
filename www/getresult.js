/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//    function extractFromDB() {
//        var db = window.openDatabase("portanatura", "1.0", "product", false);
//        db.transaction(function(tx){
//            tx.executeSql('SELECT DISTINCT category_name FROM product_aqi', [], querySuccess, errorCB);
//        });
//        function querySuccess(tx, result) {
//        
//            $('#MyFriendsList').empty();
//        $.each(result.rows,function(index){
//            var row = result.rows.item(index);
//            alert(row);
//            $('#MyFriendsList').append('<li onclick="myFunction(this)"><h3 class="ui-li-heading">'+row['category_name']+' </h3></li>');});
//  
//        $('#MyFriendsList').listview();
//    }
////            var len = results.rows.length;
////       // console.log("DEMO table: " + len + " rows found.");
////        alert(len);
////                                
////    }
//
//    function errorCB(err) {
//        console.log("Error processing SQL: "+err.code);
//    }
//    }
//    function myFunction() {
////            $('#data tr').each(function() {
////    var customerId = $(this).find('td').html(); 
////    alert(customerId);
//// });
//
//            $("#MyFriendsList li").click(function(){
//                
//        var $tds = $(this).find('li'),
////            productId = $tds.eq(0).text(),
////            product = $tds.eq(1).text(),
////            category_id = $tds.eq(2).text();
//            category_name=$tds.eq(3).text();
//            //primary_category=$tds.eq(4).text();
//            alert(
//              'Category Name: ' + category_name
//              );
//      
//		});
//        // do 
//    
//
//        }
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
          $('#MyFriendsList').children('li').on('click', function () {
              var arr=$(this).attr('data-name');
   alert('Selected Name=' + arr);
});
//            $('#MyFriendsList').empty();
//        $.each(result.rows,function(index){
//            var row = result.rows.item(index);
//            //alert(row);
//            $('#MyFriendsList').append('<li onclick="myFunction(this)">'+row['category_name']+'</li>');});
//  
//        $('#MyFriendsList').listview();
    }
//            var len = results.rows.length;
//       // console.log("DEMO table: " + len + " rows found.");
//        alert(len);
//                                
//    }

    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
        alert("error"+err.message);
    }
    }