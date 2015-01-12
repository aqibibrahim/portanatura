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
                alert("7");
                 tx.executeSql('INSERT INTO product (product_id, product_name, category_id, category_name ,primary_category) VALUES(' + item.id + ', "' + item.Accept-Language + '", "' + item.Cookie + '", "' + item.Host + '", "' + item.Cache-Control+'")');
        }); 
       // jQuery('#data').append(tr_html+'</tr >');
       alert("Data Insert");
                    });
                }