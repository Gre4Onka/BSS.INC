

  	var CsterlyadRes = document.getElementById("sterlyad");
  	var ClososRes = document.getElementById("Closos");
  	var CosetrRes = document.getElementById("Cosetr");
  	var CblackARes = document.getElementById("CblackA");
  	var CskatRes = document.getElementById("Cskat");
  	var CtunecRes = document.getElementById("Ctunec");
  	var CmalmaRes = document.getElementById("Cmalma");
  	var CfuguRes = document.getElementById("Cfugu");

function selectPrice($value){
	if ($value === "1") {
  	document.getElementById("sterlyad").innerHTML = 17 * document.getElementById("Csterlyad").value;
  	document.getElementById("losos").innerHTML = 24 * document.getElementById("Closos").value;
  	document.getElementById("osetr").innerHTML = 316 * document.getElementById("Cosetr").value;;
  	document.getElementById("blackA").innerHTML = 231 * document.getElementById("CblackA").value;;
  	document.getElementById("skat").innerHTML = 243 * document.getElementById("Cskat").value;;
  	document.getElementById("tunec").innerHTML = 735 * document.getElementById("Ctunec").value;;
  	document.getElementById("malma").innerHTML = 1103 * document.getElementById("Cmalma").value;;
  	document.getElementById("fugu").innerHTML = 2500 * document.getElementById("Cfugu").value;;
  }
  if ($value === "2") {
  	//ШО ТО ТАМ
  }
   if ($value === "3") {
  	//ШО ТО ТАМ
  }
   if ($value === "4") {
  	//ШО ТО ТАМ
  }
  if ($value === "5") {
  	document.getElementById("sterlyad").innerHTML = 47 * document.getElementById("Csterlyad").value + '$';
  	document.getElementById("losos").innerHTML = 64 * document.getElementById("Closos").value + '$';
  	document.getElementById("osetr").innerHTML = 116 * document.getElementById("Cosetr").value + '$';
  	document.getElementById("blackA").innerHTML = 231 * document.getElementById("CblackA").value + '$';
  	document.getElementById("skat").innerHTML = 263 * document.getElementById("Cskat").value + '$';
  	document.getElementById("tunec").innerHTML = 735 * document.getElementById("Ctunec").value + '$';
  	document.getElementById("malma").innerHTML = 1103 * document.getElementById("Cmalma").value + '$';
  	document.getElementById("fugu").innerHTML = 2500 * document.getElementById("Cfugu").value + '$';

  }

}