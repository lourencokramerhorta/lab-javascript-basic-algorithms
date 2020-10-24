// Iteration 1: Names and Input---------------------------------------
let hacker1 = ("Catarina"); //driver
let hacker2 = ("João"); //navigator


console.log(`"the driver's name is ${hacker1}"`);

console.log(`"the navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals-------------------------------------------

if (hacker1.length > hacker2.length){
    console.log(`"It seems that the driver has the longest name, it has ${hacker1.length}"`)
  } else if (hacker1.length < hacker2.length){
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters"`)
  } else if (hacker1.length === hacker2.length){
    console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!."`)
  }

// Iteration 3: Loops-------------------------------------------------
let result = "";
for (let i = 0; i < hacker1.length; i++){
  result += (hacker1[i].toUpperCase() + " ");
}

console.log (`the result is: ${result}`);

//----------------------------------------------------------------------

let posição = "";
for (let i = hacker2.length -1; i >= 0; i--){
  posição += hacker2[i];
}
console.log(posição)

//--------------------------------------------------------------------

function alfabeto(a ,b){
    return a.localeCompare(b)
  }
  let driverAlfa = "The driver's name goes first.";
  let navigatorAlfa = "Yo, the navigator goes first definitely.";
  console.log((alfabeto(hacker1, hacker2) == -1) ? driverAlfa : navigatorAlfa);

  // Bonus Iteration.-------------------------------------------------

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus accumsan mattis. Proin in porta nisi. Sed scelerisque pretium est sed egestas. Nunc sed auctor nulla. Donec eu sapien eu libero iaculis facilisis. Curabitur ac lorem vestibulum est pulvinar lacinia. Pellentesque auctor enim et libero iaculis, eget placerat lacus sollicitudin. Aenean facilisis, urna eget accumsan semper, elit ex consequat est, et convallis nulla sapien viverra lorem. In cursus orci sed placerat cursus. Vestibulum malesuada mauris non est suscipit blandit. Curabitur scelerisque tellus egestas tellus euismod molestie. Phasellus imperdiet rhoncus facilisis. Pellentesque ut auctor libero, et venenatis nunc. Aliquam lobortis elementum justo quis ornare."


let totalWords = 0;
for (i = 0; i < text.length; i++){
  if (text[i]=== " "){
  totalWords ++;
  }
}
console.log(totalWords)


//--------------------------------------------------------------------

let etTotalCount = 0;
for (i = 0; i < text.length; i++){
  const currentLetter = text[i];
  const nextLetter = text[i+1];
  const nextLetter2 = text[i+2];
  const nextLetter3 = text[i+3];
  if( currentLetter === " " && 
    nextLetter === "e" &&
    nextLetter2 === "t" &&
    nextLetter3 === " "
    ){
     etTotalCount += 1
  }
}

console.log(etTotalCount)