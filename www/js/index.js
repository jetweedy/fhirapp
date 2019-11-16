

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
	try {
		$.get("https://pyfhir.herokuapp.com/getdata/"+sn, function(x) {
			patients = x;
			drawPatients(x);
		});
	} catch(er) {
		alert("issue with get");
	}
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
				break;
			default:
				break;
		}
    }
};

app.initialize();