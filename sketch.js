 var prn = [];
let greeting;
let s;
let x;
var input;
var mc1 = "";

function setup() {
  createCanvas(400, 400);
  input = createInput();
  input.position(20, 65);
  input.changed(newText);

//   greeting = createElement('h2', 'Enter Text');
//   greeting.position(20, 5);
}


function morseEncode(x) {
  //console.log("char entered is ", x);
  switch (x) {
    
    case '.-':
      return "a";
    case '-...':
      return "b";
    case '-.-.':
      return "c";
    case '-..':
      return "d";
    case '.':
      return "e";
    case '..-.':
      return "f";
    case '--.':
      return "g";
    case '....':
      return "h";
    case '..':
      return "i";
    case '.---':
      return "j";
    case '-.-':
      return "k";
    case '.-..':
      return "l";
    case '--':
      return "m";
    case '-.':
      return "n";
    case '---':
      return "o";
    case '.--.':
      return "p";
    case '--.-':
      return "q";
    case '.-.':
      return "r";
    case '...':
      return "s";
    case '-':
      return "t";
    case '..-':
      return "u";
    case '...-':
      return "v";
    case '.--':
      return "w";
    case '-..-':
      return "x";
    case '-.--':
      return "y";
      // for space 
    case '--..':
      return "z";
    case ' ':
      return " ";

  }
  return 0;
}




function newText() {
  console.log(input.value());
  s = input.value();
  morsecode(s);
}

function morsecode(s) {
  // for (var i = 0; i < s.length; i++) {
  //   //console.log('size  ' + s.length);
    print(morseEncode(s));
    prn.push(morseEncode(s));
    
    fill(255);
    textSize(32);
    text("word", 200, 200);
    // word = createElement('p', 'word');
    // word.position(200, 200);

    //text(40, 40, 40); |
  }


function draw() {
  background(0);
  fill(255);
  text(prn, 65, 200);
  // text("asd", 200, 200);
}