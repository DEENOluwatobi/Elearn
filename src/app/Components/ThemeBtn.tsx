"use client";
import React from 'react';
import { useTheme } from "../../../context/ThemeContext";
import IconButton from '@base/IconButton';
import { useMid } from '@utils/useMediaQuery';
import { Moon, Sun } from '@base/icons';

const ThemeBtn = () => {
    const mid = useMid();
    const { theme, toggleTheme } = useTheme();

    const iconClick = () => {
        if (theme === 'light') {
            toggleTheme();
        } else if (theme === 'dark') {
            toggleTheme();
        }
    }

    return (
        <div className='w-full h-full flex justify-center items-center py-2'>
            <IconButton
                icon={theme === 'dark' ? <Moon className='[&>path]:fill-[#d4e51d]'/> : <Sun  className='[&>path]:fill-[#141414]'/> }
                onClick={iconClick}
                size={mid ? 'xs' : 'xs'}
            />
        </div>
    );
};

export default ThemeBtn;

