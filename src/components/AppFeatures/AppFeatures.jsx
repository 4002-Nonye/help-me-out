import React from 'react';
import record from '../../assets/record.svg';
import share from '../../assets/share.svg';
import revisit from '../../assets/revisit.svg';
import videoRepo from '../../assets/video-repo.svg';
import Card from '../Card/Card';
import styles from './AppFeatures.module.css';

const AppFeaturesContent = [
  {
    head: 'Simple Screen Recording',
    paragraph:
      'Effortless screen recording for everyone. Record with ease, no tech expertise required.',
    src: record,
  },

  {
    head: 'Easy-to-Share URL',
    paragraph:
      'Share your recordings instantly with a single link. No attachments, no downloads.',
    src: share,
  },
  {
    head: 'Revisit Recordings',
    paragraph:
      'Access and review your past content effortlessly. Your recordings, always at your fingertips.',
    src: revisit,
  },
];

function AppFeatures() {
  return (
    <div className={styles.appFeat} id='#features'>
      <h2>Features</h2>
      <p className={styles.highlights}>Key Highlights of Our Extension</p>
      <div className={styles.features}>
        <div>
          {AppFeaturesContent.map((content, index) => (
            <Card
              key={index}
              head={content.head}
              paragraph={content.paragraph}
              cardContentClass={styles.cardContent}
              cardWrapperClass={styles.cardWrapper}
              src={content.src}
              position='row'
            />
          ))}
        </div>
        <img src={videoRepo} alt='illustrator' className={styles.illustrator} />
      </div>
    </div>
  );
}

export default AppFeatures;
