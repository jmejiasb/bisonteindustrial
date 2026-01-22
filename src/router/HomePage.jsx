import Header from "../components/Header/Header";
import Feature from "../components/Feature/Feature";
import Details from "../components/Details/Details";
import { featureHome } from "../components/Feature/feature-data";
import Services from "../components/Services/Services";
import Package from "../components/Package/Package";

const HomePage = () => {
  return (
    <>
      <Header />
      <Feature data={featureHome}/>
      <Details />
      <Services />
      <Package />
    </>
  );
};

export default HomePage;
