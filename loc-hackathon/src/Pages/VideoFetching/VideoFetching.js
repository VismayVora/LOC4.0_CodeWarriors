import React from "react";
import ReactPlayer from "react-player";

function VideoFetching({url}) {
	return (
		<div className="videoFetching">
			<ReactPlayer url={url} />
		</div>
	);
}

export default VideoFetching;
