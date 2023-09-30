import '@/styles/globals.css'
import Navbar from '../../components/Navbar';
import { InitUser } from 'ui';
import { RecoilRoot } from 'recoil';
import '../styles/Home.module.css'
import '../../assets/static/ProblemSet.css';
import '../../assets/static/Problem.css';
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';

const App: AppType = ({ Component, pageProps }) => {
  
  return <RecoilRoot>
    <Navbar />
    <InitUser apiUrl={'/api/users/me'} />
    <Component {...pageProps} />
  </RecoilRoot>
}

export default trpc.withTRPC(App)