import React from "react";
import { SearchImgs, SaveImgs } from "./imports/screens";
import { NavBar } from "./imports/components";

function App() {
  const [screen, setScreen] = React.useState({
    search: true,
    save: false,
  });

  React.useEffect(() => {
    setScreen({
      search: true,
      save: false,
    });
  }, []);

  return (
    <div className="bg-blue-200 w-screen h-screen">
      <NavBar set={setScreen} />
      <div className="p-4">{screen.search ? <SearchImgs /> : <SaveImgs />}</div>
    </div>
  );
}

export default App;
