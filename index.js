function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}


var facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];
function johnLennonFacts(facts){
  const array=[];
  let i = 0;
  while(i < facts.length){
    array.push("${facts[i]} + !!!");
    i++;
  }
  return array;
}
