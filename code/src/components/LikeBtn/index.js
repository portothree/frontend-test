import React from "react";

import "./style.scss";

export default function LikeBtn({ liked, handleLikeBtn }) {
	return (
		<button onClick={handleLikeBtn} type="button" className="like-btn">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					fill={liked ? "#428bca" : "#fffffe"}
					d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
				/>
			</svg>
			<span className="screen-reader-only">Like</span>
		</button>
	);
}
