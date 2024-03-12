import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-button";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-top-top-and-bottom";
import SearchAutocomplete from "./components/search-autocomplete";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-Fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

function App() {
  return (
    <div className="App">
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
      {/*<TabTest />*/}
      {/*<ModalTest />*/}
      {/*<GithubProfileFinder />*/}
      {/*<SearchAutocomplete />*/}
      {/*<TicTacToe />*/}
      {/*<FeatureFlagGlobalState>
        <FeatureFlags />
</FeatureFlagGlobalState>*/}

      {/*<UseFetchHookTest />*/}
      {/*<UseOnClickOutsideTest />*/}
      {/*<UseWindowResizeTest />*/}
      <ScrollToTopAndBottom />
    </div>
  );
}

export default App;
