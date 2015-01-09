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
        function myFunction(x) {
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
        
        
