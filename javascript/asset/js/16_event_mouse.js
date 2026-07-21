function log(message){
    const div = document.createElement('div')
    div.classList.add('log')
    div.innerHTML = message
    view.prepend(div)
}
window.onload = function(){
    bind()
}
function bind(){
    const area = document.querySelector('#area')
    area.oncontextmenu = () => {
        alert('오른쪽 버튼은 금지지롱')
    return false
    }
area.onselectstart = function(){
    return false
} 

const area2 = document.querySelector('#area2')
    area2.addEventListener('copy',function(event){
const selection = window.getSelection().toString()
console.log(selection)
if(selection.length == 0){
    return 
}   
const str = '[출처] www.naver.com'
const result = selection + str

event.clipboardData.setData('text/plain',result)
})
area2.addEventListener('mousedown',function(){
    log('mousedown')
})


area2.addEventListener('mouseover',function(event){
    log('mouseover')
    
})
area2.addEventListener('mouseout',function(event){
    log('mouseout')
})
area2.addEventListener('mousemove',function(event){
    log('mousemove')
    
    
})


document.querySelector('body').addEventListener('mousemove',function(event){
    const game = document
})

}
