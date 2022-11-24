import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Main } from '../Main/containers/Main/Loadable';
import styled from 'styled-components/macro';
import { GlobalStyle } from 'styles/global-styles';
import { useEffect, useState } from 'react';
import { Login } from '../Main/components/Login';

export const AppLayout = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {

    const warnOnClose = (e) => {
      e.preventDefault();
      e.returnValue = true;
    };

    window.addEventListener('beforeunload', warnOnClose);
    return () => { window.removeEventListener('beforeunload', warnOnClose); };
  }, []);

  return (
    <>
      {!isLogin ? (<Login onLoginFinished={() => { setIsLogin(true) }} />) :
        (
          <div>
            <Helmet>
              <meta name="description" content="NG-Regev application " />
            </Helmet>
            <PageWrapper>
              <BrowserRouter>
                <Routes>
                  <Route path='/info' element={<Main />} />
                  <Route path='/' element={<Navigate to={`/info`}></Navigate>} />
                </Routes>
              </BrowserRouter>
              <GlobalStyle />
            </PageWrapper>
          </div>
        )}
    </>
  );
};


const PageWrapper = styled.div`
  margin: 0 auto;
  box-sizing: content-box;
`;
