

function drawPatient() {
	
}
 
var patients = [];
function drawPatients(x) {
	try {
		var output = "";
		$("#fhirapp").html("");
		var table = $("<table>");
		table.append($("<tr><th>First</th><th>Last</th><th>Phone</th></tr>"));
		for (var p in x) {
			table.append($("<tr><td>"
				+x[p].firstname+"</td><td>"
				+x[p].lastname+"</td><td>"
				+x[p].phone+"</td></tr>"));
		}
		$("#fhirapp").append(table);
	} catch(er) {
		alert("issue with html");
	}	
}
function runSearchName(sn) {
	$("#fhirapp").html("");
	var img = $("<img>").attr("src", "img/loading.gif");
	$("#fhirapp").append( img );
	$.get("https://pyfhir.herokuapp.com/getdata/"+sn, function(x) {
		alert("test");
		patients = x;
		alert( JSON.stringify(x) );
		if (x.length > 0) {
			drawPatients(x);
		} else {
			$("#fhirapp").html("No matches found. :(");
		}
	});
}




var app = {
    // Application Constructor
    initialize: function() {
//		alert('initialize()!');
//		$("#app").html("testtttt....");
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('ready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
		switch(id) {
			case "ready":
				$("#searchbutton").on("click", function() {
					runSearchName( $("#searchname").val() );
				});
				initSpeechReco();
				break;
			default:
				break;
		}
    }
};

app.initialize();