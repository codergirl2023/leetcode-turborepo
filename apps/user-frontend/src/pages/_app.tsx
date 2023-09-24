import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from 'ui';
import { InitUser } from 'ui';
import { RecoilRoot } from 'recoil';
import '../styles/Home.module.css'
import '../../assets/static/ProblemSet.css';
import '../../assets/static/Problem.css';

export default function App({ Component, pageProps }:AppProps) {
  return <RecoilRoot>
    <Navbar />
    <InitUser/>
    <Component {...pageProps} />
  </RecoilRoot>
}
