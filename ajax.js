window.addEventListener('load',bind)

function bind(){
    const btn1 = document.querySelector('#btn1')
    btn1.addEventListener('click',function(){

        //1. ajax 객체 생성
        const xhr = new XMLHttpRequest()

        //2.보낼 준비
        //방식 method

        xhr.open('GET','https://jsonplaceholder.typicode.com/users')

        //3. 보내기
        xhr.send()

        
        xhr.onload = function(){
            console.log('다녀와썽')
            console.log(xhr.responseText)
       
            //깜짝 퀴즈
            //두 번째 사람의 이름을 출력
            //세 번째 사람의 lat을 출력

        const member = JSON.parse(xhr.responseText)
        console.log(member[1])    
        console.log(member[1].name)    
        console.log(member[1]['name'])    
        
        
        console.log(member[2].address.geo.lat)    
        console.log(member[2]['address']['geo']['lat'])    

       
       
        }
    })

    const btn2 = document.querySelector('#btn2')
    btn2.addEventListener('click',function(){

        //1. ajax 객체 생성
        const xhr = new XMLHttpRequest()

        //2.보낼 준비
        //방식 method

        xhr.open('GET','json.html')

        //3. 보내기
        xhr.send()

        console.log( '['+ xhr.responseText +']')
        xhr.onload = function(){
            console.log('다녀와썽')
            console.log(xhr.responseText)
       
      
       
        }
    })
    const btn3 = document.querySelector('#btn3')
    btn3.addEventListener('click',function(){

        const key = '2e6a6e64a94edd38c3099653b4af0193f08669e48906d9f910f66ba8d6df1c36'

              let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst'
        url += '?'
        url += 'serviceKey='+key
        url += '&numOfRows=1000'
        url += '&pageNo=1'
        url += '&dataType=JSON'
        url += '&base_date=20260722'
        url += '&base_time=1500'
        url += '&nx=63'
        url += '&ny=110'    



        //1. ajax 객체 생성
        const xhr = new XMLHttpRequest()

        //2.보낼 준비
        //방식 method

        xhr.open('GET','url')

        //3. 보내기
        xhr.send()

       
        xhr.onload = function(){
           
            console.log(xhr.responseText)
       
      
       
        }
    })
}










