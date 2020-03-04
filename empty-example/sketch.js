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
    case 'a':
      return ".-";
    case 'b':
      return "-...";
    case 'c':
      return "-.-.";
    case 'd':
      return "-..";
    case 'e':
      return ".";
    case 'f':
      return "..-.";
    case 'g':
      return "--.";
    case 'h':
      return "....";
    case 'i':
      return "..";
    case 'j':
      return ".---";
    case 'k':
      return "-.-";
    case 'l':
      return ".-..";
    case 'm':
      return "--";
    case 'n':
      return "-.";
    case 'o':
      return "---";
    case 'p':
      return ".--.";
    case 'q':
      return "--.-";
    case 'r':
      return ".-.";
    case 's':
      return "...";
    case 't':
      return "-";
    case 'u':
      return "..-";
    case 'v':
      return "...-";
    case 'w':
      return ".--";
    case 'x':
      return "-..-";
    case 'y':
      return "-.--";
      // for space 
    case 'z':
      return "--..";
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
  for (var i = 0; i < s.length; i++) {
    //console.log('size  ' + s.length);
    print(morseEncode((s[i])));
    // prn.push(morseEncode((s[i])));
    
    fill(255);
    textSize(32);
    text("word", 200, 200);
    // word = createElement('p', 'word');
    // word.position(200, 200);

    //text(40, 40, 40); |
  }
}

function draw() {
  background(50);
  fill(255);
  text(prn, 200, 200)
  // text("asd", 200, 200);
}