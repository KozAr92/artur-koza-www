import "./styles/App.css";
import { Fragment } from "react";
import PageContainer from "./home-page/PageContainer.tsx";
import PageWrapper from "./page-content/PageWrapper.tsx";
import { PageContextProvider } from "./context/PageProvider.tsx";
import { HomePage } from "./home-page/HomePage.tsx";
import img from "/images/main-background-2-mobile.jpg"

const App = () => {
  return (
    <Fragment>
      <PageContextProvider>
        <div className={"background-image"}>
          <img src={img} alt="main background" />
          <PageContainer>
            <HomePage />
            <PageWrapper />
          </PageContainer>
        </div>
      </PageContextProvider>
    </Fragment>
  );
};

export default App;
