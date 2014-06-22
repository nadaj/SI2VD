// JavaScript Document
var ras = 0;
function potvrdi() {
	var tacni = 0;
	
	if (document.pageForm.odg1.value == "" || document.pageForm.odg2.value == "" || document.pageForm.odg4.value == "" || document.pageForm.odg6.value == "") {
		bootstrap_alert.warning("Popunite sva polja!") ;
	}
	if (document.pageForm.odg1.value == "Beogradska komedija") tacni++;
	if (document.pageForm.odg2.value == "Savremeno pozorište" || document.pageForm.odg2.value == "Savremeno pozoriste") tacni++;
	if (document.pageForm.odg4.value == "Jubilej") tacni++;
	if (document.pageForm.odg6.value == "Ivan Bosiljcic" || document.pageForm.odg6.value == "Ivan Bosiljčić")		  		tacni++;
	

	if (document.pageForm.odg3[1].checked == true && document.pageForm.odg3[3].checked == true) tacni++;
	
	if (document.pageForm.odg5[2].checked == true) tacni++;
	
	if (document.pageForm.odg7[1].checked == true) tacni++;
	
	if (document.pageForm.odg8[0].checked == true) tacni++;
	
	if (document.pageForm.odg9[0].checked == true) tacni++;
	
	if (document.pageForm.odg10[3].checked == true) tacni++;
	
	bootstrap_alert.test("*** Čestitam! Imate " + tacni + " / 10 ***") ;
}

bootstrap_alert = function() {}

bootstrap_alert.warning = function(message) {
            $('#alert_placeholder').html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
        }
		
bootstrap_alert.test = function(message) {
            $('#alert_placeholder').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
        }
		
		
function resetuj() {
	 document.pageForm.odg1.value = "";
	 document.pageForm.odg2.value = "";
	 document.pageForm.odg4.value = "" ;
	 document.pageForm.odg6.value = "";
	 document.pageForm.odg3[0].checked = "true";
	 document.pageForm.odg3[1].checked = "false";
	 document.pageForm.odg3[2].checked = "false";
	 document.pageForm.odg3[3].checked = "false";
	 document.pageForm.odg5[0].checked = "true";
	 document.pageForm.odg5[1].checked = "false";
	 document.pageForm.odg5[2].checked = "false";
	 document.pageForm.odg5[3].checked = "false";
	 document.pageForm.odg7[0].checked = "true";
	 document.pageForm.odg7[1].checked = "false";
	 document.pageForm.odg7[2].checked = "false";
	 document.pageForm.odg7[3].checked = "false";
	 document.pageForm.odg8[0].checked = "true";
	 document.pageForm.odg8[1].checked = "false";
	 document.pageForm.odg8[2].checked = "false";
	 document.pageForm.odg8[3].checked = "false";
	 document.pageForm.odg9[0].checked = "true";
	 document.pageForm.odg9[1].checked = "false";
	 document.pageForm.odg10[0].checked = "true";
	 document.pageForm.odg10[1].checked = "false";
	 document.pageForm.odg10[2].checked = "false";
	 document.pageForm.odg10[3].checked = "false";
	  $('#alert_placeholder').html("");
}

function potvrdien() {
	var tacni = 0;
	
	if (document.pageForm.odg1.value == "" || document.pageForm.odg2.value == "" || document.pageForm.odg4.value == "" || document.pageForm.odg6.value == "") {
		bootstrap_alert.warning("Please fill in the blanks!") ;
	}
	if (document.pageForm.odg1.value == "Belgrade comedy") tacni++;
	if (document.pageForm.odg2.value == "Modern theatre" || document.pageForm.odg2.value == "Savremeno pozoriste") tacni++;
	if (document.pageForm.odg4.value == "Anniversary") tacni++;
	if (document.pageForm.odg6.value == "Ivan Bosiljcic" || document.pageForm.odg6.value == "Ivan Bosiljčić")		  		tacni++;
	

	if (document.pageForm.odg3[1].checked == true && document.pageForm.odg3[3].checked == true) tacni++;
	
	if (document.pageForm.odg5[2].checked == true) tacni++;
	
	if (document.pageForm.odg7[1].checked == true) tacni++;
	
	if (document.pageForm.odg8[0].checked == true) tacni++;
	
	if (document.pageForm.odg9[0].checked == true) tacni++;
	
	if (document.pageForm.odg10[3].checked == true) tacni++;
	
	bootstrap_alert.test("*** Congratulations! You have " + tacni + " / 10 ***") ;
}

