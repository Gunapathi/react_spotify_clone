import React from "react";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";

const TrackList = () => {
	return (
		<div className="trackList hidden sm:block mb-4">
			<div className="bottom flex items-center justify-between text-primary text-[18px]">
				<motion.i
					whileTap={{ scale: 0.75 }}
					className="hover:text-primaryTextWhite cursor-pointer transition-all duration-300 ease-in-out">
					<BsFillVolumeUpFill />
				</motion.i>
				<input
					className="tracklist_range relative h-[5px] outline-none rounded-[5px] bg-primary appearance-none"
					type="range"
					name=""
					id=""
				/>
				<motion.i
					whileTap={{ scale: 0.75 }}
					className="hover:text-primaryTextWhite cursor-pointer transition-all duration-300 ease-in-out">
					<BsMusicNoteList />
				</motion.i>
				<motion.i
					whileTap={{ scale: 0.75 }}
					className="hover:text-primaryTextWhite cursor-pointer transition-all duration-300 ease-in-out">
					<FaDesktop />
				</motion.i>
			</div>
		</div>
	);
};

export { TrackList };
