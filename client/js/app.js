
var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:4200/api/event', true);    

request.onload = function () {

    var data = JSON.parse(this.response);
    var tr;
    var i=0;

       
    
    for (i = 0; i < data.length; i++) {
        
        var x = data[i].in;
        var y = data[i].out;
        var z = data[i].license;

        var x = new Date(x);
        var y = new Date(y);
             
        var p = (data[i].in - data[i].out);
        
        
        var p = (p/3600000).toFixed(2);
        p= -p;

     if(p>1){
     var q = (p*2.99).toFixed(2);
     }
     else{
         var q = 0;
     }
        
   
        tr = $('<tr/>');
        
        tr.append("<td>" + z + "</td>");
        tr.append("<td>" + "$" + q + "</td>");
        tr.append("<td>" + p + "    Hours" + "</td>");
        tr.append("<td>" + x + "</td>");
        tr.append("<td>" + y + "</td>");

        
        $('table').append(tr);

    }
}
  
request.send();