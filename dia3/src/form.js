const inputForm = document.querySelector('[data-js="input"]');
const form = document.querySelector('[data-js="form"]');

const select = document.createElement('select');
const cores = ["red", "black", "green", "orange", "blue"];

const coresBox = document.createElement('div')
coresBox.style.display = 'flex'




const arrayIgnora = ["de", "da", "do", "dos", "das"]
const mascara =  (word) => {
    if(word.length == 0) {
        return ''
    }
    return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}

inputForm.addEventListener('input', (e) => {
    const valueAsArray = e.target.value.split(' ')

    e.target.value = valueAsArray.map((word) => {
        return arrayIgnora.includes(word.toLowerCase())
            ? word.toLowerCase()
            : mascara(word)
        
    }).join(' ')

    console.log("frase: ", valueAsArray);
    
}, false)

//===========================================================================================

cores.forEach(color => {
    const option = document.createElement('option')
    option.value = color
    option.textContent = color
    select.appendChild(option)
})


select.addEventListener('change', (e) => {
        coresBox.innerHTML = ''
         Array.from(e.target.selectedOptions).forEach(option => {
             const div = document.createElement('div')
             div.style.height = '100px'
             div.style.width = '100px'
             div.style.background = option.value
            coresBox.appendChild(div)
         })


    console.log("cores selecionadas: ", [...e.target.options].map(el => el.selected))

},false)

select.setAttribute('multiple', '')
form.appendChild(select)
document.body.appendChild(coresBox)


