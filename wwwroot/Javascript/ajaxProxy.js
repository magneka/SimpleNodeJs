function ajaxProxy (ajaxUrl) {
    var self = this;
    this.ajaxUrl = ajaxUrl;  

    // -------------------------------------------
    // Method for populating table from json object
    // -------------------------------------------
    self.PopulateTable = function (populateHandler, handleError) {
                                     
        toastr.info("Calling GETI in api: " + self.ajaxUrl);
 
        // Get employee from server
        var lAjaxString = self.ajaxUrl;
        jQuery.ajax({                
            url: lAjaxString,
            type: 'GET',
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        })
        .done(function (data) { 
            toastr["success"]("Number of records retrieved:" + data.length);
            populateHandler (data)
        })
        .fail(function (data) { 
            toastr["error"]("Error:" + JSON.stringify(data));
            handleError(data);
        });
    }
};