<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script type="text/javascript" src="Proyecto.js"></script>
</head>
<body>
    <fieldset>
        <legend>Datos Asegurado</legend> 
    <form action="" id="">
        <input type="text" name="nameA" id="nameA" placeholder="NameA"><br>
        <input type="date" name="fechaA" id="fechaA">
    </fieldset>     
    </form>

    <form action="" id=""></form>
    <fieldset>
            <legend>Datos Conyuge</legend> 
            <button type="button" id= "siesposa" onclick="esposaOpcion()">Si</button>
            <button type="button" id= "noesposa" onclick="esposaOpcion2()">NO</button> <br>
            <input type="text" name="nameE" id="nameE" placeholder="NameE"style="visibility:hidden" ><br>
            <input type="date" name="fechaE" id="fechaE" style="visibility:hidden">
    </fieldset>    
    </form>

    <form action="" id=""></form>
    <fieldset>
            <legend>Datos Hijos</legend> 
            <button type="button" id= "sihijo" onclick="hijoOpcion()">Si</button>
            <button type="button" id= "nohijo" onclick="hijoOpcion2()">NO</button> <br>
            <select id="nameH" style="visibility:hidden" > 
                    <option value="0"> 0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
            </select> 
    </fieldset>    
    <button type="button" onclick="getData()">Enviar</button>
    <fieldset>
        <legend>Cotizacion:</legend>
        <hr/ id="linea" style="visibility:hidden" ><br>
        <label type = "text" id = "muestratxt" style="visibility:hidden" >Costo Total Seguro: </label>
        <label type = "text" id = "muestra" style="visibility:hidden"></label><br>
    </fieldset>
    </form>

    
    
    
</body>
</html>