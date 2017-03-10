var ajaxForm = new ajaxProxy("/api/employees")                              

document.addEventListener("DOMContentLoaded", function(event) {
    ajaxForm.PopulateTable (jsonToTable, handleError);  
});      

function handleError (data) {
    $("#ajax-error-box").modal('show');
    $("#ajax-error").text("Errorcode:" + data.status + ", Message:" + data.statusText);  
    console.log(data);                           
}

function jsonToTable (data) {
    
    // Clear table
    $('#employeeTable tr').slice(1).remove();

    //if no tbody just select your table 
    var tbody = $('#employeeTable').children('tbody');                            
    var table = tbody.length ? tbody : $('#employeeTable');

    var tableString = "";

    for(var i in data) {
        var employee = data[i];
        
        tableString += "<tr><td>" + employee.EmployeeID 
                    + "</td><td>" + employee.Title  
                    + "</td><td>" + employee.TitleOfCourtesy + " " +  employee.FirstName + " " +  employee.LastName  
                    + "</td><td>" + employee.Address + " " +  employee.City + " " +  employee.PostalCode + " " +  employee.Region                                  
                    + "</td></tr>";                            
    }

    table.append(tableString);
}    


// Form event handlers
$('#refresh').click(function(){
    $("#ajax-error-box").hide();
    ajaxForm.PopulateTable (jsonToTable, handleError);                          
});  