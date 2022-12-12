import React from "react";
import "../Styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./MenuList/Menu";
import { MenuList } from "./MenuList/MenuList";
import { MenuPlayList } from "./MenuPlayList/MenuPlayList";
import { TrackList } from "./TrackList/TrackList";
import { Separator } from "./Common";
import { motion } from "framer-motion";

function LeftMenu() {
	return (
		<div className="leftMenu w-64 min-w-64 sm:w-280 h-full min-h-screen bg-leftBg backdrop-blur-[10px] px-[15px] py-[20px] overflow-hidden shrink-0 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] text-left">
			<div className="logoContainer text-primary flex items-center justify-between mb-5">
				<FaSpotify className="text-[52px] text-primaryTextWhite sm:text-[30px]" />
				<h2 className="hidden sm:block font-bold text-[20px]">
					Spotify
				</h2>
				<FaEllipsisH className="hidden sm:block text-[20px]" />
			</div>
			<div className="searchBox hidden sm:block w-full h-45 relative text-primaryTextWhite overflow-hidden rounded-xl shadow-boxShadow1 mb-4">
				<input
					type="text"
					placeholder="Search..."
					className="w-full h-full outline-none border-none bg-inputBg pl-[40px] placeholder:text-inputPlaceholder text-[14px] font-bold"
				/>
				<BiSearchAlt className="searchIcon absolute left-0 top-1/2 translate-x-3 -translate-y-1/2 text-inputPlaceholder text-xl" />
			</div>

			<Menu
				title={"Menu"}
				menuObject={MenuList}
			/>

			{/* <Separator /> */}

			<MenuPlayList title={"Playlist"} />

			{/* <Separator className="hidden sm:block" /> */}

			<TrackList />
		</div>
	);
}

export { LeftMenu };
