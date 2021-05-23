import React from 'react';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import {Link} from "react-router-dom";
const ShowVideo = ({item}) => {
  
     return (
                                      
        <div key={item.id} className="card">
        <div className="responsive">
        <iframe src={item.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
        <div  className="card__description">
            <Link style={{textDecoration:"none"}} to= {`/videos/${item._id}`}>
            <h3 >
                {item.description}
            </h3>
            </Link>
            <div className="icons">
                <div className="icon" >
                    <BookmarkBorderIcon  style={{fontSize:"2rem",color:"darkgray"}}/>
                </div>
              
                <div  className="icon" >
                  <Link   to={`/createplaylist/${item._id}`}>
                    <PlaylistAddIcon   style={{fontSize:"2rem",color:"darkgray"}}/>
                    </Link>
              
                </div>
            </div>
        </div>
        </div>
       
        ) }



export default ShowVideo;