import React from "react";
import './TComponent2.css';
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotIcon from '@mui/icons-material/Ballot';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ganapathiimg from '../IMAGES/ganeshimag.jpg';
import Avatar from '@mui/material/Avatar';
import OMimg from '../IMAGES/Omimg.jpg';

export default function TComponent2() {
    return (
        <div className="TComponent2-Screen">
            <div className="THome">
                Home
            </div>

            <div className="TFollowing">
                <div className="Tforyou">For you</div>
                <div className="following">Following</div>
            </div>

            <div className="whatshappening">
                <ListItem button>
                    <ListItemIcon>
                        {/* <AccountIcon style={{fontSize:'35'}}>H</AccountIcon> */}
                        <Avatar src={OMimg}/>
                    </ListItemIcon>
                    <ListItemText primary="What is happening?!" />
                </ListItem>
                <div className="TFollowingIcons">
                    <div className="fpostbutton">
                        <button id="fpostbutton">Post</button>
                    </div>
                    <div className="ticons">
                        <BrokenImageOutlinedIcon style={{color:'#1a8cd8'}}/>&nbsp;
                        <GifBoxOutlinedIcon style={{color:'#1a8cd8'}}/>&nbsp;
                        <BallotIcon style={{color:'#1a8cd8'}}/>&nbsp;
                        <SentimentSatisfiedAltOutlinedIcon style={{color:'#1a8cd8'}}/>&nbsp;
                        <CalendarTodayIcon style={{color:'#1a8cd8'}}/>&nbsp;
                        <LocationOnOutlinedIcon style={{color:'#1a8cd8'}}/>&nbsp;
                    </div>
                </div>
            </div>

            <div className="Tshow">
                Show
            </div>

            <div className="Tposts">
                <ListItem button>
                    <ListItemIcon>
                        {/* <AccountIcon  style={{fontSize:'35'}}>HS</AccountIcon> */}
                        <Avatar src={OMimg}/>
                    </ListItemIcon>
                    <ListItemText primary="Hinduism in Modern Times  @HindismTimes" />
                </ListItem>
                <div className="Timagetext">
                <div id="Ttextalign">Why do we celebrate ganesh chaturthi?<br /><a href="#">#GaneshChaturthi</a></div>
                <img id="ganapathiimg" src={ganapathiimg} alt="hg" />
                </div>
            </div>


        </div>
    )
}