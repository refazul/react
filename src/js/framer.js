import React, { useState, useEffect } from "react";
import { Frame } from "framer";
import Carousel from "./carousel";
import Sidebarmenu from "./sidebarmenu";

import { sidebarmenu_data } from './data';

function onTap(x, rotate, event, info) {
	console.log(info.point.x, info.point.y);
	return `rotate(${rotate}deg) translateX(${x}px)`
  }
export const Framer = (props) => {
	return (
		<Frame
			drag={true}
			size={550}
			radius={30}
			background={"#fff"}
			x={100}
			y={100}
			rotate={0}
			onTap={onTap}
		>
			<Carousel />
			<Sidebarmenu {...sidebarmenu_data} />
		</Frame>
	)
}
