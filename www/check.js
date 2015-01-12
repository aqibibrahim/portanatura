/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function checkdata(){
jQuery(document).ready(function(){
var data = {
                    'action':'getProductCategories',
                    'somethingimportant':'whatissoimportant',
                    'format':'json'            
                };
                jQuery.ajax({
                url: 'http://portanaturasi.com/wp-admin/admin-ajax.php',
                data: data,
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    console.log(data);

                    var number_of_post = Object.keys(data.posts).length;
                        alert(number_of_post);
                    
                                        //var pimage = "my image";
                                        //alert(ptitle +","+ pdate +","+ pccount+","+ pcategories +","+ pimage);
//                                        db.transaction(function(transaction) {
//                                            for(var i=0; i < number_of_post; i++){
//
//                                        var ptitle = data.posts[i].title;
//                                        var pdate = data.posts[i].date;
//                                        var pccount = data.posts[i].comment_count;
//                                        var pcontent = data.posts[i].content;
//                                        var pcategories = data.posts[i].categories;
//                                            transaction.executeSql('INSERT INTO product(product_id,product_name,category_id,category_name,primary_category) VALUES (?,?,?,?,?)',[ptitle,pdate,pccount,"pcontent",pcategories,pimage],nullHandler,errorHandler);
//                                        } 
//                    });

                }
            });
        });
    }