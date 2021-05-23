import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import QueueIcon from '@material-ui/icons/Queue';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import HistoryIcon from '@material-ui/icons/History';
import CategoryIcon from '@material-ui/icons/Category';
import {Link} from "react-router-dom";


export default function BottomBar()
{
    return(

        <div className="bottom-bar">
        <Link to="/">
            <HomeSharpIcon  style={{fontSize:"2.5rem",color:"darkgray"}}  />
        </Link>
        <Link  to="playlists">
        <QueueIcon style={{fontSize:"2.5rem",cursor:"pointer",color:"darkgray"}}/>
        </Link>
     
            <BookmarksIcon  style={{fontSize:"2.5rem",cursor:"pointer"}} />
           
            <HistoryIcon style={{fontSize:"2.5rem",cursor:"pointer"}}/>
            <CategoryIcon style={{fontSize:"2.5rem",cursor:"pointer"}}/>
        </div>



    )
}