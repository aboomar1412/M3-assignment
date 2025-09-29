let lang = prompt("Enter a language code (es, de, en, fr):");
let translation;

if (lang === "es") {
  translation = "Hola Mundo";
  console.log("Hello World translated in Spanish is: " + translation);
} else if (lang === "de") {
  translation = "Hallo Welt";
  console.log("Hello World translated in German is: " + translation);
} else if (lang === "fr") {
  translation = "Bonjour le monde";
  console.log("Hello World translated in French is: " + translation);
} else {
  translation = "Hello World";
  console.log("Hello World translated in English is: " + translation);
}
