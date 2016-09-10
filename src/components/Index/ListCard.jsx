import React, { Component, PropTypes } from 'react';
import { Card } from 'antd';
import styles from './ListCard.less';

const ListCard = ({cardInfo}) => {
  window.m = cardInfo
  var linkList = cardInfo.list
  var min = Math.min(linkList.length, 6);
  var list = new Array();
  for (var i=0; i<min; i++) {
    list.push(
      <li><a href={linkList[0].link}>{linkList[i].title}</a></li>
    )
  }
  return(
    <Card title= {cardInfo.title} extra={<a href={cardInfo.moreLink}>More</a>} className={styles.card}>
      <ul className={styles.cardList}>
        {list}
      </ul>
    </Card>
  );
};

export default ListCard;
