import History from "../components/History/History";
import Feature from "../components/Feature/Feature";
import { featureAboutUs } from "../components/Feature/feature-data";

const AboutUsPage = () => {
  return (
    <>
      <History />
      <Feature data={featureAboutUs} />
    </>
  );
};

export default AboutUsPage;
