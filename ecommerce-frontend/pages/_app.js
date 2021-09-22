import '../styles/main.scss';

import Header from '../components/Header';

import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
    )
}

export default MyApp