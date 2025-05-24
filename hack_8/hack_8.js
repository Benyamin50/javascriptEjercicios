/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 1; i <= 3; i++) {
    let item = arr[i];
    
    if (i <= 2) {
        item = item.replace('a', '@');
    }
    
    if (i === 3) {
        item = item.toUpperCase();
    }
    
    result.push(item);
}
//export result
module.exports = result;