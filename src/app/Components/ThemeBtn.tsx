"use client";
import React, { useState } from 'react';
import useToggle from '@utils/useToggle';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from "../../../context/ThemeContext";
import Switch from '@base/Switch';
import IconButton from '@base/IconButton';
import { useMid } from '@utils/useMediaQuery';
import { Moon, Sun } from '@base/icons';

const ThemeBtn = () => {
    const mid = useMid();  
    const [onTheme, setOnTheme] = React.useState(false);  
    const [ mode, setMode ] = useToggle(false);
    const { theme, toggleTheme } = useTheme();

    const iconClick = () => {
        setOnTheme(!onTheme);
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <IconButton
                icon={onTheme ? <Moon className='[&>path]:fill-[#c8d8e4]'/> : <Sun  className='[&>path]:fill-[#c8d8e4]'/> }
                onClick={iconClick}
                size={mid ? 'sm' : 'sm'}
            />
        </div>
    );
};

export default ThemeBtn;
