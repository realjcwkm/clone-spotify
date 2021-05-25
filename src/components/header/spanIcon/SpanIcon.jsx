
import { DivSpanIcon, ASpanIcon, Span, ImgIcon } from './styles';

export default function SpanIcon() {
  return (
    <DivSpanIcon>
      <ASpanIcon href="https://www.spotify.com/br/">
        <Span>
          <ImgIcon src="../../../../whiteicon.svg" alt="logo"/>
          Spotify
        </Span>
      </ASpanIcon>
    </DivSpanIcon>
  );
};
