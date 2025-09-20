import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import WhatAppButton from "../WhatsAppButton/WhatAppButton";
import Footer from "../Footer/Footer";
import FooterButton from "../Footer/FooterButton";
export default function Layout() {
  return (
    <>
      <NavBar />
      <WhatAppButton />
      <main className="pt-20">
        <Outlet />
      </main>
      <FooterButton />
      <Footer />
    </>
  );
}
