

for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = "€ " + product[a].price
        document.getElementById("desc1").innerHTML = product[a].description
        document.getElementById("brand1").innerHTML = product[a].brand
        document.getElementById("mc1").innerHTML = product[a].microcontroller
        document.getElementById("opv1").innerHTML = product[a].operatingvoltage
        document.getElementById("ipv1").innerHTML = product[a].recomendetinputvoltage
        document.getElementById("ipvl1").innerHTML = product[a].inputvoltagelimit
        document.getElementById("diop1").innerHTML = product[a].digitaliopins
        document.getElementById("pwmiop1").innerHTML = product[a].pwmiopins
        document.getElementById("aip1").innerHTML = product[a].analoginputpins
        document.getElementById("crpio1").innerHTML = product[a].dccurrentperiopin
        document.getElementById("crpppt1").innerHTML = product[a].currentpersmallpowerpin
        document.getElementById("fm1").innerHTML = product[a].flashmemory
        document.getElementById("sram1").innerHTML = product[a].sram
        document.getElementById("eeprom1").innerHTML = product[a].eeprom
        document.getElementById("clsp1").innerHTML = product[a].clockspeed
        document.getElementById("sze1").innerHTML = product[a].size
        document.getElementById("wgh1").innerHTML = product[a].weight
        document.getElementById("inf1").innerHTML = product[a].extrainformation
   

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""
        document.getElementById("mc1").innerHTML = ""
        document.getElementById("opv1").innerHTML = ""
        document.getElementById("ipv1").innerHTML = ""
        document.getElementById("ipvl1").innerHTML = ""
        document.getElementById("diop1").innerHTML = ""
        document.getElementById("pwmiop1").innerHTML = ""
        document.getElementById("aip1").innerHTML = ""
        document.getElementById("crpio1").innerHTML = ""
        document.getElementById("crpppt1").innerHTML = ""
        document.getElementById("fm1").innerHTML = ""
        document.getElementById("sram1").innerHTML = ""
        document.getElementById("eeprom1").innerHTML = ""
        document.getElementById("clsp1").innerHTML = ""
        document.getElementById("sze1").innerHTML = ""
        document.getElementById("wgh1").innerHTML = ""
        document.getElementById("inf1").innerHTML = ""
    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = product[a].image
        document.getElementById("price2").innerHTML = "€ " + product[a].price
        document.getElementById("desc2").innerHTML = product[a].description
        document.getElementById("brand2").innerHTML = product[a].brand
        document.getElementById("mc2").innerHTML = product[a].microcontroller
        document.getElementById("opv2").innerHTML = product[a].operatingvoltage
        document.getElementById("ipv2").innerHTML = product[a].recomendetinputvoltage
        document.getElementById("ipvl2").innerHTML = product[a].inputvoltagelimit
        document.getElementById("diop2").innerHTML = product[a].digitaliopins
        document.getElementById("pwmiop2").innerHTML = product[a].pwmiopins
        document.getElementById("aip2").innerHTML = product[a].analoginputpins
        document.getElementById("crpio2").innerHTML = product[a].dccurrentperiopin
        document.getElementById("crpppt2").innerHTML = product[a].currentpersmallpowerpin
        document.getElementById("fm2").innerHTML = product[a].flashmemory
        document.getElementById("sram2").innerHTML = product[a].sram
        document.getElementById("eeprom2").innerHTML = product[a].eeprom
        document.getElementById("clsp2").innerHTML = product[a].clockspeed
        document.getElementById("sze2").innerHTML = product[a].size
        document.getElementById("wgh2").innerHTML = product[a].weight
        document.getElementById("inf2").innerHTML = product[a].extrainformation
   

    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product[0].image
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""
        document.getElementById("mc2").innerHTML = ""
        document.getElementById("opv2").innerHTML = ""
        document.getElementById("ipv2").innerHTML = ""
        document.getElementById("ipvl2").innerHTML = ""
        document.getElementById("diop2").innerHTML = ""
        document.getElementById("pwmiop2").innerHTML = ""
        document.getElementById("aip2").innerHTML = ""
        document.getElementById("crpio2").innerHTML = ""
        document.getElementById("crpppt2").innerHTML = ""
        document.getElementById("fm2").innerHTML = ""
        document.getElementById("sram2").innerHTML = ""
        document.getElementById("eeprom2").innerHTML = ""
        document.getElementById("clsp2").innerHTML = ""
        document.getElementById("sze2").innerHTML = ""
        document.getElementById("wgh2").innerHTML = ""
        document.getElementById("inf2").innerHTML = ""
    }
}