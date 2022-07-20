

let nafta = prompt('Cuantos litros de nafta tiene tu auto?');

while ( nafta > 0 ) {
   
    if (nafta <= 100) {
       console.log("nafta restante " + nafta + "L") 
       nafta--; 
    } else {
        console.log("Tu auto explota, exceso de nafta")
        break
    }
    
}

console.log ("Ya no tiene nafta")