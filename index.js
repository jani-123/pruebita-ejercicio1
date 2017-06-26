var assert = require('assert');
function ejercicio1(arr,num)
{

	var res = arr.reduce(function(a,b){ return (a*b)});
	if(!isNaN(num))// sino es un numero
	{
        res = res*num;
	}
	return res;
}

describe('multiplicacion',function(){ 
    it('Prueba de 10 , [2,3]', function(){
         assert.equal(60, ejercicio1([2,3],10));
    });
    it('Prueba de "hola" , [7,7]', function(){
         assert.equal(49, ejercicio1([7,7],"hola"));
    });
    it('Prueba de nada , [2,"hola"]', function(){
         assert.equal(2, ejercicio1([2,"hola"]));
    });
});