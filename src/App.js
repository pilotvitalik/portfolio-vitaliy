import Main from 'views/Main/Main';
import TableContents from 'views/TableContents/TableContents';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Main />}/>
        <Route index path="table-contents" element={<TableContents />}/>
      </Routes>
    </div>
  );
}

export default App;
