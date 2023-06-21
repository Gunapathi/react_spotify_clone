import React from "react";
import { FaUsers } from "react-icons/fa";
import "../Styles/MainContainer.css";
import { Banner } from "./Common/Banner";
import { motion } from "framer-motion";
import { AudioList } from "./Songs/AudioList";

const MainContainer = () => {
	return (
		<div className="mainContainer h-screen sm:w-full min-w-[380px] z-10 grow-1 bg-[rgba(34,34,34,0.6)] backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.725)]">
			<Banner />

			<div className="menuList flex items-center justify-between px-[15px] bg-[#2c2c2c]">
				<ul className="flex items-center my-[20px]">
					<motion.li
						whileTap={{ scale: 0.95 }}
						// onClick={() => setActive(menu)}
						className="relative before:absolute before:-bottom-[15px] before:left-0 before:h-0 hover:before:h-[3px] before:w-0 hover:before:w-[calc(70%)] before:bg-primaryTextWhite before:rounded-[5px] mr-5 last:mr-0 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
						<a
							className="text-primary text-[14px] font-bold"
							href="/">
							Popular
						</a>
					</motion.li>
					<motion.li
						whileTap={{ scale: 0.95 }}
						// onClick={() => setActive(menu)}
						className="relative before:absolute before:-bottom-[15px] before:left-0 before:h-0 hover:before:h-[3px] before:w-0 hover:before:w-[calc(70%)] before:bg-primaryTextWhite before:rounded-[5px] mr-5 last:mr-0 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
						<a
							className="text-primary text-[14px] font-bold"
							href="/">
							Albums
						</a>
					</motion.li>
					<motion.li
						whileTap={{ scale: 0.95 }}
						// onClick={() => setActive(menu)}
						className="relative before:absolute before:-bottom-[15px] before:left-0 before:h-0 hover:before:h-[3px] before:w-0 hover:before:w-[calc(70%)] before:bg-primaryTextWhite before:rounded-[5px] mr-5 last:mr-0 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
						<a
							className="text-primary text-[14px] font-bold"
							href="/">
							Songs
						</a>
					</motion.li>
					<motion.li
						whileTap={{ scale: 0.95 }}
						// onClick={() => setActive(menu)}
						className="relative before:absolute before:-bottom-[15px] before:left-0 before:h-0 hover:before:h-[3px] before:w-0 hover:before:w-[calc(70%)] before:bg-primaryTextWhite before:rounded-[5px] mr-5 last:mr-0 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
						<a
							className="text-primary text-[14px] font-bold"
							href="/">
							Fans
						</a>
					</motion.li>
					<motion.li
						whileTap={{ scale: 0.95 }}
						// onClick={() => setActive(menu)}
						className="relative before:absolute before:-bottom-[15px] before:left-0 before:h-0 hover:before:h-[3px] before:w-0 hover:before:w-[calc(70%)] before:bg-primaryTextWhite before:rounded-[5px] mr-5 last:mr-0 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
						<a
							className="text-primary text-[14px] font-bold"
							href="/">
							About
						</a>
					</motion.li>
				</ul>
				<p className="flex items-center justify-center text-primaryTextWhite text-[14px]">
					<span className="flex items-center mb-[2px]">
						<i className="mr-2 text-[16px] text-primaryGreen">
							<FaUsers />
						</i>
						20.3M
					</span>
					<span className="text-[12px] ml-2 text-primary">
						Followers
					</span>
				</p>
			</div>

			<AudioList />
		</div>
	);
};

export { MainContainer };
