var NameAsegurado = new String
var DateAsegurado = new String
var EdadAsegurado = new String

var NameEsposa = new String
var DateEsposa = new String
var EdadEsposa = new String

var cantHijos = new String

var esposa = new String
var hijo = new String

var auxiliar

var recargoAsegurado = 0 ; 
var recargoEsposa = 0;
var recargoHijos = 0; 
var comision, costoTotal

const precioBase = 250;

var esposaOpcion = function(){ //Si
    document.getElementById('siesposa').style.visibility='none';
    document.getElementById('noesposa').style.visibility='none';
    document.getElementById('nameE').style.visibility='inline';
    document.getElementById('fechaE').style.visibility='inline';
    NameEsposa = document.getElementById("nameE").value;
    DateEsposa = document.getElementById("fechaE").value;
    esposa = "si";
}
var esposaOpcion2 = function(){//no
    document.getElementById('noesposa').style.visibility='none';
    document.getElementById('siesposa').style.visibility='none';
    esposa = "no";
}

var hijoOpcion = function(){//si
    document.getElementById('nohijo').style.visibility='none';
    document.getElementById('sihijo').style.visibility='none';
    document.getElementById('nameH').style.visibility='inline';
    hijo = "si";
}

var hijoOpcion2 = function(){//no
    document.getElementById('nohijo').style.visibility='none';
    document.getElementById('sihijo').style.visibility='none';
    hijo = "N/A";
}
var getData = function(){
    //datos del Asegurado
     NameAsegurado = document.getElementById("nameA").value;
     DateAsegurado = document.getElementById("fechaA").value;
     EdadAsegurado = calcEdad(DateAsegurado);
     if (esposa = "si"){
     NameEsposa = document.getElementById("nameE").value;
     DateEsposa = document.getElementById("fechaE").value;
     EdadEsposa = calcEdad(DateEsposa);
     recargoEsposa = RecCon(precioBase,parseFloat(EdadEsposa))
    }
     if (hijo = "si"){
     cantHijos = parseFloat(document.getElementById("nameH").value);
     recargoHijos = (parseFloat(cantHijos) *(precioBase*0.01));
     
     }

     comision = precioBase * 0.30;
     recargoAsegurado = RecASeg(precioBase,parseFloat(EdadAsegurado));
     costoTotal = recargoAsegurado + recargoEsposa + recargoHijos + precioBase + comision;
     document.getElementById('linea').style.visibility='inline';
     document.getElementById('muestratxt').style.visibility='inline';
     document.getElementById('muestra').style.visibility='inline';

     //operamos
     //*************
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
	if((AuxRedadC < 30)) {Recargoc = baseC * 0.01;}
	if((AuxRedadC >= 30)&&(AuxRedadC < 40)){Recargoc = baseC * 0.02;}
	if((AuxRedadC >= 40)&&(AuxRedadC < 50)){Recargoc = baseC * 0.03;}
	if((AuxRedadC >= 50)&&(AuxRedadC < 70)){Recargoc = baseC * 0.05;}
	if((AuxRedadC >= 30)&&(AuxRedadC < 40)){Recargoc = baseC * 0.05;}
	return Recargoc;
}