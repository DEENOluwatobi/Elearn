"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AdmissionComponent from './Pages/Admission';
import SkillComponent from './Pages/Skill';
import NotFound from './Pages/NotFound';

const FirstPage = () => {
  const [pageComponent, setPageComponent] = useState<React.ReactNode | null>(null);


  const handleLinkClick = (path: string) => {
    switch (path) {
      case '/':
        setPageComponent(<HomePage />);
        break;
      case '/admission':
        setPageComponent(<AdmissionComponent />);
        break;
      case '/skill':
        setPageComponent(<SkillComponent />);
        break;
      default:
        setPageComponent(<NotFound />);
        break;
    }
  };

  // Initialize the default component
  useEffect(() => {
    handleLinkClick('/');
  }, []);

  return (
    <div>
      <Navbar onLinkClick={handleLinkClick} />
      <div className='pt-20'>
        {pageComponent}
      </div>
    </div>
  );
}

export default FirstPage;
