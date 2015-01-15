function checkdata(){
    
    var db;
    db=window.openDatabase("portanatura","1.0","product",2*1024*1024);
    db.transaction(createDB,errorCB,successCB); 
    function createDB(tx){
		//tx.executeSql('DROP TABLE IF EXISTS product_aqi');
		tx.executeSql('CREATE TABLE IF NOT EXISTS product_aqi(product_id INTEGER,product_name TEXT,category_id INTEGER,category_name TEXT,  primary_category TEXT)');
		
		alert("Create database");
	}
	function errorCB(err){
		alert("Error processing sql"+err.code);
	}
	function successCB(){
		alert("YEAH!!!!");	
	}            
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

			var number_of_post = data.length;
			number_of_post=3;                        
				for(var i=0; i < number_of_post; i++){
					
					ContentValues cv = new ContentValues();
					cv.put("product_id", data[i][0]);
					cv.put("product_name", data[i][1]);
					cv.put("category_id", data[i][2]);
					cv.put("category_name", data[i][3]);
					cv.put("primary_category", null);                                            
				   
				   db.insert("product_aqi",null,cv);
				   
				}
				alert("data completely inserted");

			

		}
	});
        
}