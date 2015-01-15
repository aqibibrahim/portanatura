/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function queryDB(tx, callbackMethod) {
    tx.executeSql('SELECT * FROM product_aqi', [], callbackMethod, onError);
}