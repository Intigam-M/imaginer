import { HomePageContainer } from "@/containers/home-page-container";
import { HomepageContextProvider } from "@/containers/home-page-container/use-homepage";

function HomePage() {
  return (
    <HomepageContextProvider>
      <HomePageContainer />
    </HomepageContextProvider>
  );
}

export default HomePage;