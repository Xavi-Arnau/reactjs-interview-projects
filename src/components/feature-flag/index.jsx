import { useContext } from "react";
import Accordion from "../accordion";
import TabTest from "../custom-tabs";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];
  if (loading) {
    return <h1>Loading data! Please wait</h1>;
  }

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((item) =>
        checkEnabledFlags(item.key) ? item.component : null
      )}
    </div>
  );
}
