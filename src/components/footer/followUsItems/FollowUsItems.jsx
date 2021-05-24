/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { DivFooterFollowUs, Li, AFollowUs, SpanFollowUs } from '../styles';

export default function FollowUsItems() {
  return (
    <DivFooterFollowUs>
      <ul>
        <Li>
          <AFollowUs href="https://instagram.com/spotify">
            <SpanFollowUs urlimg="../../../../instagram.svg">
              Instagram
            </SpanFollowUs>
          </AFollowUs>
        </Li>
        <Li>
          <AFollowUs href="https://twitter.com/spotify">
            <SpanFollowUs urlimg="../../../../twitter.svg">
              Twitter
            </SpanFollowUs>
          </AFollowUs>
        </Li>
        <Li>
          <AFollowUs href="https://www.facebook.com/Spotify">
            <SpanFollowUs urlimg="../../../../facebook.svg">
              Facebook
            </SpanFollowUs>
          </AFollowUs>
        </Li>
      </ul>
    </DivFooterFollowUs>
  );
}
