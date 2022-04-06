import React from "react";
import AllItems from './component/AllItem';
import ChekboxContext from "./component/ChekboxContext";
import SelectedItem from './component/SelectedItem';

function App() {
  return (
    <>
      <ChekboxContext>
        <div className="d-flex container">
          <AllItems />
          <SelectedItem />
        </div>
      </ChekboxContext>
    </>
  );
}
export default App;
