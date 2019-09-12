import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteLog, setCurrent } from '../../actions/logActions';

const LogItem = ({
  log: { attention, date, id, message, tech },
  log,
  deleteLog,
  setCurrent
}) => {
  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: `Log with ID# ${id} has been removed` });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${attention ? 'red-text' : 'blue-test'}`}
          onClick={() => setCurrent(log)}
        >
          {message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{id}</span> last updated by{' '}
          <span className='black-text'>{tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLog, setCurrent }
)(LogItem);
