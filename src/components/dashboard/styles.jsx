import styled from "styled-components";

export const DivDashboard = styled.div`
  background-color: rgb(41, 65, 171);
  background-image: url('../../../bursts.svg');
  background-size: 175%;
  background-position: 46% 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 980px;


  @media (min-width: 1200px, min-width: 1920px){
    background-size: 170%;
    background-position: 44% 7%;
  }
`;

export const DivContainerDashboard = styled.div`
  color: #1ed760;
`;

export const H1Dashboard = styled.h1`
position: relative;
font-size: 156px;
color: #1ed760;
left: -125px;
letter-spacing: -8px;
`;

export const PDashboard = styled.p`
  font-size: 17px;
  line-height: 24px;
  padding-bottom: 40px;
`;

export const ButtonDashboard = styled.a`
  background-color: #1ed760;
  color: #2941AB;
  font-size: 14px;
  padding: 15px 25px;
  border-radius: 25px;
`;