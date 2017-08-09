import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ArticleCard = props => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <p>Upvotes:</p>
        {props.votes}
      </div>
      <div className="media-content">
        <div className="content">
          <NavLink to={`/article/${props.id}`} className="title is-3">{props.title}</NavLink>
        </div>
      </div>
    </article>
  </div>
  );

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ArticleCard;
