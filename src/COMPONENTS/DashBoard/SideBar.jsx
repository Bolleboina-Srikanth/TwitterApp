// import React from "react";
import './SideBar.css'
// import Timage from '../IMAGES/twitterImage.png';
// import HomeIcon from '@mui/icons-material/Home';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// function DashBoard() {
//     return (
//         <div className="Dfull-screen">
//             <div className="TDrawer">
//                 <div className="TInnerBorder">
//                     <img id="Dimage" src={Timage}></img><br />
//                     <span><HomeIcon />Home</span><br />
//                     <SearchOutlinedIcon /> Explore<br />
//                     <NotificationsNoneIcon /> Notifications<br />
//                     <EmailOutlinedIcon />Messages<br />
//                     <ListAltIcon />Lists<br />
//                     <PeopleOutlinedIcon />Communities<br />
//                     <img id="Dimage" src={Timage}></img>Premium<br />
//                     <PersonOutlineOutlinedIcon />Profile<br />
//                     <MoreIcon />More<br />
//                     <Button id="postbutton" variant="contained">post</Button><br /><br /><br /><br />
//                     {/* <AccountCircleOutlinedIcon/> */}
//                     <AccountCircleOutlinedIcon className="sidebar-button">
//                         <i className="fa fa-home"></i> Home
//                     </AccountCircleOutlinedIcon>
//                 </div>


//             </div>


//         </div>
//     )
// }
// export default DashBoard;
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Timage from '../IMAGES/twitterImage.png';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MoreIcon from '@mui/icons-material/More';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import TComponent2 from './TComponent2';
import TComponent3 from './TComponent3';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Navigate, useNavigate } from "react-router-dom";


function SideBar() {
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    };

    const [anchorEl, setAnchorEl] = React.useState(false);
    const handleMenu = (event) => {
        setAnchorEl(!anchorEl);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
// -------------------------------------------
const navigate= useNavigate();
   const handlelogout = () =>{
    localStorage.removeItem("token");
    navigate("/")
   }

// ------------------------------------------
    return (
        <div className="Dfull-screen">
            <div className="TDrawer">
                <div className="TInnerBorder">
                    <img id="Dimage" src={Timage}></img><br />
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Email" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lists" />
                    </ListItem>


                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Communities" />
                    </ListItem>



                    <ListItem>
                        <ListItemAvatar>
                            <Avatar id="profileImage" alt="Profile" src={Timage} />
                        </ListItemAvatar>
                        <ListItemText primary="Premium" />
                    </ListItem>


                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>


                    <ListItem button>
                        <ListItemIcon>
                            <MoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="More" />
                    </ListItem>

                    <button id='SideBarButton'>Post</button>

                    <div className='AccountName' onClick={handleMenu}>
                        <Menu className='Tmenubar'
                            // id="menu-appbar"
                            // anchorEl={anchorEl}
                            // anchorOrigin={{
                            //     // vertical: 'top',
                            //     // horizontal: 'left',
                            // }}
                            // keepMounted
                            // transformOrigin={{
                            //     // vertical: 'top',
                            //     // horizontal: 'right',
                            // }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Add an existing account </MenuItem>
                            <MenuItem onClick={handlelogout}>Log out</MenuItem>
                        </Menu>
                        <ListItem button>
                            <ListItemIcon>
                                {/* <AccountIcon style={{ fontSize: '35' }} /> */}
                                <Avatar sx={{ bgcolor: 'red' }}>S</Avatar>
                            </ListItemIcon>
                            <ListItemText id='Srifont' primary="Srikanth yadav @S_K_Y_5522" />
                            <MoreHorizIcon />


                        </ListItem>
                    </div>

                </div>

            </div>
            <div className='zzzz'>
                <TComponent2 />

            </div>
            <div className='TComponent3'>
                <TComponent3 />
            </div>
        </div>
    );
}

export default SideBar;
