import {useState, MouseEvent} from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import {Box} from "@mui/material";
import {MenuItem} from "@/kit/menu/styed.ts";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{display: "flex", alignItems: "center", textAlign: "center"}}>
                <Tooltip title="Account settings">
                    <>
                        Mike
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ml: 2}}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        >
                            <Avatar sx={{width: 47, height: 47, backgroundColor: "#2D949D"}}>M</Avatar>
                        </IconButton>
                    </>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{horizontal: "right", vertical: "top"}}
                anchorOrigin={{horizontal: "right", vertical: "bottom"}}
            >
                <MenuItem onClick={handleClose}>
                        <AssignmentIndIcon fontSize="small"/>
                    My account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                        <Logout fontSize="small"/>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

export default AccountMenu
