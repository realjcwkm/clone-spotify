import './styles.css';
import HeaderSpotify from '../../components/header/HeaderSpotify';
import Dashboard from '../../components/dashboard/Dashboard';
import Footer from '../../components/footer/Footer';

function Main() {
  return (
    <div className="Main">
      <HeaderSpotify/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default Main;
