import React from 'react';
import PropTypes from 'prop-types';

import styles from './YoutubeEmbed.module.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles.movieCard}>
    <div className={styles.videoFrame}>
      <iframe
        width="240"
        height="200"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
