# New App - node sample

node.js의 ejs(Embed Javascript)방식으로 만든 어플리케이션 예제입니다.    

새로운 어플리케이션 작성, 개발, 배포는 아래 순서로 하시면 됩니다.   

- Local(작업PC)에 프로그램을 개발할 디렉토리를 작성하고 이동      
- nodejs프로그램 초기화   
```
> npm init
```
- vscode실행하고, 프로그램 디렉토리 추가   
- 개발 : [newapp](https://github.com/happykube/newapp)과 [mvp-sample-front](https://github.com/happykube/mvp-sample-front)참고하여 개발    
- 라이브러리 설치(require문에 명시된 library와 ejs설치)   
  - [Create] > [Terminal]로Terminal 실행   
  - npm install --save {library1} {library2} ... 
  - npm install --save ejs  
- 로컬에서 테스트:  node {main program}    
- 배포관련 파일들 생성하고 값 지정   
  - cicd디렉토리 만들고, 그 하위에 파일들 생성   
  - newapp과 mvp-sample-front참조   
- .gitignore파일을 root에 만들고 내용은 node_modules로 지정   
- git registry에 repository 생성   
- git push   
  - git checkout -b main
  - git add . && git commit -m {commemt} && git push -u origin main 
- bastion에서 소스 clone 또는 pull   
  - su - {os user}   
  - 작업 디렉토리로 이동      
  - git clone {git repo url} 또는 git pull -r   
- 배포   
  - kubens -c 로 namespace확인   
  - run-cicd 수행하여 배포   
- 확인   
  - k get po하여 pod의 running상태 확인   
  - k get ing로 주소 확인하고 웹브라우저에서 오픈   





