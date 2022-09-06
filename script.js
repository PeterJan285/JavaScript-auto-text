
const textElement = document.getElementById('text')
const text = 'Nam nisi ea impedit ipsum! Pariatur illum sit autem debitis! Commodi, voluptatem quia dolores magni laborum ratione asperiores. Nam nisi ea impedit ipsum! Pariatur illum sit autem debitis! Commodi, voluptatem quia dolores magni laborum ratione asperiores. Nam nisi ea impedit ipsum! Pariatur illum sit autem debitis! Commodi, voluptatem quia dolores magni laborum ratione asperiores.'

let idx = 1

writeText()

function writeText() {
    textElement.innerText = text.slice(0, idx)

    idx++

    setTimeout(writeText, 30)
}