import React, { useState } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Songs } from "./Songs";
import { motion } from "framer-motion";
import { MusicPlayer } from "./MusicPlayer";

const AudioList = () => {
	const [song, setSong] = useState(Songs[0]);
	// eslint-disable-next-line
	const [fav, setFav] = useState(Songs);
	const [active, setActive] = useState(Songs[0]);
	const [currIndex, setCurrIndex] = useState(0);

	const updateFav = (id) => {
		Songs.forEach((song) => {
			if (song.id === id) {
				song.favourite = !song.favourite;
			}
		});
		setFav([...Songs]);
	};

	const updateSong = (songTrack) => {
		let newSong = currIndex;
		if (songTrack === "prev" && currIndex - 1 >= 0) {
			newSong = currIndex - 1;
		}
		if (songTrack === "next" && currIndex + 1 < Songs.length) {
			newSong = currIndex + 1;
		}
		setSong(Songs[newSong]);
		setActive(Songs[newSong]);
		setCurrIndex(newSong);
		setFav([...Songs]);
	};

	return (
		<div className="audioList text-left px-4 py-2">
			<h2 className="title text-[20px] font-bold text-primaryTextWhite">
				The List
				<span className="text-[12px] text-primary ml-2">
					{`${Songs.length} Songs`}
				</span>
			</h2>
			<div className="Container h-[250px] overflow-y-scroll overflow-x-hidden">
				{Songs &&
					Songs.map((item, index) => (
						<div
							key={item?.id}
							// active
							className={`itemWrap group/item w-full border-b-[1px] border-primary py-2 last:border-b-0 ${
								active === item ? "active" : ""
							}`}>
							<div className="item w-full text-primary hover:text-primaryTextWhite hover:font-semibold transition-all duration-300 group-[.active]/item:text-primaryTextWhite group-[.active]/item:font-semibold flex items-center">
								<div className="count">{`#${index + 1}`}</div>
								<div
									className={`section flex items-center justify-between text-[16px] w-full`}>
									<div className="shrink-0 w-1/2 flex items-center justify-between">
										<motion.div
											whileTap={{ scale: 0.9 }}
											className="songName flex items-center cursor-pointer"
											onClick={() => {
												setActive(Songs[index]);
												setSong(item);
												setCurrIndex(index);
											}}>
											<div className="imgBox rounded-[20px] overflow-hidden px-3">
												<img
													className="w-[30px]"
													src={item?.imgSrc}
													alt=""
												/>
											</div>
											<p>{item?.songName}</p>
										</motion.div>
										<span className="artistName text-right">
											{item?.artist}
										</span>
									</div>
									<div className="hits flex items-center justify-end shrink-0 w-1/2">
										<p className="mr-3 last:mr-0 hit flex items-center">
											<i className="mr-2 text-[14px]">
												<FaHeadphones />
											</i>
											95,458,210
										</p>
										<p className="mr-3 last:mr-0 duration flex items-center">
											<i className="mr-2 text-[14px]">
												<FaRegClock />
											</i>
											03:04
										</p>
										<motion.div
											whileTap={{ scale: 0.9 }}
											className="mr-3 last:mr-0 favourite text-primaryGreen cursor-pointer"
											onClick={() => updateFav(item?.id)}>
											<i className="drop-shadow-[0px_0px_4px_#49e12e] transition-all duration-300 ease-in-out">
												{item?.favourite ? (
													<FaHeart />
												) : (
													<FaRegHeart />
												)}
											</i>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
			<MusicPlayer
				song={song}
				updateFav={updateFav}
				updateSong={updateSong}
			/>
		</div>
	);
};

export { AudioList };
