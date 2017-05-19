import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TopicTextInput from '../components/TopicTextInput';
import styles from '../css/components/entrybox';

const cx = classNames.bind(styles);

const EntryBox = ({onEntryChange, onEntrySave, topic}) => {
  return (
    <div className={cx('entrybox')}>
      <h1 className={cx('header')}>Add restaurants</h1>
      <TopicTextInput
        className={cx('input')}
        value={topic}
        placeholder="Enter a name, address, etc."
        onEntryChange={onEntryChange}
        onEntrySave={onEntrySave} />
    </div>
  );
};

EntryBox.propTypes = {
  topic: PropTypes.string,
  onEntryChange: PropTypes.func.isRequired,
  onEntrySave: PropTypes.func.isRequired
};

export default EntryBox;
