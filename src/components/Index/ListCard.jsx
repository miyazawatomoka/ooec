import React, { Component, PropTypes } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router';
import styles from './ListCard.less';

const ListCard = ({cardInfo}) => {
  window.m = cardInfo
  var linkList = cardInfo.list
  var min = Math.min(linkList.length, 6);
  var list = new Array();
  for (var i=0; i<min; i++) {
    list.push(
      <li><Link to={linkList[0].link}>{linkList[i].title}</Link></li>
    )
  }
  return(
    <Card title= {cardInfo.title} extra={<Link to={cardInfo.moreLink}>More</Link>} className={styles.card}>
      <ul className={styles.cardList}>
        {list}
      </ul>
    </Card>
  );
};

export default ListCard;
