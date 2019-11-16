function initSpeechReco() {
	window.plugins.speechRecognition.isRecognitionAvailable(function(available){
		if(available){
			window.plugins.speechRecognition.requestPermission(function (){
				// Requested
			}, function (err){
				alert(JSON.stringify(err));
			});				
		} else {
			alert('speech unavailable :(');
		}
	}, function(err){
		alert(JSON.stringify(err));
	});			
	document.getElementById("testspeech").addEventListener("click", function() {
		window.plugins.speechRecognition.startListening(
			function(result){
//				alert(JSON.stringify(result));
				if (result.length > 0) {
					runSearchName(result[0]);
				} else {
					alert("Could not identify speech.");
				}
			}
			, function(err){
				alert("ERROR: " + JSON.stringify(err));
			}
			, {
				lang: "en-US",
				showPopup: true
			}
		);
	});
}