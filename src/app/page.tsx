"use client";
import React from 'react';
import FirstPage from './FirstPage';
import { ThemeProvider } from "../../context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <FirstPage/>
    </ThemeProvider>    
  )
}
