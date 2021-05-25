import {
  DivDashboard,
  DivContainerDashboard,
  H1Dashboard,
  PDashboard,
  ButtonDashboard,
} from './styles';

function Dashboard() {
  return (
    <DivDashboard>
      <DivContainerDashboard>
        <H1Dashboard>Escutar muda tudo</H1Dashboard>
        <PDashboard>
          Milhões de músicas e podcasts para explorar. E nem precisa de cartão
          de crédito.
        </PDashboard>
        <ButtonDashboard>
          BAIXE O SPOTIFY FREE
        </ButtonDashboard>
      </DivContainerDashboard>
    </DivDashboard>
  );
}

export default Dashboard;
