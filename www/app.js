function insertDB(tx){
                alert("Inserting Data");
                //var json;
                var output = $('#data').text('Refreshing documentation...');
                jQuery(document).ready(function(){
                var url = 'http://portanaturasi.com/wp-admin/admin-ajax.php';
                var data = {
                    'action':'getProductCategories',
                    'somethingimportant':'whatissoimportant',
                    'format':'json' 
                };
            
                jQuery.ajax({
                   url: url,
                    data: data,
                    type:'GET',
                    dataType:'json',
                    }).done(function (json){
                      output.empty();
                      jQuery.each(json, function(i,item){ 
                alert(json.length);
                
        }); 
       // jQuery('#data').append(tr_html+'</tr >');
      
                    });
                });
                //for(var i=0; i<jso){
                //tx.executeSql('INSERT INTO product (product_id, product_name, category_id, category_name ,primary_category) VALUES(' + item.product_id + ', "' + item.product_name + '", "' + item.category_id + '", "' + item.category_name + '", "' + item.primary_category+'")');
            }
                  //  alert("Data Insert");           
//function checkdata(){
//    
////    document.addEventListener("deviceready",onDeviceReady,true);
////            var db;
////            function onDeviceReady(){
////                db=window.openDatabase("portanatura","1.0","Product",2*1024*1024);
////                db.transaction(createDB,errorCB,successCB);                                
////            }
//jQuery(document).ready(function(){
//    var db;
//    db=window.openDatabase("portanatura","1.0","product",2*1024*1024);
//   // db=window.openDatabase("portanatura","1.0","Product",2*1024*1024);
//var data = {
//                    'action':'getProductCategories',
//                    'somethingimportant':'whatissoimportant',
//                    'format':'json'            
//                };
//                jQuery.ajax({
//                url: 'http://portanaturasi.com/wp-admin/admin-ajax.php',
//                data: data,
//                type: 'GET',
//                dataType: 'json',
//                success: function(data){
//                    console.log(data);
//
//                    var number_of_post = data.length;
//                        alert(number_of_post);
//                    
//                                        //var pimage = "my image";
//                                        //alert(ptitle +","+ pdate +","+ pccount+","+ pcategories +","+ pimage);
//                                        db.transaction(function(transaction) {
//                                            for(var i=0; i < number_of_post; i++){
//
//                                        var ptitle = data[i].title;
//                                        var pdate = data[i].date;
//                                        var pccount = data[i].comment_count;
//                                        var pcontent = data[i].content;
//                                        var pcategories = data[i].categories;
//                                            transaction.executeSql('INSERT INTO product(product_id,product_name,category_id,category_name,primary_category) VALUES (?,?,?,?,?)',[ptitle,pdate,pccount,pcontent,pcategories],nullHandler,errorHandler);
//                                       
//                                            } 
//                                             alert("data inserted")
//                    });
//
//                }
//            });
//        });
//    }