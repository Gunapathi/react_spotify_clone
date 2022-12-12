import React, { useState } from "react";
import { motion } from "framer-motion";
import { LeftMenuTitle } from "../Common";

function Menu({ title, menuObject }) {
	const [active, setActive] = useState(null);
	return (
		<div className="menuContainer mb-4">
			<LeftMenuTitle title={title} />
			<ul className="w-full p-0">
				{menuObject &&
					menuObject.map((menu) => (
						<motion.li
							key={menu.id}
							whileTap={{ scale: 0.95 }}
							onClick={() => setActive(menu)}
							className={`group/menuItem my-[25px] sm:my-[5px] sm:py-[5px] w-full  relative before:absolute before:top-0 before:-left-[15px] before:w-0 hover:before:w-[5px] before:h-full before:bg-primaryGreen before:rounded-[5px] before:transition-all before:duration-300 before:ease-in-out cursor-pointer ${
								active === menu && "active"
							}`}>
							<a
								href="#"
								className="flex items-center justify-center sm:justify-start text-[16px] text-primary group-hover/menuItem:text-primaryTextWhite transition-all duration-300 group-[.active]/menuItem:text-primaryTextWhite">
								<i className="sm:mr-[15px] text-[28px] sm:text-[18px]">
									{menu.icon}
								</i>
								<span className="hidden sm:block">
									{menu.name}
								</span>
							</a>
						</motion.li>
					))}
			</ul>
		</div>
	);
}

export { Menu };
