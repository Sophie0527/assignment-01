import React, { useState, useEffect } from 'react';
import css from './Home.module.scss';

function Home() {
  const [productInfo, setProductInfo] = useState([]);
  //   console.log(productInfo);
  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, [setProductInfo]);

  return (
    <div className={css.container}>
      <header>
        <h2>2022.01.12 17:55</h2>
        <h1>화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방</h1>
        <div className={css.hashTag}>
          #방꾸미기 &nbsp; &nbsp; #우드톤 &nbsp; &nbsp; #화이트 &nbsp; &nbsp;
          #라탄 &nbsp; &nbsp;
        </div>
        <div className={css.data}>
          <span className={css.dataTitle}>보관함</span>
          <span>124</span>
          <span className={css.dataTitle}>댓글</span>
          <span>0</span>
        </div>
      </header>
      <div className={css.viewContent}>
        <figure className={css.picture}>
          <img
            className={css.mainImage}
            src={productInfo.imageUrl}
            alt="메인 이미지"
          />
        </figure>

        <div className={css.wrapVertical}>
          <div className={css.subPicture}>
            <img
              className={css.subImage}
              src="https://cdn.ggumim.co.kr/cache/furniture/300/202106251732335MqWBmo5tQ.jpg"
              alt="모빌"
            />
          </div>
          <div className={css.subPicture}>
            <img
              className={css.subImage}
              src="https://cdn.ggumim.co.kr/cache/furniture/300/20200916133257f6yBWCxVRR.jpg"
              alt="테이블"
            />
          </div>
          <div className={css.subPicture}>
            <img
              className={css.subImage}
              src="https://cdn.ggumim.co.kr/cache/furniture/300/2020041308532933wiLOaPrO.jpg"
              alt="이동식 선반"
            />
          </div>
          <div className={css.subPicture}>
            <img
              className={css.subImage}
              src="https://cdn.ggumim.co.kr/cache/furniture/300/20220110174732fFP0woxpov.png"
              alt="자수 레이스 커튼"
            />
          </div>
          <div className={css.subPicture}>
            <img
              className={css.subImage}
              src="https://cdn.ggumim.co.kr/cache/furniture/300/20220110175032Kovsqwpdkw.png"
              alt="쉬폰 커튼"
            />
          </div>
          <div className={css.subPicture}>
            <img
              className={css.subImage}
              src="https://cdn.ggumim.co.kr/cache/furniture/300/202104021708586U3uKKEJqa.PNG"
              alt="스탠드 조명"
            />
          </div>
          <div className={css.subPicture}>
            <img
              className={css.subImage}
              src="https://cdn.ggumim.co.kr/cache/furniture/300/202104291640198PeKIa8W06.JPG"
              alt="벽난로"
            />
          </div>
          <div className={css.subPicture}>
            <img
              className={css.subImage}
              src="https://cdn.ggumim.co.kr/cache/furniture/300/20210705191444bnwLPTWxV0.jpg"
              alt="의자"
            />
          </div>
          <div className={css.subPicture}>
            <img
              className={css.subImage}
              src="https://cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png"
              alt="러그"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
