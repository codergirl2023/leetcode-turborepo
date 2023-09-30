import '@/styles/globals.css'
import type { AppType } from 'next/app'
import  Navbar  from '../../components/Navbar';
import { InitUser } from 'ui';
import { RecoilRoot } from 'recoil';
import '../styles/Home.module.css';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
 
  // const handleLogout = ;
  return <RecoilRoot>
    <Navbar />
    <InitUser apiUrl={'/api/admin/me'} />
    <Component {...pageProps} />
  </RecoilRoot>
};
// export default MyApp;
export default trpc.withTRPC(MyApp);