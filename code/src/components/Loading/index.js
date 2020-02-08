import React from "react";

import "./style.scss";

export default function Loading() {
	return (
		<div className="ld-ring" aria-hidden="true">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
