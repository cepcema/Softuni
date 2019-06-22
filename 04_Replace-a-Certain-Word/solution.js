function solve () {
  let arr = JSON.parse(document.querySelector('text').value)
  let newWord = document.querySelector('word').value

  let result = document.querySelector('#result')
  let oldWord = arr[0].split(' ')[2]

  arr.forEach(line => {
    let p = document.createElement('p')
    p.textContent = line.replace(new RegExp(oldWord, 'i'), newWord)
    result.appendChild(p)
  })
}
