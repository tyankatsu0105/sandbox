import { Header,Footer,Sidebar } from "./shared";
import { MainPage } from "./pages/main";

export const App = () => (
  <>
    <Header />
    <Sidebar />
      <MainPage />
    <Footer />
  </>
)