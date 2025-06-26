import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div>
      <h1>Home-page</h1>
      <button onClick={hangleLogout}>Logout</button>
    </div>
  )
}

export default HomePage;
