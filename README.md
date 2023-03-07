# static-web

정적 웹사이트를 손쉽게 운용하기 위해 개발됨

## 설치

- 사전에 [pm2](https://pm2.keymetrics.io/) 를 설치하기 바랍니다.

```sh
# 프로젝트 복제
npx degit https://github.com/wonsama/static-web [project-name]
cd [project-name]
# 의존성 다운로드
yarn
# 백그라운드 실행
pm2 start
```

## 작업

- 실행 전 `public` 디렉토리 아래 static 자원(html, images, js, css 등) 을 넣어 주시면 됩니다.
- 개발 모드로 진행하는 경우 `yarn dev` 또는 `npm run dev` 커맨드를 입력하여 확인하기 바랍니다.
