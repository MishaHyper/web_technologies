function correction(){
  let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
  let sum = 0;
  for (let i=0; i < names.length; i++) {
      if (names[i][0] == 'J' || names[i][0] == 'j') {
            let name = names[i];
            speakGoodBye(name);
      } else {
            let name = names[i];
            speakHello(name);
      }
  }
  for(let j=0; j < names.length; j++){
    chars = names[j].split('');
    for(let n=0; n < chars.length; n++){
      sum += chars[n].charCodeAt(0);
    }
  }
  console.log(`Sum of characters ASCII in array "names" ${sum}`);
  for (let n=0; n < names.length; n++) {
    if (sum < 5000 && names[n].slice(-1) == 'n'){
        let name = names[n];
        speakGoodBye(name);
      }
    else{
      let name = names[n];
      speakHello(name);
    }
  }
}
correction();
