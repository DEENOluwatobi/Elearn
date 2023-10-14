import React from 'react';
import { useTheme } from '@context/ThemeContext';
import HeroSection from '../Components/HeroSection';

const HomePage = () => {

  const { theme } = useTheme();

  return (
      <div>
        <HeroSection/>
      </div>
  )
}

export default HomePage