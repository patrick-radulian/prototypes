import React, { CSSProperties, useState } from "react";
import Style from './Navbar.module.css'
import { autocompleteClasses, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import AccountTreeIcon from '@mui/icons-material/AccountTree';


interface INavbarProps {
    side: 'left' | 'right'
}

interface INavbarOptionsObj {
    Icon: any,
    label: string,
}

const navbarOptions : INavbarOptionsObj[] = [
    { Icon: HomeIcon, label: 'Home' },
    { Icon: AccountTreeIcon, label: 'Thesaurus' },
    { Icon: HomeIcon, label: 'Corpus' },
    { Icon: HomeIcon, label: 'Classification' },
    { Icon: HomeIcon, label: 'Project Linking' },
    { Icon: HomeIcon, label: 'Workflows' },
    { Icon: HomeIcon, label: 'Ontologies' },
]

const Navbar : React.FC<INavbarProps> = ({side}) => {

    const [collapsed, setCollapsed] = useState(true)

    return (
        <nav className={Style.navbar}>
            <div className={Style.navbarOptions}>
                {navbarOptions.map(option => <NavbarOption Icon={option.Icon} label={option.label} side={side} collapsed={collapsed} />)}
            </div>
            <div className={Style.collapseButton} style={{textAlign: side === 'left' ?  'right' : 'left'}} >
                <IconButton aria-label="expand" onClick={() => setCollapsed(!collapsed)}>
                    {side === 'left'  
                      ?  <ArrowLeftIcon style={{transform: collapsed ?  'rotate(180deg)' : 'rotate(0deg)'}} />
                      :  <ArrowRightIcon style={{transform: collapsed ?  'rotate(180deg)' : 'rotate(0deg)'}} />
                    }
                </IconButton>
            </div>
        </nav>
    )
}

interface INavbarOptionProps {
    Icon: any
    label: string
    side: 'left' | 'right'
    collapsed: boolean
}


const NavbarOption : React.FC<INavbarOptionProps> = ({Icon, label, side, collapsed}) => {

    const [hovered, setHovered] = useState(false)

    const flexDirection : CSSProperties = side === 'left' 
        ? { flexDirection: 'row' }
        : { flexDirection: 'row-reverse' }

    const width : CSSProperties = collapsed
        ? { maxWidth: 45 }
        : { maxWidth: 300 }

    return (
        <div 
             
            className={Style.navbarOptionContainer}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && <NavbarSelected Icon={Icon} label={label} side={side} />}
            <div className={Style.navbarOption} style={{...flexDirection, ...width}} >
                <span className={Style.navbarOptionIcon}>
                    <Icon />
                </span>
                <span className={Style.navbarOptionLabel}>{label}</span>
                <span className={Style.navbarOptionIcon}>
                    <ArrowRightIcon style={{transform: side === 'right' ?  'rotate(180deg)' : 'rotate(0deg)'}}/>
                </span>
            </div>
                
        </div>
    )
}



interface INavbarSelectedOptionProps {
    Icon: any
    label: string
    side: 'left' | 'right'
}

const NavbarSelected : React.FC<INavbarSelectedOptionProps> = ({Icon, label, side}) => {

    const css : CSSProperties = side === 'left' 
        ? {
            flexDirection: 'row',
            borderRadius: '0 4px 4px 0',
            left: 0, 
            right: 'auto'
        }
        : {
            flexDirection: 'row-reverse',
            borderRadius: '4px 0 0 4px',
            left: 'auto', 
            right: 0
        }
    

    return (
        <div 
            className={`${Style.navbarOption} ${Style.navbarSelected}`} 
            style={css} 
        >
            <span className={Style.navbarOptionIcon}>
                <Icon />
            </span>
            <span className={Style.navbarOptionLabel}>{label}</span>
            <span className={Style.navbarOptionIcon}>
                <ArrowRightIcon sx={{color: 'white'}} style={{color: 'white', transform: side === 'right' ?  'rotate(180deg)' : 'rotate(0deg)'}}/>
            </span>
        </div>
    )
}

export default Navbar