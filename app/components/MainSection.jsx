import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TopicItem from '../components/TopicItem';
import styles from '../css/components/main-section';

const cx = classNames.bind(styles);

const MainSection = ({ topics, onIncrement, onDecrement, onDestroy }) => {
  const topicItems = topics.map((topic, key) => {
    return (
      <TopicItem
        index={key}
        id={topic.id}
        key={key}
        text={topic.text}
        incrementCount={onIncrement}
        decrementCount={onDecrement}
        destroyTopic={onDestroy} />);
  });

  return (
    <div className={cx('main-section')}>
    </div>
  );
};

MainSection.propTypes = {
  topics: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default MainSection;
