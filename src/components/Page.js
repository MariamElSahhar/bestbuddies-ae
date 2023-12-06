import React, { Children } from 'react'
import Navbar from '../components/navbar/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page({id, page, children, home, className}) {
  return (
    <div className={"page " + className} id={id}>
        <Navbar />
        {
            !home ?
            <Header page={page} /> :
            ''
        }
        {children}
        <Footer/>
    </div>
  )
}
