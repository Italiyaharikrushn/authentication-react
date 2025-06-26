import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './homePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import Cookies from 'universal-cookie';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const cookies = new Cookies();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const hangleLogout = () => {
    cookies.remove("token", {path: '/'});
    dispatch(logout());
    navigate('/');
    window.location.reload();
  }

  return (
    <div className='home_page'>
      <div className='form_control'>
        <h1>Home-page</h1>
      </div>
      <button onClick={hangleLogout}>Logout</button>
    </div>
  )
}

export default HomePage;
