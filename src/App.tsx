import "./styles/App.css";
import { Fragment } from "react";
import PageContainer from "./home-page/PageContainer.tsx";
import PageWrapper from "./page-content/PageWrapper.tsx";
import { PageContextProvider } from "./context/PageProvider.tsx";
import { HomePage } from "./home-page/HomePage.tsx";

const App = () => {
  return (
    <Fragment>
      <PageContextProvider>
        <div className={"background-image"}>
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
