
import Footer from "./Footer";
import Header from "./Header";
const LayOute = ({children}) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default LayOute;
