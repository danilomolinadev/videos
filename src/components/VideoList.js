import React from "react";
import VideoItem from './VideoItem';


/** long way  
const VideoList = (props) => {
    //props.videos
    return <div>{props.videos.length}</div>
};
*/

//Short way removed the word props and short my code
const VideoList = ({videos, onVideoSelect}) => {
   const renderedList =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    })
    //props.videos
    return (
    <div className="ui relaxed divided list">
        {renderedList}
    </div>
    )
};

export default VideoList;