define(["addition","multiplication"], function(addition, multiplication){ 
	alert("sandy");
    return {
	    calculate :function(){
		    alert("hello testApp");
		    var c;
		    var a=5;
		    var b=10;
		    return addition.add(a,b)+ multiplication.mul(a,b);
		 }
	} 
});