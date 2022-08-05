import React from 'react';
import styled from 'styled-components';

function HomeProductList(props) {
  const { productLists, search, handleSearch } = props;

  return (
    <WrapProductList>
      {productLists?.map((productLists, index) => {
        return (
          <ProductList
            key={productLists.productId}
            onClick={() => handleSearch(index)}
          >
            {!search[index] ? (
              <SubImageBox>
                <SubImage
                  src={productLists.imageUrl}
                  alt={productLists.productName}
                />
                {productLists.discountRate !== 0 ? (
                  <DiscountIconBox>
                    <img
                      src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                      alt="할인북마크아이콘"
                    />
                    <DiscountPrice>
                      {productLists.discountRate}
                      <span>%</span>
                    </DiscountPrice>
                  </DiscountIconBox>
                ) : null}
              </SubImageBox>
            ) : (
              <SubImageBoxPoint>
                <SubImage
                  src={productLists.imageUrl}
                  alt={productLists.productName}
                />
                {productLists.discountRate !== 0 ? (
                  <DiscountIconBox>
                    <img
                      src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                      alt="할인북마크아이콘"
                    />
                    <DiscountPrice>
                      {productLists.discountRate}
                      <span>%</span>
                    </DiscountPrice>
                  </DiscountIconBox>
                ) : null}
              </SubImageBoxPoint>
            )}
          </ProductList>
        );
      })}
    </WrapProductList>
  );
}

const WrapProductList = styled.div`
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
`;

const ProductList = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  display: inline-flex;
  margin: 28px 6px;
  cursor: pointer;
`;

const SubImageBox = styled.div`
  position: relative;
  padding: 2px;
  background: white;
`;

const SubImageBoxPoint = styled.div`
  position: relative;
  background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
  padding: 2px;
  border-radius: 18px;
`;

const SubImage = styled.img`
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
`;

const DiscountIconBox = styled.div`
  position: absolute;
  z-index: 100;
  top: 2px;
  right: 8px;
  img {
    width: 25px;
    height: 30px;
  }
`;
const DiscountPrice = styled.span`
  position: absolute;
  z-index: 100;
  right: 0px;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  span {
    padding-left: 0.5px;
    padding-right: 1px;
    font-size: 5px;
  }
`;

export default HomeProductList;
