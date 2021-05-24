import styled from 'styled-components';

export const DivContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 400px;
`;

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  background: #4c4c4c;

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
