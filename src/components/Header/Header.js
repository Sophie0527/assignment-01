import React from 'react';
import css from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={css.container}>
      <div className={css.headerBox}>
        <div className={css.logo}>
          <Link to="/">
            <img
              src="https://cdn.ggumim.co.kr/storage/202204051459171AgPRwqnvh.png"
              alt="logo"
            />
          </Link>
        </div>
        <ul>
          <li className={css.category}>
            <img
              src="https://cdn.ggumim.co.kr/storage/202204051459052q2QRSpTV9.png"
              alt="icon"
            />
            <span>카테고리</span>
          </li>
          <li className={css.line} />
          <li className={css.menu}>
            <span>스토어</span>
          </li>
          <li className={css.menu}>
            <span>컨텐츠</span>
          </li>
          <li className={css.menu}>
            <span>커뮤니티</span>
          </li>
        </ul>
        <div className={css.headerRight}>
          <div className={css.bookMarkIcon}>
            <img
              src="https://cdn.ggumim.co.kr/storage/20220322174239CIcDjjxrHl.png"
              alt="bookmark-icon"
            />
          </div>
          <div className={css.cartIcon}>
            <img
              src="https://cdn.ggumim.co.kr/storage/20220405154434B4uwWl2qr6.png"
              alt="cart-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
