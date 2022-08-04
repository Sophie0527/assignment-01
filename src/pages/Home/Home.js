import React, { useState, useEffect } from 'react';
import css from './Home.module.scss';
import styled from 'styled-components';

function Home() {
  const [productInfo, setProductInfo] = useState([]);
  const productLists = productInfo.productList;

  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, [setProductInfo, productLists]);

  const [search, setSearch] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleSearch = index => {
    const tmp = [false, false, false, false, false, false, false];
    if (!search[index]) {
      tmp[index] = true;
    }
    setSearch(tmp);
  };

  const searchIcon = '//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png';
  const XIcon = '//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png';
  const triangleIcon =
    'https://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png';
  const moveIcon =
    'https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png';

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
          {productLists?.map((productLists, index) => {
            return (
              <Button
                pointX={productLists.pointX}
                pointY={productLists.pointY}
                className={css.buttonBox}
                onClick={() => handleSearch(index)}
                key={productLists.productId}
              >
                {!search[index] ? (
                  <img src={searchIcon} alt="돋보기아이콘" />
                ) : (
                  <div>
                    <img src={XIcon} alt="취소아이콘" />
                    <img src={triangleIcon} alt="세모아이콘" />
                    <span className={css.toolTip}>
                      <img
                        src={productLists.imageUrl}
                        alt={productLists.productName}
                      />
                      <div className={css.desc}>
                        <span>{productLists.productName}</span>
                        <div className={css.price}>
                          <div className={css.discount}>
                            {productLists.outside === true ? (
                              <div className={css.estimatedPrice}>예상가</div>
                            ) : (
                              <span>{productLists.discountRate}%</span>
                            )}
                            {productLists.priceDiscount}
                          </div>
                        </div>
                      </div>
                      <div className={css.moveIcon}>
                        <img src={moveIcon} alt="이동아이콘" />
                      </div>
                    </span>
                  </div>
                )}
              </Button>
            );
          })}
        </figure>

        <div className={css.wrapVertical}>
          {productLists?.map((productLists, index) => {
            return (
              <div className={css.subPicture} key={productLists.productId}>
                <div
                  className={
                    !search[index] ? css.subImageBox : css.subImageBoxPoint
                  }
                  onClick={() => handleSearch(index)}
                >
                  <img
                    className={css.subImage}
                    src={productLists.imageUrl}
                    alt={productLists.productName}
                  />
                  {productLists.discountRate !== 0 ? (
                    <div className={css.discountIconBox}>
                      <img
                        className={css.discountIcon}
                        src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                        alt="할인북마크아이콘"
                      />
                      <span className={css.discountPrice}>
                        {productLists.discountRate}
                        <span className={css.percent}>%</span>
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
const Button = styled.div`
  top: ${props => props.pointX * 1.6}px;
  left: ${props => props.pointY * 1.6}px;
`;

export default Home;
