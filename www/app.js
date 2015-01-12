function insertDB(tx){
                alert("Inserting Data");
                var output = $('#data').text('Refreshing documentation...');
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
                      $.each(json, function(i,item){ 
                alert(json);
                 tx.executeSql('INSERT INTO product (product_id, product_name, category_id, category_name ,primary_category) VALUES(' + item.product_id + ', "' + item.product_name + '", "' + item.category_id + '", "' + item.category_name + '", "' + item.primary_category+'")');
        }); 
       // jQuery('#data').append(tr_html+'</tr >');
       alert("Data Insert");
                    });
                }