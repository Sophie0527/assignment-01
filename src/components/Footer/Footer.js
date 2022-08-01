import React from 'react';
import css from './Footer.module.scss';
// import { Link } from 'react-router-dom';

function Footer() {
  //   const alert = e => {
  //     alert('dkff');
  //   };
  return (
    <div className={css.container}>
      <div className={css.owner}>
        <div className={css.ownerProfile}>
          <img
            src="//cdn.ggumim.co.kr/storage/20220315122950yeg0WL7VaB.png"
            alt="profile"
          />
        </div>
        <div className={css.ownerName}>sysysyning</div>
        <div className={css.ownerSNS}>
          <img
            src="//cdn.ggumim.co.kr/storage/202202151721086LuWpRcD0t.png"
            alt="SNS"
          />
        </div>
      </div>
      <div className={css.comment}>
        <div
          className={css.commentWrite}
          onClick={() => alert('로그인이 필요합니다.')}
        >
          <div className={css.input}>
            @닉네임으로 태그하여 댓글을 남겨보세요
          </div>
          <div className={css.submit}>등록</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
