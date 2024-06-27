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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route />
        <Route />
      </Routes>
      <AppBar />
      <div>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
