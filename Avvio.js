$(document).ready(function () {
	var g = new Gestore();
	var s = $("#ris").val();
	//CODICE TASTIERINO NUMERICO
	/*$(document).keydown(function (ev) {
	 switch (ev.which) {
	 case(96):
	 $("#0").click();
	 break;
	 case(97):
	 $("#1").click();
	 break;
	 case(98):
	 $("#2").click();
	 break;
	 case(99):
	 $("#3").click();
	 break;
	 case(100):
	 $("#4").click();
	 break;
	 case(101):
	 $("#5").click();
	 break;
	 case(102):
	 $("#6").click();
	 break;
	 case(103):
	 $("#7").click();
	 break;
	 case(104):
	 $("#8").click();
	 break;
	 case(105):
	 $("#9").click();
	 break;
	 case(107):
	 $("#add").click();
	 break;
	 case(109):
	 $("#sottr").click();
	 break;
	 case(106):
	 $("#molt").click();
	 break;
	 case(111):
	 $("#div").click();
	 break;
	 case(8):
	 $("#ce").click();
	 break;
	 case(46):
	 $("#cancella").click();
	 break;
	 case(13):
	 $("#ug").click();
	 break;
	 case(110):
	 $("#punto").click();
	 break;
	 default:
	 }
	 });*/
	$("#add").click(function () {
			$("#ris").val($("#ris").val() + $("#add").val());
	});
	$("#sottr").click(function () {
			$("#ris").val($("#ris").val() + $("#sottr").val());
	});
	$("#molt").click(function () {
			$("#ris").val($("#ris").val() + $("#molt").val());
	});
	$("#div").click(function () {
			$("#ris").val($("#ris").val() + $("#div").val());
	});
	$("#punto").click(function () {
			$("#ris").val($("#ris").val() + ".");
	});
	$("#0").click(function () {
		if ($("#ris").val().length == 0 || $("#ris").val().length > 1) {
			var op = parseInt($("#0").val());
			$("#ris").val($("#ris").val() + op);
		}
	});
	$("#1").click(function () {
		var op = parseInt($("#1").val());
		$("#ris").val($("#ris").val() + op);
	});
	$("#2").click(function () {
		var op = parseInt($("#2").val());
		$("#ris").val($("#ris").val() + op);
	});
	$("#3").click(function () {
		var op = parseInt($("#3").val());
		$("#ris").val($("#ris").val() + op);
	});
	$("#4").click(function () {
		var op = parseInt($("#4").val());
		$("#ris").val($("#ris").val() + op);
	});
	$("#5").click(function () {
		var op = parseInt($("#5").val());
		$("#ris").val($("#ris").val() + op);
	});
	$("#6").click(function () {
		var op = parseInt($("#6").val());
		$("#ris").val($("#ris").val() + op);
	});
	$("#7").click(function () {
		var op = parseInt($("#7").val());
		$("#ris").val($("#ris").val() + op);
	});
	$("#8").click(function () {
		var op = parseInt($("#8").val());
		$("#ris").val($("#ris").val() + op);
	});
	$("#9").click(function () {
		var op = parseInt($("#9").val());
		$("#ris").val($("#ris").val() + op);
	});
	$("#ce").click(function () {
		$("#ris").val($("#ris").val().substring(0, $("#ris").val().length - 1));
	});
	$("#cancella").click(function () {
		$("#ris").val("");
	});
	$("#ug").click(function () {

		// CODICE CALCOLI NON IN CASCATA
		/*
		 var op2 = parseFloat($("#ris").val());
		 if (a.operator == "+") {
		 $("#ris").val(a.operando1 + op2);
		 } else if (a.operator == "-") {
		 $("#ris").val(a.operando1 - op2);
		 } else if (a.operator == "*") {
		 $("#ris").val(a.operando1 * op2);
		 } else if (a.operator == "/") {
		 $("#ris").val(a.operando1 / op2);
		 } else {
		 alert("nessuna operazione eseguita");
		 }
		 a.operando1 = null;
		 a.operator = null;
		 */
		// CODICE CALCOLI IN CASCATA E CON PRIORITA'
		var l = new Array();
		var pilaopt = new Array();
		var pilaopd = new Array();

		var stringa = $("#ris").val();
		var i;
		for (i = 0; i < stringa.length; ) {
			if (stringa[i] != "+" && stringa[i] != "-" && stringa[i] != "/" && stringa[i] != "*") {
				var s = "";
				for (; i < stringa.length && stringa[i] != "+" && stringa[i] != "-" && stringa[i] != "/" && stringa[i] != "*"; i++) {
					s += stringa[i];
				}
				l.push(parseFloat(s));
			} else {
				switch (stringa[i]) {
					case "+":
						l.push(new Somma());
						break;
					case "-":
						l.push(new Differenza());
						break;
					case "*":
						l.push(new Prodotto());
						break;
					case "/":
						l.push(new Divisione());
						break;
				}
				i++;
			}
		}
		for (var i = 0; i < l.length; ) {
			if (l[i].toString() != "+" && l[i].toString() != "-" && l[i].toString() != "/" && l[i].toString() != "*") {
				pilaopd.push(l[i]);
				l.shift();
			} else {
				if (pilaopt.length != 0 && l[i].getPriorità() <= (g.top(pilaopt)).getPriorità()) {
					pilaopd.push((g.estrai(pilaopt)).valuta(g.estrai(pilaopd), g.estrai(pilaopd)));
				}
				pilaopt.push(l[i]);
				l.shift();
			}
		}
		while (l.length == 0 && pilaopt.length != 0) {
			pilaopd.push((g.estrai(pilaopt)).valuta(g.estrai(pilaopd), g.estrai(pilaopd)));
		}
		$("#ris").val(g.top(pilaopd));
	});
});



