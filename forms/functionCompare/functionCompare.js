function Compare(pass1, pass2) {
  let results = pass1.localeCompare(pass2)
  return results
}

let pass1 = prompt("Enter password:")
let pass2 = prompt("Enter password:")

let answer = Compare(pass1, pass2)

if (answer == 0)
  console.log(`The passwords are the same.`)
else 
  console.log(`The passwords are not the same.`)