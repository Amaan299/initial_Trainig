
$(document).ready(function() {
    var t = $('#example').DataTable();
    
    $("#btn").click(function(){
        var a = $("input[name='text1'").val();
        var ipformat = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/; 
   ipformat = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/; 
     if(a.match(ipformat)) {
        $.get("http://api.ipstack.com/" + a + "?access_key=ae8d1fc5c6cba186830565c1a5c23d03&format=1",function(response){
                t.row.add( [
                response['ip'],
                response['country_name'],
                response['country_code'],
                "<button id='btnDel'  width='25px' value='Delete' onclick='deleteRow(this)'>Delete_Row</button>"
             ] ).draw( false );    
    });
            return true;
    }
else 
    {  
            alert("You have entered an invalid IP address!");       
    }
           
});

});
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("example").deleteRow(i);
    alert("Selected Row Will be Deleted")
  }
