import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { LeftMenuTitle } from "../Common";
import { Playlist } from "./PlayList";
import { motion } from "framer-motion";

const MenuPlayList = ({ title }) => {
	return (
		<div className="playListContainer hidden sm:block cursor-pointer mb-4">
			<LeftMenuTitle
				title={title}
				icon={
					<FaPlus className="text-primaryTextWhite cursor-pointer" />
				}
			/>
			<ul className="playListScrollContainer h-160 overflow-x-hidden overflow-y-scroll relative">
				{Playlist &&
					Playlist.map((menu) => (
						<motion.li
							key={menu.id}
							className="playList group/menuItem my-[5px] w-full py-[5px] flex items-center justify-between"
							whileTap={{ scale: 0.95 }}>
							<a
								href="/"
								className="list flex items-center justify-start text-[16px] text-primary group-hover/menuItem:text-primaryTextWhite group-[.active]/menuItem:text-primaryTextWhite transition-all duration-300">
								<i className="mr-[15px] text-[18px]">
									<BsMusicNoteList />
								</i>
								<p className="text-[16px] text-ellipsis overflow-hidden inline">
									{menu.name}
								</p>
							</a>
							<a
								href="/"
								className="trash text-[18px] text-primary group-hover/menuItem:text-primaryTextWhite group-[.active]/menuItem:text-primaryTextWhite transition-all duration-300">
								<BsTrash />
							</a>
						</motion.li>
					))}
			</ul>
		</div>
	);
};

export { MenuPlayList };
