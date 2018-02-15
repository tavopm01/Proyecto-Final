var NameAsegurado
var NameEsposa
var DateAsegurado
var DateEsposa
var cantHijos
var EdadAsegurado
var EdadEsposa
var RecargoAsegurado
var RecargoEsposa
var cantHijos
var recargoHijos
var costoTotal

const costobase = 250;
const comision = 250 * 0.30;

var getData = function(){
    NameAsegurado = document.getElementById("nameA").value;
    DateAsegurado = document.getElementById("fechaA").value;
    NameEsposa = document.getElementById("nameE").value;
    DateEsposa = document.getElementById("fechaE").value;
    cantHijos = parseFloat(document.getElementById("nameH").value);
    EdadAsegurado = parseFloat(calcEdad(DateAsegurado));
    EdadEsposa = parseFloat(calcEdad(DateEsposa));
    alert(EdadEsposa);
    RecargoAsegurado = parseFloat(RecASeg(costobase,EdadAsegurado));
    RecargoEsposa = parseFloat(RecCon(costobase,EdadEsposa));
    cantHijos = parseFloat(document.getElementById("nameH").value);
    recargoHijos = (parseFloat(cantHijos) *(costobase*0.01));
    costoTotal = costobase + comision + recargoHijos + RecargoAsegurado + RecargoEsposa;

    document.getElementById('nombretxt').style.visibility='visible';
    document.getElementById('nombre').style.visibility='visible';
    document.getElementById("nombre").innerHTML = NameAsegurado;

    document.getElementById('fechantxt').style.visibility='visible';
    document.getElementById('fechan').style.visibility='visible';
    document.getElementById("fechan").innerHTML = DateAsegurado;

    document.getElementById('edadtxt').style.visibility='visible';
    document.getElementById('edad').style.visibility='visible';
    document.getElementById("edad").innerHTML = EdadAsegurado;

    document.getElementById('linea').style.visibility='visible';

    document.getElementById('nombrectxt').style.visibility='visible';
    document.getElementById('nombrec').style.visibility='visible';
    document.getElementById("nombrec").innerHTML = NameEsposa;

    document.getElementById('fechanctxt').style.visibility='visible';
    document.getElementById('fechanc').style.visibility='visible';
    document.getElementById("fechanc").innerHTML = DateEsposa;

    document.getElementById('edadctxt').style.visibility='visible';
    document.getElementById('edadc').style.visibility='visible';
    document.getElementById("edadc").innerHTML = EdadEsposa;

    document.getElementById('linea2').style.visibility='visible';

    document.getElementById('costoBasetxt').style.visibility='visible';
    document.getElementById('costoBase').style.visibility='visible';
    document.getElementById("costoBase").innerHTML = costobase;

    document.getElementById('comisiontxt').style.visibility='visible';
    document.getElementById('comision').style.visibility='visible';
    document.getElementById("comision").innerHTML = comision;

    document.getElementById('redadtxt').style.visibility='visible';
    document.getElementById('redad').style.visibility='visible';
    document.getElementById("redad").innerHTML = RecargoAsegurado;

    document.getElementById('eredadtxt').style.visibility='visible';
    document.getElementById('eredad').style.visibility='visible';
    document.getElementById("eredad").innerHTML = RecargoEsposa;

    document.getElementById('hijosstxt').style.visibility='visible';
    document.getElementById('hijoss').style.visibility='visible';
    document.getElementById("hijoss").innerHTML = recargoHijos;

    document.getElementById('linea3').style.visibility='visible';

    document.getElementById('muestratxt').style.visibility='visible';
    document.getElementById('muestra').style.visibility='visible';
    document.getElementById("muestra").innerHTML = costoTotal;

}

function calcEdad(datehbd)
    {
        var fechaActual = new Date()
        var fechadia, fechames
        var annoactual, annoshbd
        fechames = fechaActual.getMonth()
        fechames = fechames + 1;
        fechadia = fechaActual.getDate()

        var annoaux = parseFloat(datehbd.slice(0, 4));
        var annomes = parseFloat(datehbd.slice(5, 7));
        var annodia = parseFloat(datehbd.slice(8, 10));
	if(annomes <= fechames){
		if(annodia <= fechadia){
			annoactual = 2018;
			annoshbd = annoactual - annoaux;
		}else{
				if(annomes <= fechames){
				annoactual = 2018;
				annoshbd = annoactual - annoaux;
				}else{
				annoactual = 2018;
				annoshbd = annoactual - annoaux;
				}
			}
							}else{
						annoactual = 2018;
						annoshbd = annoactual - annoaux - 1 ;
                    }
return annoshbd;
    }

    function RecASeg(base,Redad){
        var AuxRedad = parseFloat(Redad);
        base = parseFloat(base);
        if((AuxRedad < 19) ||(AuxRedad > 65)) {Recargo = base * 0;}
        if((AuxRedad >= 19)&&(AuxRedad < 21)){Recargo = base * 0;}
        if((AuxRedad >= 21)&&(AuxRedad < 25)){Recargo = base * 0.01;}
        if((AuxRedad >= 25)&&(AuxRedad < 30)){Recargo = base * 0.02;}
        if((AuxRedad >= 30)&&(AuxRedad < 40)){Recargo = base * 0.05;}
        if((AuxRedad >= 40)&&(AuxRedad < 50)){Recargo = base * 0.08;}
        if((AuxRedad >= 50)&&(AuxRedad < 65)){Recargo = base * 0.12;}
        return Recargo;
}

function RecCon(baseC,RedadC){
	var AuxRedadC = parseFloat(RedadC);
    baseC = parseFloat(baseC);
    if((AuxRedadC = 0)) {Recargoc = 0;}
	if((AuxRedadC < 30)) {Recargoc = baseC * 0.01;}
	if((AuxRedadC >= 30)&&(AuxRedadC < 40)){Recargoc = baseC * 0.02;}
	if((AuxRedadC >= 40)&&(AuxRedadC < 50)){Recargoc = baseC * 0.03;}
	if((AuxRedadC >= 50)&&(AuxRedadC < 70)){Recargoc = baseC * 0.05;}
	if((AuxRedadC >= 30)&&(AuxRedadC < 40)){Recargoc = baseC * 0.05;}
	return Recargoc;
}