console.log('hello js')

const btn1 = document.querySelector('#btn1')
console.log(1, 'btn1',btn1)
console.log(window)




function bind(){
    const btn1 = document.querySelector('#btn1')
    btn1.onclick = function(){
        console.log('btn1 click')
    }
}



const btn2 = document.querySelector('#btn2')
btn2,addEventListener('click',function(){
    console.log('btn2 클릭')
})


function btn3click(){
 console.log('btn3 click')
}



//#login 클릭시 #id #pw의 값을 출력
const login = document.querySelector('#login')
login,addEventListener('click',function(){
const id = document.querySelector('#id')
const pw = document.querySelector('#pw')
const warning = document.querySelector('.warning')

console.log('id.value :',id.value)
console.log('pw.value :',pw.value)
if(id.value.trim()==''){
    console.log('아이디는 필수입니다')
const view = document.querySelector('#view')




}



})

