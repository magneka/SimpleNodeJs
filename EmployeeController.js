module.exports = function(app, db, jsonParser){
    
    var fields = ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", 
                  "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", 
                  "Country", "HomePhone", "Extension"];
  
    console.log("Registering endpoint: /api/employees");
    app.get('/api/employees', function(req, res){ 
        console.log("SELECT " + fields.join(", ") + " FROM employees");
        db.all("SELECT " + fields.join(", ") + " FROM employees", function(err, rows) {
            res.json(rows); 
        });                       
    });
}