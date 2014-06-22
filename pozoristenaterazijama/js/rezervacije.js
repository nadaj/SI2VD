String datum 	 = "";
String vreme 	 = "";
String predstava = "";
String sala 	 = "";

int ras = 0;
function klik(dat,vre,pred,sal){
	datum 		= dat;
	vreme 		= vre;
	predstava	= pred;
	sala 		= sal;
}

function popuni(){
	document.pageForm.odg1.value = datum;
	 document.pageForm.odg2.value = vreme;
	 document.pageForm.odg3.value = predstava;
	 document.pageForm.odg4.value = sala;

}

