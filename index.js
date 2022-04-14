

function positions(firstPlace, secondPlace, lastPlace) {
      
      const array1 = [firstPlace, secondPlace, lastPlace];

      if (lastPlace === "Daniel"){ 
            array1[1] = "Daniel"
            array1[2] = secondPlace
             
      }

      else if (secondPlace === "Daniel") {
            array1[0] = "Daniel"
            array1[1] = firstPlace
      }

      return `1º - Colocado ${array1[0]}, 2º - Colocado ${array1[1]}, 3º - Colocado ${array1[2]}`

}

console.log (positions("Daniel", "Rafael", "Manoel"))
console.log (positions("Rafael", "Daniel", "Manoel"))
console.log (positions("Manoel", "Rafael", "Daniel"))









