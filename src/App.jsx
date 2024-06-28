import './App.css';
import { useEffect } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { SearchBox } from './components/SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { AppBar } from './components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { Suspense } from 'react';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {/* <Suspense> */}
      <Routes>
        <Route path='/' element={<HomePage /> } />
        {/* <Route path='/auth' element={<HomePage/>}> */}
        <Route path='/login' element={<HomePage />} />
        <Route path='/register'element={<RegisterPage />} />
        {/* </Route> */}
        <Route path='/contacts' element={<ContactList /> } />
        <Route path='*' element={<div>404</div> } />  
      </Routes>
      {/* </Suspense> */}
      <div>
        {/* <ContactForm /> */}
        {/* <SearchBox /> */}
        {/* <ContactList /> */}
      </div>
    </>
  );
}

export default App;
