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
    subOptions?: string[][]
}

const navbarOptions : INavbarOptionsObj[] = [
    { Icon: HomeIcon, label: 'Home' },
    { Icon: AccountTreeIcon, label: 'Thesaurus', subOptions: [
        ['Move Project', 'Download Project'],
        ['Import', 'Export'],
        ['Reports', 'Move metadata'],
        ['Close Project'],
     ] },
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
                {navbarOptions.map((option, i) => <NavbarOption key={i} Icon={option.Icon} label={option.label} side={side} collapsed={collapsed} subOptions={option.subOptions} />)}
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
    subOptions?: string[][]
}


const NavbarOption : React.FC<INavbarOptionProps> = ({Icon, label, side, collapsed, subOptions}) => {

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
            {hovered && <NavbarSelected Icon={Icon} label={label} side={side} subOptions={subOptions} collapsed={collapsed} />}
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
    subOptions?: string[][]
    collapsed: boolean
}

const NavbarSelected : React.FC<INavbarSelectedOptionProps> = ({Icon, label, side, subOptions, collapsed}) => {

    const css : CSSProperties = side === 'left'
        ? {
            flexDirection: 'row',
            borderRadius: collapsed ? '0 4px 4px 0' : 0,
            width: collapsed ? 205 : '100%',
            left: 0,
            right: 'auto'
        }
        : {
            flexDirection: 'row-reverse',
            borderRadius: collapsed ? '4px 0 0 4px' : 0,
            width: collapsed ? 205 : '100%',
            left: 'auto',
            right: 0
        }

    const [arrowHovered, setArrowHovered] = useState(false)

    return (
        <div className={Style.navbarSelectedOptionContainer}>
            <div
                className={`${Style.navbarOption} ${Style.navbarSelected}`}
                style={css}
                onMouseLeave={() => setArrowHovered(false)}
            >
                <span className={Style.navbarOptionIcon}>
                    <Icon />
                </span>
                <div className={Style.subMenuDisplay}>
                    <div className={Style.navbarOptionLabelContainer}>
                        <span className={Style.navbarOptionLabel}>{label}</span>
                        <span className={Style.navbarOptionIcon} onMouseEnter={() => setArrowHovered(true)}>
                            <ArrowRightIcon sx={{color: 'white'}} style={{color: 'white', transform: side === 'right' ?  'rotate(180deg)' : 'rotate(0deg)'}}/>
                        </span>
                    </div>
                    {arrowHovered && <SubOptionsMenu subOptions={subOptions} collapsed={collapsed} /> }
                </div>
            </div>
        </div>
    )
}

interface ISubOptionMenuProps {
    collapsed: boolean
    subOptions?: string[][]
}

const SubOptionsMenu : React.FC<ISubOptionMenuProps> = ({subOptions, collapsed}) => {

    const menuPosition : CSSProperties = collapsed
        ? {top: '100%', left: 0}
        : {top: 0, left: '100%'}

    return (
        <div className={Style.subOptionsMenu} style={menuPosition}>
        {subOptions && subOptions.map((subOption, i) => (
            <>
            <div>
                {subOption.map(subSubOption => <div>{subSubOption}</div> )}
            </div>
            {i !== subOptions.length - 1 ? <hr className={Style.hr} /> : null}
            </>
        ))}
        </div>
    )
}

export default Navbar