import React, { useState, useEffect } from "react";
import { Frame } from "framer";

export const Framer = (props) => {
	return (
		<Frame
			name={"Image"}
			scale={0.25}
			center
			size={480}
			image={"images/0.jpg"}
			drag={"x","y"}
			dragElastic={0}
			dragMomentum={false}
		/>
	)
}
