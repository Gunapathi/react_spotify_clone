import React from "react";
import "../Styles/RightMenu.css";
import { FaBell, FaCogs, FaCrown, FaRegHeart, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import Profile from "../img/profile.jpg";

const RightMenu = () => {
	return (
		<div className="rightMenu h-screen w-[100px] min-w-[100px] bg-[rgba(34,34,34,0.6)] backdrop-blur-sm border-l-[1px] border-[rgba(255,255,255,0.1)] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.725)] flex flex-col items-center justify-between text-[22px] text-primary py-10">
			<div className="goPro">
				<motion.div
					whileTap={{ scale: 0.8 }}
					className="text-center flex flex-col w-full items-center justify-center mb-10 last:mb-0 group relative cursor-pointer">
					<i className="group-hover:text-primaryTextWhite group-[.active]:text-primaryTextWhite transition-all duration-300 ease-in-out">
						<FaCrown />
					</i>
					<p className="text-[18px]">
						Go{" "}
						<span className="italic font-bold text-primaryTextWhite">
							Pro
						</span>
					</p>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.8 }}
					className="text-center flex items-center justify-center mb-10 last:mb-0 group relative active">
					<i className="hover:text-primaryTextWhite group-[.active]:text-primaryTextWhite cursor-pointer transition-all duration-300 ease-in-out">
						<FaBell />
					</i>
					<span className="absolute -top-[5px] right-[15px] w-[8px] h-[8px] opacity-0 -z-[1] bg-primaryGreen rounded-full group-[.active]:opacity-100 group-[.active]:z-1 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.725)]"></span>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.8 }}
					className="text-center flex items-center justify-center mb-10 last:mb-0 group relative">
					<i className="hover:text-primaryTextWhite group-[.active]:text-primaryTextWhite cursor-pointer transition-all duration-300 ease-in-out">
						<FaRegHeart />
					</i>
				</motion.div>
			</div>
			<div className="profile">
				<motion.div
					whileTap={{ scale: 0.8 }}
					className="text-center flex items-center justify-center mb-10 last:mb-0 group relative">
					<i className="hover:text-primaryTextWhite group-[.active]:text-primaryTextWhite cursor-pointer transition-all duration-300 ease-in-out">
						<FaSun />
					</i>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.8 }}
					className="text-center flex items-center justify-center mb-10 last:mb-0 group relative">
					<i className="hover:text-primaryTextWhite group-[.active]:text-primaryTextWhite cursor-pointer transition-all duration-300 ease-in-out">
						<FaCogs />
					</i>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.8 }}
					className="userImage cursor-pointer w-[50px] h-[50px]">
					<img
						className="w-full h-full rounded-full object-cover"
						src={Profile}
						alt=""
					/>
				</motion.div>
			</div>
		</div>
	);
};

export { RightMenu };
