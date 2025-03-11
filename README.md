// git과 관련된 주요 내용 

-- 기존 존재하는 프로젝트를 다운 받는게 아닌 새로운 프로젝트를 생성 후 git의 새로운 repository와 연동시키기 위해서는 먼저 git init을 사용해야한다. 
# git init 
.git 하위 디렉토리 생성함 

# git add . 
커밋에 모든 파일 변경 사항을 포함 

# git pull 
pull 을 통해서 내용을 받을 수 있음 

-- 미리 만들어진 git을 다른 컴퓨터에서 받아올 때  

* VSCode 기준 
1. F1 누른 후 git clone 검색 
![image](https://github.com/user-attachments/assets/cc710286-9e9f-4865-88e3-2ccb5fa57097)

2. 깃허브 계정과 연동 

3. 깃허브 연동시 git repository URL 입력 및 git repository를 선택할 수 있음 

 3-1  URL 입력 >> repository 들어간 후 code 화면에서 HTTPS의 링크 복사 후 VSCode에서 입력 

 3-2 git repository 선택 >> 해당 화면처럼 본인이 repository를 선택할 수 있음 
![image](https://github.com/user-attachments/assets/0efa5971-0e65-41c9-b072-c49959d97d9d)


4. 저장할 local 위치 선택 
-- 본인의 경우에는 c\users\user에 저장해놓음 (조만간 따로 개별 폴더 생성 후 내부에 보관할 예정 )

5. Open 클릭 
-- Open : 현재 열려있는 VSCode에서 Open 

-- Open in New Window : 새로운 창으로 VSCode Opeen

-- Add to Workspace : 현재 열려있는 VSCode에 Workspace를 추가함 

![image](https://github.com/user-attachments/assets/1c549d35-8d59-4bbf-99ae-859569d0a878)


6. 위의 내용을 통해서 git의 내용을 가져온 걸 확인할 수 있다. 


<hr>

* 깃 허브 push 및 pull로 받는 순서 

1. git add .
-- 커밋에 파일 변경 사항을 한번에 모두 포함 해서 add로 추가함 
ex :: git add . 

![image](https://github.com/user-attachments/assets/bbb93289-63bc-4460-8976-d04be5069d63)


(생략 가능)
git status 
--  파일의 상태를 확인할 수 있음 
```
ex :: git add . 후 git status를 사용한다면 아래의 이미지를 확인할 수 있음 
```

![image](https://github.com/user-attachments/assets/b2678a52-99e9-4707-8eed-e30d6f338259)


2. git commit -m "커밋 메시지" 
--  커밋 생성 (기존 파일의 변경사항을 확정)
   
```
ex :: git commit -m "Update README" 
```
![image](https://github.com/user-attachments/assets/e9ca93c7-0074-41b8-8110-50b53d3446fc)

3. git push origin "브랜치이름" 
--  commit을 통해 변경한 사항을 원격 서버에 업로드함
   
```
ex :: git push origin -m master 
```

![image](https://github.com/user-attachments/assets/205a8841-bb4c-4de1-9bd0-e71d15aadb45)


4.  git pull 
-- 원격 저장소의 변경 내용이 현재 디렉토리에 가져와지고(fetch) 병합됨 (merge)

```
ex :: git pull
```

<br>
변경 사항이 없을 때 pull 하면 나오는 이미지 
 
![image](https://github.com/user-attachments/assets/ecc9babf-2c7e-4825-8b72-962437081dac)


변경 사항이 존재할 때 pull 하면 나오는 이미지 

![image](https://github.com/user-attachments/assets/969ba6b2-ec13-4998-aafb-31c8d63cddf7)


