import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Style from './Navbar.module.css'
import { IconButton } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface INavbarProps {
    side: 'left' | 'right'
}

const Navbar : React.FC<INavbarProps> = ({side}) => {
    return (
        <nav className={Style.navbar}>
            <NavbarOption Icon={HomeIcon} label="Home" side={side} />
            <NavbarOption Icon={HomeIcon} label="Home" side={side} />
            <NavbarOption Icon={HomeIcon} label="Home" side={side} />
            <NavbarOption Icon={HomeIcon} label="Home" side={side} />
            <NavbarOption Icon={HomeIcon} label="Home" side={side} />
            <NavbarOption Icon={HomeIcon} label="Home" side={side} />
            <NavbarOption Icon={HomeIcon} label="Home" side={side} />
        </nav>
    )
}

interface INavbarOptionProps {
    Icon: any
    label: string
    side: 'left' | 'right'
}

const NavbarOption : React.FC<INavbarOptionProps> = ({Icon, label, side}) => {
    return (
        <div className={Style.navbarOption} style={{flexDirection: side === 'left' ? 'row' : 'row-reverse'}}>
            <Icon />
            <span>{label}</span>
            {/* <IconButton aria-label="expand"> */}
                <ArrowRightIcon style={{transform: side === 'right' ?  'rotate(180deg)' : 'rotate(0deg)'}}/>
            {/* </IconButton> */}
        </div>
    )
}

export default Navbar