import React, { useState, useEffect } from 'react';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeFigure from '../../components/Home/HomeFigure';
import HomeProductList from '../../components/Home/HomeProductList';
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
  }, [setProductInfo]);

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

  return (
    <Container>
      <HomeHeader />
      <ViewContent>
        <HomeFigure
          productInfo={productInfo}
          productLists={productLists}
          search={search}
          handleSearch={handleSearch}
        />
        <HomeProductList
          productLists={productLists}
          search={search}
          handleSearch={handleSearch}
        />
      </ViewContent>
    </Container>
  );
}

const Container = styled.div`
  padding: 110px 0 0 0;
`;

const ViewContent = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0;
`;

export default Home;
