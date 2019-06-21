function solve() {
  let text = document.getElementById("text").value;
  let parts = text.split(` `);
  let words = ``;
  let numbers = ` `;

  parts.forEach(element => {
    if (isNaN(+element)) {
      //this is not a number
      words += [...element].map(ch => ch.charCodeAt(0)).join(` `);
      words += `/n`;
    } else {
      
     numbers += String.fromCharCode(+element)
    }
  });
  console.log(words)
  console.log(numbers)
}
