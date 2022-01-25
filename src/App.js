import logo from './logo.svg';
import './App.css';
import InputTodo from "./components/InputTodo"
import ListTodo from './components/ListTodo';
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
      <InputTodo />
      <ListTodo />
    </div>
  );
}

export default App;
