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
var regresar = function(){
    document.getElementById("datos").style.display = "block";
    document.getElementById("resultado").style.display = "none";
}
var getData = function(){
    NameAsegurado = document.getElementById("nameA").value;
    DateAsegurado = document.getElementById("fechaA").value;
    if(NameAsegurado == "N/A"){
        alert ("no ha ingresado un nombre de asegurado");
        alert (DateAsegurado);
    }else{
    document.getElementById("datos").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    NameEsposa = document.getElementById("nameE").value;
    DateEsposa = document.getElementById("fechaE").value;
    cantHijos = parseFloat(document.getElementById("nameH").value);
    EdadAsegurado = parseFloat(calcEdad(DateAsegurado));
    RecargoAsegurado = parseFloat(RecASeg(costobase,EdadAsegurado));
    if(RecargoAsegurado != 10000000){
        RecargoAsegurado = RecargoAsegurado;
        cantHijos = parseFloat(document.getElementById("nameH").value);
    recargoHijos = (parseFloat(cantHijos) *(costobase*0.01));
    
    if(NameEsposa != "N/A"){
        EdadEsposa = parseFloat(calcEdad(DateEsposa));
        RecargoEsposa = parseFloat(RecCon(costobase,EdadEsposa));
        document.getElementById("fechanc").innerHTML = DateEsposa;
        document.getElementById("edadc").innerHTML = EdadEsposa;
    }else{
        EdadEsposa = 0;
        RecargoEsposa = 0;
        document.getElementById("fechanc").innerHTML = "N/A";
        document.getElementById("edadc").innerHTML = "N/A";
    }
    costoTotal = costobase + comision + recargoHijos + RecargoAsegurado + RecargoEsposa;

    }else{
        RecargoAsegurado = "N/A";
        cantHijo = "N/A";
        recargoHijos = "N/A";
        costoTotal = " no es posible asegurarlo"
    }
    
    document.getElementById('nametable').style.visibility='visible';
    document.getElementById('bo').style.visibility='visible';
    document.getElementById('bo2').style.visibility='visible';

    document.getElementById('nombretxt').style.visibility='visible';
    document.getElementById('nombre').style.visibility='visible';
    document.getElementById("nombre").innerHTML = NameAsegurado;

    document.getElementById('fechantxt').style.visibility='visible';
    document.getElementById('fechan').style.visibility='visible';
    document.getElementById("fechan").innerHTML = DateAsegurado;

    document.getElementById('edadtxt').style.visibility='visible';
    document.getElementById('edad').style.visibility='visible';
    document.getElementById("edad").innerHTML = EdadAsegurado;


    document.getElementById('nombrectxt').style.visibility='visible';
    document.getElementById('nombrec').style.visibility='visible';
    document.getElementById("nombrec").innerHTML = NameEsposa;

    document.getElementById('fechanctxt').style.visibility='visible';
    document.getElementById('fechanc').style.visibility='visible';
    document.getElementById("fechanc").innerHTML = DateEsposa;
    

    document.getElementById('edadctxt').style.visibility='visible';
    document.getElementById('edadc').style.visibility='visible';
    document.getElementById("edadc").innerHTML = EdadEsposa;

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

    document.getElementById('muestratxt').style.visibility='visible';
    document.getElementById('muestra').style.visibility='visible';
    document.getElementById("muestra").innerHTML = costoTotal;
}
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
        if((AuxRedad < 19) ||(AuxRedad > 65)) {Recargo = 10000000;}
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
