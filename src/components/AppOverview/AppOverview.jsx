import React from 'react';
import styles from './AppOverview.module.css';
import Card from '../Card/Card';
import recVector from '../../assets/rec-vector.svg';
const AppOverviewContents = [
  {
    head: 'Record Screen',
    paragraph:
      'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
  },
  {
    head: 'Share Your Recording',
    paragraph:
      'We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.',
  },
  {
    head: 'Learn Effortlessly',
    paragraph:
      'Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.',
  },
];

function AppOverview() {
  return (
    <div className={styles.appOverview} id='howTo'>
      <h2>How it works</h2>

      <div className={styles.work}>
        <div>
          {AppOverviewContents.map((content, index) => (
            <Card
              key={index}
              head={content.head}
              paragraph={content.paragraph}
              cardContentClass={styles.cardContent}
              src={recVector}
              position='column-reverse'
            >
              <p className={styles.number}>{index + 1}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppOverview;
