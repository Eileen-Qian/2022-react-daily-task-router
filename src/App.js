import { Fragment } from 'react';
import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  Outlet,
  useParams
} from 'react-router-dom';


// 加入 LogOut 元件
const LogOut = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/login')}>登出</button>
}

const Index = () => {
  return <p>這是 index 頁面 
  </p>;
};
const Todo = () => {
  return <Fragment>
    <p>這是 Todo 頁面 </p>
    <LogOut />
  </Fragment>
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return (
    <div>
      <h2>Post 頁面</h2>
      <Outlet></Outlet>
    </div>
  )
}
const PostId = () => {
  let params = useParams();
  return <p>Post Id: {params.postId}</p>;
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post" end>
            <p>Post 頁面</p>
          </NavLink>
          <NavLink to="/post/1">
            <p>Post 細節頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="todo" element={<Todo />} />
          <Route path="post" element={<Post />}>
            <Route path=":postId" element={<PostId />}></Route>
          </Route>
          <Route path="*" element={ <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
            </main>
            }
            />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
