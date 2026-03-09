import History from "../components/History/History";
import Feature from "../components/Feature/Feature";
import { featureAboutUs } from "../components/Feature/feature-data";
import Gallery from "../components/History/Gallery";  

const AboutUsPage = () => {
  return (
    <>
      <History />
      <Feature data={featureAboutUs} />
        <Gallery /> 
    </>
  );
};

export default AboutUsPage;
