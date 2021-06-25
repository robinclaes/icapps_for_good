import { PlayCircleFilled } from '@ant-design/icons';
import { Image } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

function VideoPreview({ video, preview }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Wrapper>
      { showVideo
        ? (
          <video autoPlay muted width="100%" src={video}>
            <source src={video} type="video/mp4" />
          </video>
        )
        : (
          <>
            <Image width="100%" src={preview} />
            <Overlay>
              <PlayButton type="button" onClick={() => setShowVideo(true)}><PlayCircleFilled style={{ fontSize: 36, color: '#fff' }} /></PlayButton>
            </Overlay>
          </>
        )}
    </Wrapper>
  );
}

export default VideoPreview;

const Wrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.45);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlayButton = styled.button`
  border: 0;
  background-color: transparent;
`;
