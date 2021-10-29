const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) // вызывается, когда элемент, который мы перетаскиваем, находится над placeholder-ом
    placeholder.addEventListener('dragenter', dragenter) // когда мы на территории плейсхолдера
    placeholder.addEventListener('dragleave', dragleave) // когда перетащили, но вышли с территории плейсхолдера
    placeholder.addEventListener('drop', dragdrop) // когда мы отпустили элемент
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')
}


function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}