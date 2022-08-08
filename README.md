# 사진과 가구 조합 컴포넌트 구현

- 집꾸미기 집소개 기능에 포함되어 있는 사진과 가구 정보를 조합하는 컴포넌트 구현하기

  - 참고: [https://www.ggumim.co.kr/star/view/4582](https://www.ggumim.co.kr/star/view/4582)
  
## ✎ Introduction

- 개발 기간 | 2022-08-01 ~ 2022-08-04
- 개발 기능

<img src="https://user-images.githubusercontent.com/100933263/183380210-1638d712-360f-4b54-b76e-69cc973074c2.gif" height="200"/>

  - 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
  - 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
  - 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
  - tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출  
  </br>
  
    
<img src="https://user-images.githubusercontent.com/100933263/183381087-62b99027-0a4e-47af-8e9c-6c57bd91903e.gif" height="320"/>
  
  - 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
  - 선택된 가구는 선택되었으면 표시
  - 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시 
  </br>
  
  - 가구 정보는 2가지 형식이 존재 (입점 / 비입점 가구)
  
  <img width="216" alt="스크린샷 2022-08-08 오후 7 40 26" src="https://user-images.githubusercontent.com/100933263/183400598-2ad4927a-23c3-4096-a6a3-16da13fd2770.png">
  
   - 입점되어 있는 가구 (product 정보에 outside가 false 이 가구)
      - 상품 이미지 (product 정보 imageUrl)
      - 상품명 (product 정보 name)
      - 할인율 (product 정보 discount)
      - 가격 (product 정보 priceDiscount)
      </br>
      
   <img width="210" alt="스크린샷 2022-08-08 오후 7 40 48" src="https://user-images.githubusercontent.com/100933263/183400655-4f255316-64e1-4145-98c6-3d8b0fdacce2.png">
   
   - 입점되지 않는 가구
      - 상품이미지 (product 정보 imageUrl)
      - 상품명 (product 정보 name)
      - 예상 가격 (product 정보 priceDiscount)
      </br>

- 개발기능 시연
<img src="https://user-images.githubusercontent.com/100933263/183377666-09211b28-ecd7-4644-bcae-04b37c605c58.gif" height="600"/>

## ✎ Technlogies

- Front-end
  - HTML | SCSS | JAVASCRIPT | REACT | STYLED-COMPONENTS
  
## ✎ Contact

- ssh30510044@gmail.com, [기술블로그](https://sophie0527.tistory.com/), [깃허브](https://github.com/Sophie0527)
