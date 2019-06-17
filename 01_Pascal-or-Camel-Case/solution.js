
function solve () {

  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;

  let result = 'Error!'
  input = input
    .split(' ')
    .map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
    .join('')

  if (currentCase === 'Pascal Case') {
    result = input
  } else if (currentCase === 'Camel Case') {
    result = input[0].toLowerCase() + input.slice(1)
  }

  document.querySelector('#result').textContent = result
}
