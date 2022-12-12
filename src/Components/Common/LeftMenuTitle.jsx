import React from "react";

const LeftMenuTitle = ({ title, icon }) => {
	return (
		<div className="nameContainer flex items-center justify-between text-primaryTextWhite text-xs font-bold mb-2">
			<p className="title uppercase font-bold">{title}</p>
			{icon && icon}
		</div>
	);
};

export default LeftMenuTitle;
