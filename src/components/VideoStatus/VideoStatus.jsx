import React from 'react';
import copy from '../../assets/copy.svg';
import copy2 from '../../assets/copy-2.svg';
import styles from './VideoStatus.module.css';
import Button from '../../components/Button/Button';
function VideoStatus() {
  return (
    <div>
      <h1>Your video is ready!</h1>

      <div className={styles.vidName}>
        <h2>Name</h2>
        <p>
          {' '}
          <a href='/'>Untitled_Video_20232509</a>
          <span>
            <img src={copy} alt='copy-icon' />
          </span>
        </p>
      </div>

      <form>
        <input type='email' placeholder='enter email of receiver' />
        <Button>Send</Button>
      </form>

      <div>
        <h2>Video Url</h2>
        <div>
          <a href='/'>https://www.helpmeout/Untitled_Video_20232509</a>
          <Button>
            <span>
              <img src={copy2} alt='copy' />
            </span>
            Send
          </Button>
        </div>
      </div>

      <div>
        <p>Share your video</p>
        <div>
            <p><span></span>Facebook</p>
            <p><span></span>Whatsapp</p>  <p><span></span>Telegram</p>

        </div>
      </div>
    </div>
  );
}

export default VideoStatus;
