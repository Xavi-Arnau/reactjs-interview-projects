import Accordion from "./components/accordion";
import TabTest from "./components/custom-tabs";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-button";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div>
      {/*<Accordion />*/}
      {/*<RandomColor />*/}
      {/*<StarRating noOfStars={10} />*/}
      {/*<ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
  />*/}
      {/*<LoadMoreData />*/}
      {/*<TreeView menus={menus} />*/}
      {/*<QRCodeGenerator />*/}
      {/*<LightDarkMode />*/}
      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />*/}
      <TabTest />
    </div>
  );
}

export default App;
