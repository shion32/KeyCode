const persona = {
    "?": "a",
    "\\": "i",
    "~": "o",
    "[": "e",
    "+": "u",
    "¬": "ó",
    "(": " ",
    ")": " ",
    "}": "q",
    "`":"c",
    "^":"m",
    "*":"p",
    "/":"l",
    "-":"h",
    "]":"n",
    "=":"t",
    "#":"",
    "¿":"y",
    "{":"s",
    "$":"r",
    "%":"b",
    "!":"j",
    "¡":"d",
    ";":"f",
    "_":"z"
    
};


const encryptedString = "^[()`~^*/?`[()^+`-~()#[$()/~()%\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\{()*~¡[$[{()¡[()?=[]`\¬]()¿()[{;+[$__~()`~]=]+~"

let decodedString = "";
for (let i = 0; i < encryptedString.length; i++) {
    let currentChar = encryptedString[i];
    if (persona[currentChar] !== undefined) {
        decodedString += persona[currentChar];
    } else {
        decodedString += currentChar;
    }
}

console.log("Cadena decodificada:", decodedString);
