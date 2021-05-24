import React from 'react';
import { ASpanIcon, ImgIcon, Span } from '../header/spanIcon/styles';
import DlItems from './dlItems/DlItems';
import FollowUsItems from './followUsItems/FollowUsItems';
import {
  DivContainerFooter,
  ContainerFooter,
  DivFooterDlItems,
  DivSpotifyIcon,
} from './styles';

function Footer() {
  const links1 = [
    'https://www.spotify.com/br/about-us/contact/',
    'https://www.spotifyjobs.com/',
    'https://newsroom.spotify.com/',
  ];

  const descLinks1 = ['Sobre', 'Empregos', 'For the Record'];

  const links2 = [
    'https://artists.spotify.com/',
    'https://developer.spotify.com/',
    'https://ads.spotify.com/',
    'https://investors.spotify.com/',
    'https://spotifyforvendors.com/',
  ];

  const descLinks2 = [
    'Para Artistas',
    'Desenvolvedores',
    'Publicidade',
    'Investidores',
    'Fornecedores',
  ];

  const links3 = [
    'https://support.spotify.com/',
    'https://open.spotify.com/',
    'https://www.spotify.com/br/free/',
  ];

  const descLinks3 = ['Suporte', 'Player da Web', 'Aplicativo móvel grátis'];

  return (
    <DivContainerFooter>
      <ContainerFooter>
        <DivSpotifyIcon>
          <ASpanIcon href="https://www.spotify.com/br/">
            <Span>
              <ImgIcon src="../../../../whiteicon.svg" alt="logo" />
              Spotify
            </Span>
          </ASpanIcon>
        </DivSpotifyIcon>
        <DivFooterDlItems>
          <DlItems desc="EMPRESA" links={links1} descLinks={descLinks1} />
          <DlItems desc="COMUNIDADES" links={links2} descLinks={descLinks2} />
          <DlItems desc="LINKS ÚTEIS" links={links3} descLinks={descLinks3} />
        </DivFooterDlItems>
        <FollowUsItems />
      </ContainerFooter>
    </DivContainerFooter>
  );
}

export default Footer;
