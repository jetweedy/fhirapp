/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
function runTest() {
	try {
		$.get("https://pyfhir.herokuapp.com/getdata", function(x) {
			try {
				var output = "";
				$("#fhirapp").html("");
				var table = $("<table>");
				table.append($("<tr><th>First Name</th><th>Last Name</th><th>Phone Number</th></tr>"));
				for (var p in x) {
					table.append($("<tr><td>"+x[p].firstname+"</td><td>"+x[p].lastname+"</td><td>"+x[p].phone+"</td></tr>"));
				}
				$("#fhirapp").append(table);
			} catch(er) {
				alert("issue with html");
			}
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
				runTest();
				break;
			default:
				break;
		}
    }
};

app.initialize();