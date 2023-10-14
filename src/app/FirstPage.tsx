"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AdmissionComponent from './Pages/Admission';
import SkillComponent from './Pages/Skill';
import NotFound from './Pages/NotFound';
import { useTheme } from '@context/ThemeContext';

const FirstPage = () => {
  const [pageComponent, setPageComponent] = useState<React.ReactNode | null>(null);

  // ---DARK THEME --
  const { theme } = useTheme();
  const styles = {
    container: {
      backgroundColor: theme === 'dark' ? '#150a0a' : 'white',
      color: theme === 'dark' ? 'white' : 'black',
    }
  }


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

 
  useEffect(() => {
    handleLinkClick('/');
  }, []);

  return (
    <div style={styles.container}>
      <Navbar onLinkClick={handleLinkClick}/>
      <div className='pt-10 h-full w-full'>
        {pageComponent}
      </div>
    </div>
  );
}

export default FirstPage;
