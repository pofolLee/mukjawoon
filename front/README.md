# mukjawoon
front : Nextjs

- flex를 썼는데 전체화면으로 나오지 않음.

 > _document.js 파일 추가해서 html, body, #__next 스타일을 width:100%, height:100%로 설정해줌

 > 참조 : https://salgum1114.github.io/nextjs/2019-05-21-nextjs-static-website-3/


- Warning: You have added a custom /_error page without a custom /404 page. This prevents the 404 page from being auto statically optimized.
See here for info: https://err.sh/next.js/custom-error-no-custom-404

 > pages/404.js 추가함
 


- Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta

 > _document.js 파일 내 viewport meta tags 제거함

 > 참조 : https://velog.io/@cyranocoding/NEXT-HEAD-%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC



- warn  - Your custom Document (pages/_document) did not render all the required subcomponent.
Missing component: <Html />
Read how to fix here: https://err.sh/next.js/missing-document-component

 > _document.js 파일 내 html 태그를 React 내 JSX.Element인 <Html>로 변경함. (따로 import)