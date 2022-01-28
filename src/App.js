import logo from './logo.svg';
import './App.css';
import InputComment from "./components/InputComment"
import ListComment from './components/ListComment';
import { Route, Routes, BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" />

          {/* <Route path="/InputTodo" exact element={<InputTodo />} />
          <Route path="/ListTodo" exact element={<ListTodo />} /> */}

        </Routes>
      </BrowserRouter>
      <InputComment />
      <ListComment />
    </div>
  );
}

export default App;
