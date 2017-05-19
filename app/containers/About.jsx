import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About pickmydinner</h1>
      <div className={cx('description')}>
      </div>
    </div>
  );
};

export default About;
