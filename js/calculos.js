var btn = document.querySelector("#btn");

btn.onclick = () =>{

    let deuda = parseFloat(document.querySelector("input[name=credito]").value);

    let anos = parseInt(document.querySelector("input[name=anos]").value);

    let interes = parseFloat(document.querySelector("input[name=interes]").value);

    const resultado = document.getElementById("resultado");



    // hacemos los calculos...

    interes = (interes / 100) / 12;

    const m = (deuda * interes * (Math.pow((1 + interes),(anos * 12)))) / ((Math.pow((1 + interes),(anos * 12))) - 1);



    resultado.innerHTML="<div>Capital Inicial: "+deuda.toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2})+ " $" + "<br>Cuota a pagar mensualmente: "+m.toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2})+" $</div>";


    // cramos un objeto table donde poner el resultado

    const table=document.createElement("table");

    table.setAttribute("border",1);

    table.setAttribute("cellpadding",5);

    table.setAttribute("cellspacing",0);



    // titulo de la tabla

    let tr=document.createElement("tr");

    for (let text of ["Mes", "Intereses", "Amortización", "Capital Pendiente"]) {

        let th=document.createElement("th");

        let txt=document.createTextNode(text);

        th.appendChild(txt);

        tr.appendChild(th);

    }

    table.appendChild(tr);



    // contenido de la tabla

    let totalInt=0;

    for (let i=1; i<=anos*12; i++) {

        totalInt=totalInt+(deuda*interes);



        tr=document.createElement("tr");

        let td=document.createElement("td");

        let txt=document.createTextNode(i);

        td.appendChild(txt);

        tr.appendChild(td);

        td=document.createElement("td");

        txt=document.createTextNode((deuda*interes).toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2}));

        td.appendChild(txt);

        tr.appendChild(td);

        td=document.createElement("td");

        txt=document.createTextNode((m-(deuda*interes)).toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2}));

        td.appendChild(txt);

        tr.appendChild(td);

        deuda=deuda-(m-(deuda*interes));

        td=document.createElement("td");

        if (deuda<0) {

            txt=document.createTextNode("0");

        }else{

            txt=document.createTextNode(deuda.toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2}));

        }

        td.appendChild(txt);

        tr.appendChild(td);

        table.appendChild(tr);

    }



    resultado.appendChild(table);

    let div=document.createElement("div");

    let txt=document.createTextNode("Pago total de intereses : "+totalInt.toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2})+" $");

    div.appendChild(txt);

    resultado.appendChild(div);

}
