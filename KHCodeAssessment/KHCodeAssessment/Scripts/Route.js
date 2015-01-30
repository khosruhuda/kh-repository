var uri = 'api/routes';
function getSearchResult() {
    var selectedSearch = $("#searchTypeID").val();
    if (selectedSearch == 1) {
        getRouteDistance();
    }
    else if (selectedSearch == 2) {
        getAvailableRoutes();
    }
    else {
        getShortestRoute();
    }
}

function getRouteDistance() {
    var route = $('#routeID').val();
    var serviceUrl = uri + '/getroutedistance/' + route;
    $.getJSON(serviceUrl)
        .done(function (data) {
            if (data.IsSuccess == true) {
                var displayText = " No Such Route Exist";
                if (data.Data != null) {
                    displayText = data.Data;
                }
                $('#result').empty().append("Distance or route " + route + ": " + displayText);
            }
            else {
                $('#result').empty().append(data.Message);
            }
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#result').empty().append('Error: ' + err);
        });
}

function getAvailableRoutes() {
    var origin = $("#originID").val();
    var destination = $("#destinationID").val();
    var maxroute = $("#maxRouteID").val();
    var serviceUrl = uri + '/getavailableroutes/' + origin + "/" + destination + "/" + maxroute;
    $.getJSON(serviceUrl)
        .done(function (data) {
            displayResult(data);
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#result').empty().append('Error: ' + err);
        });
}

function getShortestRoute() {
    var paramObject = {
        IsSuccess: true,
        Message: 'test message',
        Data: 'test data'
    };

    var urlpath = uri + '/GetMyTestResult';
    $.ajax({
        url: urlpath,
        type: "POST",
        async: false,
        data: JSON.stringify(paramObject),
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (data) {
            var aaa = data;
        },
        error: function (data) {
            var bbbb = data;
        }
    });

    $('#result').empty().append("Is not implemented yet");
}

function GetRelatedTextBoxDesign(obj) {
    var inputHtml;
    if ($(obj).val() == 1) {
        inputHtml = "<input type='text' id='routeID' size='10' />";
    }
    else if ($(obj).val() == 2) {
        inputHtml = "<input type='text' id='originID' size='1' maxlength='1' /> - <input type='text' id='destinationID' size='1' maxlength='1' /> - <input type='text' id='maxRouteID' size='1' maxlength='1' />";
    }
    else {
        inputHtml = "<input type='text' id='originID' size='1' maxlength='1' /> - <input type='text' id='destinationID' size='1' maxlength='1' />";
    }
    $("#divUserInput").empty().append(inputHtml);
}

function displayResult(obj) {
    var formatedResult = "Available routes <br/>";
    if (obj.Data != null && obj.Data.length > 0) {
        for (var i = 0; i < obj.Data.length; i++) {
            formatedResult += obj.Data[i] + "<br/>";
        }
        $('#result').empty().append(formatedResult);
    }
    else {
        $('#result').empty().append("No route available");
    }
}

function uploadFile() {
    if ($("#getFile")[0].files.length > 0) {
        var file = $("#getFile")[0].files[0];
        if (file.type == "text/plain") {
            var reader = new FileReader();
            reader.onload = function (event) {
                var contents = event.target.result;
                if (contents.length != 0) {
                    var servicepath = uri + '/writeroutesinfile/' + contents;
                    $.getJSON(servicepath)
                       .done(function (data) {
                           $('#fileuploadmessageID').text(data.Data);
                       })
                       .fail(function (jqXHR, textStatus, err) {
                           $('#fileuploadmessageID').text('Error: ' + err);
                       });
                }
                else {
                    alert("File do not contain any text");
                }

            };

            reader.onerror = function (event) {
                alert("failed");
            };

            reader.readAsText(file);
        }
        else {
            alert("Please choose only text file");
        }
    }
    else {
        alert("Choose a file first");
    }

}