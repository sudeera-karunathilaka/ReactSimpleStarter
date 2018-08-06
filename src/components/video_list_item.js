import React from 'react';

/*
This is similar to 
const VideoListItem = (props) =>{
    const video = props.video;
}
*/

const VideoListItem = ({video, onVideoSelect}) =>{
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        //Fire the callback function when a video is selected 
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>            
        </li>
    );
}

export default VideoListItem;