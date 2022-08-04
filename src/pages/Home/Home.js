import React, { useState, useEffect } from 'react';
import css from './Home.module.scss';

function Home() {
  const [productInfo, setProductInfo] = useState([]);
  const productLists = productInfo.productList;
  // console.log(productLists);
  // console.log(productInfo);
  // console.log(productLists[0].productName);

  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, [setProductInfo, productLists]);

  const [search01, setSearch01] = useState(false);
  const [search02, setSearch02] = useState(false);
  const [search03, setSearch03] = useState(false);
  const [search04, setSearch04] = useState(false);
  const [search05, setSearch05] = useState(false);
  const [search06, setSearch06] = useState(false);
  const [search07, setSearch07] = useState(false);

  // const handleSearch = () => {
  //   if (productLists.indexOf(v => v.productId === 219762)) {
  //     handleSearch01();
  //   } else if (productLists.indexOf(v => v.productId === 83544)) {
  //     handleSearch02();
  //   } else {
  //     handleSearch03();
  //   }
  // };

  const handleSearch01 = () => {
    setSearch01(!search01);
    if (search01 === true || search01 === false) {
      setSearch02(false);
      setSearch03(false);
      setSearch04(false);
      setSearch05(false);
      setSearch06(false);
      setSearch07(false);
    }
  };

  const handleSearch02 = () => {
    setSearch02(!search02);
    if (search02 === true || search02 === false) {
      setSearch01(false);
      setSearch03(false);
      setSearch04(false);
      setSearch05(false);
      setSearch06(false);
      setSearch07(false);
    }
  };
  const handleSearch03 = () => {
    setSearch03(!search03);
    if (search03 === true || search03 === false) {
      setSearch01(false);
      setSearch02(false);
      setSearch04(false);
      setSearch05(false);
      setSearch06(false);
      setSearch07(false);
    }
  };
  const handleSearch04 = () => {
    setSearch04(!search04);
    if (search04 === true || search04 === false) {
      setSearch01(false);
      setSearch02(false);
      setSearch03(false);
      setSearch05(false);
      setSearch06(false);
      setSearch07(false);
    }
  };
  const handleSearch05 = () => {
    setSearch05(!search05);
    if (search05 === true || search05 === false) {
      setSearch01(false);
      setSearch02(false);
      setSearch03(false);
      setSearch04(false);
      setSearch06(false);
      setSearch07(false);
    }
  };
  const handleSearch06 = () => {
    setSearch06(!search06);
    if (search06 === true || search06 === false) {
      setSearch01(false);
      setSearch02(false);
      setSearch03(false);
      setSearch04(false);
      setSearch05(false);
      setSearch07(false);
    }
  };
  const handleSearch07 = () => {
    setSearch07(!search07);
    if (search07 === true || search07 === false) {
      setSearch01(false);
      setSearch02(false);
      setSearch03(false);
      setSearch04(false);
      setSearch05(false);
      setSearch06(false);
    }
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

          {/* 애틱 타일 이지케어 발수러그 */}
          <div className={css.tagRug} onClick={handleSearch01}>
            {!search01 ? (
              <img src={searchIcon} alt="돋보기아이콘" />
            ) : (
              <div>
                <img src={XIcon} alt="취소아이콘" />
                <img src={triangleIcon} alt="세모아이콘" />
                <span className={css.toolTip}>
                  <img
                    src={productLists[0].imageUrl}
                    alt={productLists[0].productName}
                  />
                  <div className={css.desc}>
                    <span>{productLists[0].productName}</span>
                    <div className={css.price}>
                      <div className={css.discount}>
                        {productLists[0].outside === true ? (
                          <div className={css.estimatedPrice}>예상가</div>
                        ) : (
                          <span>{productLists[0].discountRate}%</span>
                        )}
                        {productLists[0].priceDiscount}
                      </div>
                    </div>
                  </div>
                  <div className={css.moveIcon}>
                    <img src={moveIcon} alt="이동아이콘" />
                  </div>
                </span>
              </div>
            )}
          </div>

          {/* 플로윙 화이트 원형 테이블 */}
          <div className={css.tagTable} onClick={handleSearch02}>
            {!search02 ? (
              <img src={searchIcon} alt="돋보기아이콘" />
            ) : (
              <div className={css.select}>
                <img src={XIcon} alt="취소아이콘" />
                <img src={triangleIcon} alt="세모아이콘" />
                <span className={css.toolTip}>
                  <img
                    src={productLists[1].imageUrl}
                    alt={productLists[1].productName}
                  />
                  <div className={css.desc}>
                    <span>{productLists[1].productName}</span>
                    <div className={css.price}>
                      <div className={css.discount}>
                        {productLists[1].outside === true ? (
                          <div className={css.estimatedPrice}>예상가</div>
                        ) : (
                          <span>{productLists[1].discountRate}%</span>
                        )}
                        {productLists[1].priceDiscount}
                      </div>
                    </div>
                  </div>
                  <div className={css.moveIcon}>
                    <img src={moveIcon} alt="이동아이콘" />
                  </div>
                </span>
              </div>
            )}
          </div>

          {/* 트리니 벽난로콘솔 */}
          <div className={css.tagFireplace} onClick={handleSearch03}>
            {!search03 ? (
              <img src={searchIcon} alt="돋보기아이콘" />
            ) : (
              <div>
                <img src={XIcon} alt="취소아이콘" />
                <img src={triangleIcon} alt="세모아이콘" />
                <span className={css.toolTip}>
                  <img
                    src={productLists[2].imageUrl}
                    alt={productLists[2].productName}
                  />
                  <div className={css.desc}>
                    <span>{productLists[2].productName}</span>
                    <div className={css.price}>
                      <div className={css.discount}>
                        {productLists[2].outside === true ? (
                          <div className={css.estimatedPrice}>예상가</div>
                        ) : (
                          <span>{productLists[2].discountRate}%</span>
                        )}
                        {productLists[2].priceDiscount}
                      </div>
                    </div>
                  </div>
                  <div className={css.moveIcon}>
                    <img src={moveIcon} alt="이동아이콘" />
                  </div>
                </span>
              </div>
            )}
          </div>

          {/* 루아 자수 레이스 커튼 */}
          <div className={css.tagCurtain} onClick={handleSearch04}>
            {!search04 ? (
              <img src={searchIcon} alt="돋보기아이콘" />
            ) : (
              <div>
                <img src={XIcon} alt="취소아이콘" />
                <img src={triangleIcon} alt="세모아이콘" />
                <span className={css.toolTip}>
                  <img
                    src={productLists[3].imageUrl}
                    alt={productLists[3].productName}
                  />
                  <div className={css.desc}>
                    <span>{productLists[3].productName}</span>
                    <div className={css.price}>
                      <div className={css.discount}>
                        {productLists[3].outside === true ? (
                          <div className={css.estimatedPrice}>예상가</div>
                        ) : (
                          <span>{productLists[3].discountRate}%</span>
                        )}
                        {productLists[3].priceDiscount}
                      </div>
                    </div>
                  </div>
                  <div className={css.moveIcon}>
                    <img src={moveIcon} alt="이동아이콘" />
                  </div>
                </span>
              </div>
            )}
          </div>

          {/* TÄLLBYN 텔뷘 */}
          <div className={css.tagLamp} onClick={handleSearch05}>
            {!search05 ? (
              <img src={searchIcon} alt="돋보기아이콘" />
            ) : (
              <div>
                <img src={XIcon} alt="취소아이콘" />
                <img src={triangleIcon} alt="세모아이콘" />
                <span className={css.toolTip}>
                  <img
                    src={productLists[4].imageUrl}
                    alt={productLists[4].productName}
                  />
                  <div className={css.desc}>
                    <span>{productLists[4].productName}</span>
                    <div className={css.price}>
                      <div className={css.discount}>
                        {productLists[4].outside === true ? (
                          <div className={css.estimatedPrice}>예상가</div>
                        ) : (
                          <span>{productLists[4].discountRate}%</span>
                        )}
                        {productLists[4].priceDiscount}
                      </div>
                    </div>
                  </div>
                  <div className={css.moveIcon}>
                    <img src={moveIcon} alt="이동아이콘" />
                  </div>
                </span>
              </div>
            )}
          </div>

          {/* GRUET 사이드테이블/트롤리 시리즈 */}
          <div className={css.tagTrolley} onClick={handleSearch06}>
            {!search06 ? (
              <img src={searchIcon} alt="돋보기아이콘" />
            ) : (
              <div>
                <img src={XIcon} alt="취소아이콘" />
                <img src={triangleIcon} alt="세모아이콘" />
                <span className={css.toolTip}>
                  <img
                    src={productLists[5].imageUrl}
                    alt={productLists[5].productName}
                  />
                  <div className={css.desc}>
                    <span>{productLists[5].productName}</span>
                    <div className={css.price}>
                      <div className={css.discount}>
                        {productLists[5].outside === true ? (
                          <div className={css.estimatedPrice}>예상가</div>
                        ) : (
                          <span>{productLists[5].discountRate}%</span>
                        )}
                        {productLists[5].priceDiscount}
                      </div>
                    </div>
                  </div>
                  <div className={css.moveIcon}>
                    <img src={moveIcon} alt="이동아이콘" />
                  </div>
                </span>
              </div>
            )}
          </div>

          {/* 마크라메 자개모빌 풍성형 */}
          <div className={css.tagMobile} onClick={handleSearch07}>
            {!search07 ? (
              <img src={searchIcon} alt="돋보기아이콘" />
            ) : (
              <div>
                <img src={XIcon} alt="취소아이콘" />
                <img src={triangleIcon} alt="세모아이콘" />
                <span className={css.toolTip}>
                  <img
                    src={productLists[6].imageUrl}
                    alt={productLists[6].productName}
                  />
                  <div className={css.desc}>
                    <span>{productLists[6].productName}</span>
                    <div className={css.price}>
                      <div className={css.discount}>
                        {productLists[6].outside === true ? (
                          <div className={css.estimatedPrice}>예상가</div>
                        ) : (
                          <span>{productLists[6].discountRate}%</span>
                        )}
                        {productLists[6].priceDiscount}
                      </div>
                    </div>
                  </div>
                  <div className={css.moveIcon}>
                    <img src={moveIcon} alt="이동아이콘" />
                  </div>
                </span>
              </div>
            )}
          </div>
        </figure>

        <div className={css.wrapVertical}>
          {/* {productLists?.map(productLists => {
            return (
              <div className={css.subPicture} key={productLists.productId}>
                <div className={css.subImageBox}>
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
          })} */}

          {/* <div className={css.subPicture} onClick={handleSearch01}>
            <div className={!search01 ? css.subImageBox : css.subImageBoxPoint}>
              <img
                className={css.subImage}
                src={productLists[0].imageUrl}
                alt={productLists[0].productName}
              />
              {productLists[0].discountRate !== 0 ? (
                <div className={css.discountIconBox}>
                  <img
                    className={css.discountIcon}
                    src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                    alt="할인북마크아이콘"
                  />
                  <span className={css.discountPrice}>
                    {productLists[0].discountRate}
                    <span className={css.percent}>%</span>
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          <div className={css.subPicture} onClick={handleSearch02}>
            <div className={!search02 ? css.subImageBox : css.subImageBoxPoint}>
              <img
                className={css.subImage}
                src={productLists[1].imageUrl}
                alt={productLists[1].productName}
              />
              {productLists[1].discountRate !== 0 ? (
                <div className={css.discountIconBox}>
                  <img
                    className={css.discountIcon}
                    src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                    alt="할인북마크아이콘"
                  />
                  <span className={css.discountPrice}>
                    {productLists[1].discountRate}
                    <span className={css.percent}>%</span>
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          <div className={css.subPicture} onClick={handleSearch03}>
            <div className={!search03 ? css.subImageBox : css.subImageBoxPoint}>
              <img
                className={css.subImage}
                src={productLists[2].imageUrl}
                alt={productLists[2].productName}
              />
              {productLists[2].discountRate !== 0 ? (
                <div className={css.discountIconBox}>
                  <img
                    className={css.discountIcon}
                    src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                    alt="할인북마크아이콘"
                  />
                  <span className={css.discountPrice}>
                    {productLists[2].discountRate}
                    <span className={css.percent}>%</span>
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          <div className={css.subPicture} onClick={handleSearch04}>
            <div className={!search04 ? css.subImageBox : css.subImageBoxPoint}>
              <img
                className={css.subImage}
                src={productLists[3].imageUrl}
                alt={productLists[3].productName}
              />
              {productLists[3].discountRate !== 0 ? (
                <div className={css.discountIconBox}>
                  <img
                    className={css.discountIcon}
                    src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                    alt="할인북마크아이콘"
                  />
                  <span className={css.discountPrice}>
                    {productLists[3].discountRate}
                    <span className={css.percent}>%</span>
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          <div className={css.subPicture} onClick={handleSearch05}>
            <div className={!search05 ? css.subImageBox : css.subImageBoxPoint}>
              <img
                className={css.subImage}
                src={productLists[4].imageUrl}
                alt={productLists[4].productName}
              />
              {productLists[4].discountRate !== 0 ? (
                <div className={css.discountIconBox}>
                  <img
                    className={css.discountIcon}
                    src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                    alt="할인북마크아이콘"
                  />
                  <span className={css.discountPrice}>
                    {productLists[4].discountRate}
                    <span className={css.percent}>%</span>
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          <div className={css.subPicture} onClick={handleSearch06}>
            <div className={!search06 ? css.subImageBox : css.subImageBoxPoint}>
              <img
                className={css.subImage}
                src={productLists[5].imageUrl}
                alt={productLists[5].productName}
              />
              {productLists[5].discountRate !== 0 ? (
                <div className={css.discountIconBox}>
                  <img
                    className={css.discountIcon}
                    src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                    alt="할인북마크아이콘"
                  />
                  <span className={css.discountPrice}>
                    {productLists[5].discountRate}
                    <span className={css.percent}>%</span>
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          <div className={css.subPicture} onClick={handleSearch07}>
            <div className={!search07 ? css.subImageBox : css.subImageBoxPoint}>
              <img
                className={css.subImage}
                src={productLists[6].imageUrl}
                alt={productLists[6].productName}
              />
              {productLists[6].discountRate !== 0 ? (
                <div className={css.discountIconBox}>
                  <img
                    className={css.discountIcon}
                    src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                    alt="할인북마크아이콘"
                  />
                  <span className={css.discountPrice}>
                    {productLists[6].discountRate}
                    <span className={css.percent}>%</span>
                  </span>
                </div>
              ) : null}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
