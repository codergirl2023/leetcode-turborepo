import '@/styles/globals.css'
import type { AppType } from 'next/app'
import { Navbar } from 'ui';
import { InitUser } from 'ui';
import { RecoilRoot } from 'recoil';
import '../styles/Home.module.css';
import { trpc } from '../utils/trpc';

// export default function App({ Component, pageProps }: AppProps) {
//   return <RecoilRoot>
//     <Navbar />
//     <InitUser/>
//     <Component {...pageProps} />
//   </RecoilRoot>
// }
// import type { AppType } from 'next/app';
// import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <RecoilRoot>
    <Navbar />
    <InitUser/>
    <Component {...pageProps} />
  </RecoilRoot>
};

export default trpc.withTRPC(MyApp);