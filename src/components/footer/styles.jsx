import styled from 'styled-components';

export const DivContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  color: white;
`;

export const DivCenterFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 6em 0 3em;
`;

export const NavFooter = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivSpotifyIcon = styled.div``;

export const DivFooterDlItems = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-right: 60px;
`;

export const Dt = styled.dt`
  display: inline;
  list-style-type: none;
  margin: 10px;
  color: #919496;
  font-size: 12px;
`;

export const DD = styled.dd`
  list-style-type: none;
  font-size: 14px;
  margin: 10px;
`;

export const DDa = styled.a`
  text-decoration: none;
  color: white;
  font-weight: regular;
  :hover {
    color: #1ed760;
    cursor: pointer;
  }
`;

export const DivFooterFollowUs = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 8em;
`;

export const Li = styled.li`
  display: inline-block;
  list-style-type: none;
  margin-right: 15px;
`;

export const AFollowUs = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  text-decoration: none;
  color: white;
  background: #222326;

  width: 48px;
  height: 48px;

  :hover {
    color: #1ed760;
    cursor: pointer;
  }
`;

export const SpanFollowUs = styled.span`
  width: 24px;
  height: 24px;
  background: no-repeat url(${(props) => props.urlimg}) white;
  text-indent: -9999px;
  white-space: nowrap;
  overflow: hidden;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3em 0 4em;
`;

export const ContainerInfoFirst = styled.div`
  align-self: flex-end;
  justify-content: end;

  margin: 0.5em 0;
`;

export const ARegion = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1em 0;

  font-size: 0.7em;

  text-decoration: none;
  color: #919496;

  :hover {
    color: #1ed760;
    cursor: pointer;
  }
`;

export const ImgIconRegion = styled.img`
  padding: 0 8px 2px;
  width: 12px;
  height: 12px;
`;

export const ContainerInfoLast = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AInfo = styled.a`
  font-size: 0.7em;

  text-decoration: none;
  color: #919496;
  padding: 0 1em;

  &:first-child {
    padding-left: 0;
  }

  :hover {
    color: #1ed760;
    cursor: pointer;
  }
`;

export const SpanYear = styled.span`
  font-size: 0.7em;

  text-decoration: none;
  color: #919496;
`;
