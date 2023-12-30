import MenuIcon from "@mui/icons-material/Menu";
import {Container} from "@/components/header/menu/styled.ts";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {MenuItem} from "@/kit/menu/styed.ts";
import Menu from "@mui/material/Menu";
import {MouseEvent, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate} from "react-router-dom";


const menu = [
    {
        name: 'Home',
        path: '/',

    },
    {
        name: 'About Us',
        path: '/about-us',

    },
    {
        name: 'Contact',
        path: '/contact',

    }
]
const MenuNav = () =>{
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [isAuth] = useState(false)
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (path?:string) => {
        if (path){
            navigate(path)
        }

        setAnchorEl(null);
    };

    return (
        <Container>
            <Tooltip title="Account settings">
                <>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2, color:"#2D949D"}}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        {open ? <CloseIcon fontSize={'large'}/> :<MenuIcon fontSize={'large'}/>}
                    </IconButton>
                </>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={()=>handleClose()}
                onClick={()=>handleClose()}
                transformOrigin={{horizontal: "right", vertical: "top"}}
                anchorOrigin={{horizontal: "right", vertical: "bottom"}}
            >
                {menu.map((item)=>{
                    console.log(pathname === item.path )
                    return (
                        <MenuItem onClick={()=> handleClose(item.path)} key={item.name} $isActive={pathname === item.path}>
                                {item.name}
                        </MenuItem>
                    )
                })}
                {!isAuth ? <>
                    <MenuItem onClick={() => handleClose('auth/sign-in')} $isActive={pathname === 'auth/sign-in'}>
                        Login
                    </MenuItem>
                    <MenuItem onClick={() => handleClose('auth/sing-up')} $isActive={pathname === 'auth/sing-up'}>
                        Sign Up
                    </MenuItem>
                </> :
                    <>
                        <MenuItem onClick={() => handleClose('/account')} $isActive={pathname === '/account'}>
                           My Account
                        </MenuItem>
                        <MenuItem onClick={() => handleClose('auth/log-out')} $isActive={pathname === 'auth/log-out'}>
                            Log Out
                        </MenuItem>
                    </>
                }

            </Menu>

        </Container>

    )
}

export default MenuNav