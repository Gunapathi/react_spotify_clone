import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
	FaBackward,
	FaForward,
	FaHeart,
	FaPause,
	FaPlay,
	FaRegHeart,
	FaShareAlt,
	FaStepBackward,
	FaStepForward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

const MusicPlayer = ({ song, updateFav, updateSong }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, serDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const audioPlayer = useRef(); //audio tags
	const audioProgress = useRef(); //audio progress
	const animationRef = useRef();

	// load song when play button clicked
	useEffect(() => {
		if (isPlaying) {
			setIsPlaying(true);
		} else {
			setIsPlaying(false);
		}
	}, [song]);

	// load song when song is changed and reset on page refresh
	useEffect(() => {
		if (isPlaying) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	}, [isPlaying, song]);

	// player progress
	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration);
		serDuration(seconds);
	}, [
		audioPlayer?.current?.loadedmetadata,
		audioPlayer?.current?.readyState,
	]);

	const calcTime = (seconds) => {
		const min = Math.floor(seconds / 60);
		// < 10 -> 09 or 11,12,13,...
		const reutnMin = min < 10 ? `0${min}` : `${min}`;

		const sec = Math.floor(seconds % 60);
		const reutnSec = sec < 10 ? `0${sec}` : `${sec}`;

		return `${reutnMin} : ${reutnSec}`;
	};

	const changeProgress = () => {
		audioPlayer.current.currentTime = audioProgress.current.value;
		updateCurrentTime();
	};

	const whilePlaying = () => {
		audioProgress.current.value = audioPlayer.current.currentTime;
		updateCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const updateCurrentTime = () => {
		// console.log(audioProgress.current.value);
		audioProgress.current.style.setProperty(
			"--player-played",
			`${(audioProgress.current.value / duration) * 100}%`
		);
		setCurrentTime(audioProgress.current.value);
	};

	return (
		<div className="musicPlayer flex items-center mt-4">
			<div className="posterImage w-[50px]">
				<img
					className="w-full rounded-lg"
					src={song.imgSrc}
					alt=""
				/>
			</div>
			<div className="songAttributes w-full text-primary ml-4">
				<audio
					src={song.song}
					preload="metadata"
					ref={audioPlayer}
				/>
				{/* Player attributes - top */}
				<div className="playerCotrols flex items-center justify-between w-full">
					{/* like and download */}
					<div className="left flex items-center justify-between">
						<motion.div
							whileTap={{ scale: 0.8 }}
							className="mr-3 last:mr-0 favourite text-primaryGreen cursor-pointer"
							onClick={() => {
								updateFav(song?.id);
							}}>
							<i className="drop-shadow-[0px_0px_4px_#49e12e] transition-all duration-300 ease-in-out">
								{song?.favourite ? <FaHeart /> : <FaRegHeart />}
							</i>
						</motion.div>
						<motion.div
							whileTap={{ scale: 0.8 }}
							className="download hover:text-primaryTextWhite cursor-pointer">
							<i className="">
								<BsDownload />
							</i>
						</motion.div>
					</div>
					{/* like and download end */}
					{/* player controls */}
					<div className="middle flex items-center justify-between">
						<motion.div
							className="previous hover:text-primaryTextWhite cursor-pointer mr-10 last:mr-0"
							whileTap={{ scale: 0.8 }}
							onClick={() => updateSong("prev")}>
							<i className="">
								<FaStepBackward />
							</i>
						</motion.div>
						<motion.div
							className="backward hover:text-primaryTextWhite cursor-pointer mr-10 last:mr-0"
							whileTap={{ scale: 0.8 }}
							onClick={() =>
								(audioPlayer.current.currentTime -= 5)
							}>
							<i className="">
								<FaBackward />
							</i>
						</motion.div>
						<motion.div
							whileTap={{ scale: 0.8 }}
							className="playPause mr-10 last:mr-0 text-black bg-primaryTextWhite rounded-full p-2 cursor-pointer"
							onClick={() => setIsPlaying(!isPlaying)}>
							<i>{isPlaying ? <FaPause /> : <FaPlay />}</i>
						</motion.div>
						<motion.div
							className="forward hover:text-primaryTextWhite cursor-pointer mr-10 last:mr-0"
							whileTap={{ scale: 0.8 }}
							onClick={() =>
								(audioPlayer.current.currentTime += 5)
							}>
							<i className="">
								<FaForward />
							</i>
						</motion.div>
						<motion.div
							className="next hover:text-primaryTextWhite cursor-pointer mr-10 last:mr-0"
							whileTap={{ scale: 0.8 }}
							onClick={() => updateSong("next")}>
							<i className="">
								<FaStepForward />
							</i>
						</motion.div>
					</div>
					{/* player controls end */}
					{/* share */}
					<motion.div
						whileTap={{ scale: 0.8 }}
						className="share hover:text-primaryTextWhite cursor-pointer">
						<i className="">
							<FaShareAlt />
						</i>
					</motion.div>
					{/* share end */}
				</div>
				{/* Player attributes - top end */}
				{/* player range seeker */}
				<div className="playerSeeker flex items-center justify-between mt-4">
					<div className="currentTime text-primaryTextWhite text-[14px] font-semibold">
						{calcTime(currentTime)}
					</div>
					<input
						className="tracklist_range w-[70%] relative h-[5px] outline-none rounded-[5px] bg-primary appearance-none"
						type="range"
						ref={audioProgress}
						onChange={changeProgress}
					/>
					<div className="duration text-primaryTextWhite text-[14px] font-semibold">
						{duration && !isNaN(duration)
							? calcTime(duration)
							: "00:00"}
					</div>
				</div>
				{/* player range seeker end */}
			</div>
		</div>
	);
};

export { MusicPlayer };
