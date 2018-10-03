import React from 'react';
import VideosListItem from './video_list_item';

const VideoList = (props) =>
{
    const videosItems = props.videos.map((video)=>{
        return (
        <VideosListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>
        )
    });
    return(
        <ul className="col-md-4 list0group">
        {videosItems}
        </ul>
    );
};

export default VideoList;
