let newCities = ""
let cities = []
i=0
let doContinue = confirm("Do you want to add another city? OK or Stop for No")
while (doContinue) {
  newCities = prompt("Enter city:")
  cities.push(newCities)
  doContinue = confirm("Do you want to add another city? OK or Cancel for Stop")
}

while ( i < cities.length) {
  cities[i] = cities[i].toLowerCase()
  console.log(`${cities[i]}`)
  i++
}




