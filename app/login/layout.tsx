import type { Metadata } from "next";
import React from 'react';

const LoginLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default LoginLayout;

export const metadata: Metadata = {
  title: "로그인",
  description: "로그인",
  icons: {
    icon: "/YP-logo.ico",
  },
};