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
        $.each(result.rows,function(index){
            var row = result.rows.item(index);
            $('#MyFriendsList').append('<li><a href=" #"><h3 class="ui-li-heading">'+row['category_name']+'< /h3></a></li>');});
  
        $('#MyFriendsList').listview();
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