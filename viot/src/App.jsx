import React from 'react';
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/about';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Header from './component/header';
import PrivateRoute from './component/privateRoute';
import AdminPrivateRoute from './component/adminPrivateRoute';
import CreatePost from './pages/createPost';
import Faculty from './pages/faculty';
import PostPage from './pages/PostPage';
import Footer from './pages/Footer';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/home'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/faculty' element={<Faculty/>}/>

      <Route element={<PrivateRoute/>}>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Route>
      <Route element={<AdminPrivateRoute/>}>
        <Route path='/create-post' element={<CreatePost/>}/>
      </Route>

      <Route path='/post/:postSlug' element={<PostPage/>}/>
 
    </Routes>

    <Footer/>

    </BrowserRouter>
    
  )
}
