import './App.css';
import { useEffect } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { SearchBox } from './components/SearchBox/SearchBox';
import { useDispatch } from 'react-redux';

import { AppBar } from './components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { Suspense } from 'react';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { current } from './redux/auth/operations';
import PrivatRoute from './components/PrivatRoute/PrivatRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivatRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <div>
        {/* <ContactForm /> */}
        {/* <SearchBox /> */}
        {/* <ContactList /> */}
      </div>
      {/* </Route> */}
      {/* <Suspense> */}
      {/* <Route path='/auth' element={<HomePage/>}> */}
      {/* </Suspense> */}
    </>
  );
}

export default App;
