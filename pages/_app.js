import { useEffect } from 'react';
import '@/public/css/style.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  return <Component {...pageProps} />;
}
