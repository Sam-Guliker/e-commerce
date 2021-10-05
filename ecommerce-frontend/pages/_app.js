import '../styles/main.scss';

import Header from '../components/Header';

import { AuthProvider } from '../context/AuthContext'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isActiveNavigation ,setIsActiveNavigation] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <AuthProvider>
        <Header
          isActiveNavigation={isActiveNavigation} 
          setIsActiveNavigation={setIsActiveNavigation}
          cart={cart}
        />
      <Component 
        isActiveNavigation={isActiveNavigation} 
        setIsActiveNavigation={setIsActiveNavigation} 
        cart={cart} 
        setCart={setCart} 
        {...pageProps}
       />
    </AuthProvider>
    )
}

export default MyApp