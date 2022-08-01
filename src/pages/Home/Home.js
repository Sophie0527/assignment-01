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

  const [search01, setSearch01] = useState(false);
  const [search02, setSearch02] = useState(false);
  const [search03, setSearch03] = useState(false);
  const [search04, setSearch04] = useState(false);
  const [search05, setSearch05] = useState(false);
  const [search06, setSearch06] = useState(false);
  const [search07, setSearch07] = useState(false);
  const [search08, setSearch08] = useState(false);
  const [search09, setSearch09] = useState(false);

  const handleSearch01 = () => {
    setSearch01(!search01);
  };
  const handleSearch02 = () => {
    setSearch02(!search02);
  };
  const handleSearch03 = () => {
    setSearch03(!search03);
  };
  const handleSearch04 = () => {
    setSearch04(!search04);
  };
  const handleSearch05 = () => {
    setSearch05(!search05);
  };
  const handleSearch06 = () => {
    setSearch06(!search06);
  };
  const handleSearch07 = () => {
    setSearch07(!search07);
  };
  const handleSearch08 = () => {
    setSearch08(!search08);
  };
  const handleSearch09 = () => {
    setSearch09(!search09);
  };

  const searchIcon = '//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png';
  const XIcon = '//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png';

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
          <div className={css.tag_1} onClick={handleSearch01}>
            {!search01 ? (
              <img src={searchIcon} alt="러그" />
            ) : (
              <img src={XIcon} alt="러그" />
            )}
          </div>
          <div className={css.tag_2} onClick={handleSearch02}>
            {!search02 ? (
              <img src={searchIcon} alt="테이블" />
            ) : (
              <img src={XIcon} alt="테이블" />
            )}
          </div>
          <div className={css.tag_3} onClick={handleSearch03}>
            {!search03 ? (
              <img src={searchIcon} alt="벽난로" />
            ) : (
              <img src={XIcon} alt="벽난로" />
            )}
          </div>
          <div className={css.tag_4} onClick={handleSearch04}>
            {!search04 ? (
              <img src={searchIcon} alt="자수 레이스 커튼" />
            ) : (
              <img src={XIcon} alt="자수 레이스 커튼" />
            )}
          </div>
          <div className={css.tag_5} onClick={handleSearch05}>
            {!search05 ? (
              <img src={searchIcon} alt="스탠드 조명" />
            ) : (
              <img src={XIcon} alt="스탠드 조명" />
            )}
          </div>
          <div className={css.tag_6} onClick={handleSearch06}>
            {!search06 ? (
              <img src={searchIcon} alt="쉬폰 커튼" />
            ) : (
              <img src={XIcon} alt="쉬폰 커튼" />
            )}
          </div>
          <div className={css.tag_7} onClick={handleSearch07}>
            {!search07 ? (
              <img src={searchIcon} alt="의자" />
            ) : (
              <img src={XIcon} alt="의자" />
            )}
          </div>
          <div className={css.tag_8} onClick={handleSearch08}>
            {!search08 ? (
              <img src={searchIcon} alt="이동식 선반" />
            ) : (
              <img src={XIcon} alt="이동식 선반" />
            )}
          </div>
          <div className={css.tag_9} onClick={handleSearch09}>
            {!search09 ? (
              <img src={searchIcon} alt="모빌" />
            ) : (
              <img src={XIcon} alt="모빌" />
            )}
          </div>
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
