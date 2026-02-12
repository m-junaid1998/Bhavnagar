import Carousels from "../../pages/Carousels";
import CommitteesSection from "../../pages/CommitteesSection";

import ServicesGrid from "../../pages/ServicesGrid";

const HomePage: React.FC = () => {
  return (
    <>
      <Carousels />
      <ServicesGrid />
      <CommitteesSection />
    </>
  );
};

export default HomePage;
