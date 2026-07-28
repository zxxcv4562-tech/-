print('='*30)

for a in range(5):
    a = '+'
for b in range(5):
    b = '-'
    print(a,b,sep='',end='') #sep='' = +- 사이의 간격 없애기
print('*'*30)

for a in range(3):
    for b in range(5):
        b = '+'
        print(b,end='')
    print()

print('*'*30)

for c in range(1,6): 
    for _ in range(5): # _ 는 변수는 필요없고 반복 실행만 필요할때 변수 대신 선언
        print(c,end='') 
    print()

print('*'*30)

for e in range(1,6): # e = 1~5까지 라고 선언
    for _ in range(e): 
        print(e,end='') # 1~5까지라고 선언한 e를 e 값만큼 반복해서 출력 e값이 1이면 e 2이면 ee 3이면 eee
    print()


print('*'*30)

for e in range(1,6): 
    for _ in range(e):
        e = '+'        #e를 문자인 +로 변환
        print(e,end='')
    print()

for e in range(5,0,-1): 
    for f in range(e):
        print(e,end='')
    print()
      


        











