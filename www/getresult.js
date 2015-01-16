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
        $('#MyFriendsList').empty();
        var len = result.rows.length;
        alert(len);
             var dataset= result.rows;
             for (var i = 0; i < len; i++)
         {  
             item = dataset.item(i);
           $("#MyFriendsList").append( "<li onclick="muFunction(this)"data-theme='c' data-name='"+item['category_name']+"'><h3>"+item['category_name']+"</h3></li>" );
           $('#MyFriendsList').listview();
          } 
//        $.each(result.rows,function(index){
//            var row = result.rows.item(index);
//            alert(row);
//            $('#MyFriendsList').append('<li onclick="myFunction(this)"><h3 class="ui-li-heading">'+row['category_name']+' </h3></li>');});
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
    }
    }
    function myFunction() {
//            $('#data tr').each(function() {
//    var customerId = $(this).find('td').html(); 
//    alert(customerId);
// });

            $('#MyFriendsList').children('li').on('click', function () {
   alert('Selected Name=' + $(this).attr('data-name'));
});
    

        }