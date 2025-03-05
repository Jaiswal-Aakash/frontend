import React from 'react';
import '../styles/globals.css';
import './App.css';
import dynamic from "next/dynamic";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { BsChevronDown, BsThreeDotsVertical } from 'react-icons/bs';
import Contentchatbox from '../pages/Contentchatbox';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from "next-auth/react";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

const App = ({ Component, pageProps }) => {
  const [chatBoxShow, setChatBoxShow] = React.useState(false);

  const handleCloseBox = () => setChatBoxShow(false);
  const handleChatBox = () => setChatBoxShow(true);
  const handleChildData = (data) => {
    console.log('Data received from child:', data);
  };

  return (
    <SessionProvider session={pageProps.session}>
      <SafeHydrate>
        <Provider store={store}>
          <Component {...pageProps} />
          <div className={'chat_Box'}>
            <Head>
              <title>LHome</title>
              <meta name="description" content="" />
              <link rel="icon" href="/assets/icons/favicon.png" />
            </Head>
            <HiOutlineChatAlt2 className={'Chat'} onClick={handleChatBox} />
            <Modal show={chatBoxShow} onHide={handleCloseBox} className={'ChatBox_Popup'}>
              <Modal.Header>
                <div className={'white_bg'}>
                  <Image src={require("../public/assets/images/LhomeLogo.jpg")} alt="homeLogo" className={'round_image'} />
                </div>
                <p className={'chat_Box_Heading'}>Chat with us now</p>
                <BsThreeDotsVertical className={'bs_fonts'} />
                <BsChevronDown onClick={handleCloseBox} className={'bs_fonts'} />
              </Modal.Header>
              <Contentchatbox onDataReceived={handleChildData} />
            </Modal>
          </div>
        </Provider>
        <ToastContainer />
      </SafeHydrate>
    </SessionProvider>
  );
};

export default wrapper.withRedux(dynamic(() => Promise.resolve(App), { ssr: true }));
