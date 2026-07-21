function log(message){
    const div = document.createElement('div')
    div.classList.add('log')
    div.innerHTML = message
    view.prepend(div)}

    window.addEventListener('load',function(){
        const query = document.querySelector('#query')
       query.addEventListener('focus',function(){

           query.style.background = 'yellow'
        })
        query.addEventListener('blur',function(){
            query.style.background =''
        })
        
})
const parent = document.querySelector('#parent')
parent.addEventListener('click',function(event){
    log('부모 클릭')
})

const board = document.querySelector('#board')
board.addEventListener('click',function(event){
    console.log(event.target)
})