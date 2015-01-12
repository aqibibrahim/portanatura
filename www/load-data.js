/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loaddata(){
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
                }).done(function(json){
                    jQuery(json).each(function(index,customer){
                        var tr_html = '<tr onclick="myFunction(this)">';
                                    
                        if(index==0){
                            jQuery(customer).each(function(index,column){
                                tr_html += '<th>' + column + '</th>';
                            });                            
                        }else{
                            jQuery(customer).each(function(index,column){
                                tr_html += '<td>' + column + '</td>';
                                });
                        }
                        
                        jQuery('#data').append(tr_html+'</tr >');
                       
                    })
                    

                });              
            });    
        }
//         function insertDB(employees, callback) {
//this.db.transaction(
//function(tx) {
//var l = employees.length;
//var sql =
//"INSERT OR REPLACE INTO employee (id, firstName, lastName, title, officePhone, deleted, lastModified) " +
//"VALUES (?, ?, ?, ?, ?, ?, ?)";
//log('Inserting or Updating in local database:');
//var e;
//for (var i = 0; i < l; i++) {
//e = employees[i];
//log(e.id + ' ' + e.firstName + ' ' + e.lastName + ' ' + e.title + ' ' + e.officePhone + ' ' + e.deleted + ' ' + e.lastModified);
//var params = [e.id, e.firstName, e.lastName, e.title, e.officePhone, e.deleted, e.lastModified];
//tx.executeSql(sql, params);
//}
//log('Synchronization complete (' + l + ' items synchronized)');
//},
//this.txErrorHandler,
//function(tx) {
//callback();
//}
//);
//},
//txErrorHandler: function(tx) {
//alert(tx.message);
//}
//};
        function myFunction() {
//            $('#data tr').each(function() {
//    var customerId = $(this).find('td').html(); 
//    alert(customerId);
// });

            $("#data tr").click(function(){
                
        var $tds = $(this).find('td'),
            productId = $tds.eq(0).text(),
            product = $tds.eq(1).text(),
            category_id = $tds.eq(2).text();
            category_name=$tds.eq(3).text();
            primary_category=$tds.eq(4).text();
            alert('Row :\nId: ' + productId
              + '\nProduct: ' + product
              + '\nCategory Id: ' + category_id
              + '\nCategory Name: ' + category_name
              + '\nPrimary Category: ' + primary_category);
      
		});
        // do 
    

        }
        
        
