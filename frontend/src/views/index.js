import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import './components/component.css';

function Index() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Index;