import React from "react";
import Artist from "../../img/artist.jpg";
import Check from "../../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

const Banner = () => {
	return (
		<div className="banner px-4 py-4 sm:h-[300px] relative">
			<img
				className="heroBanner absolute top-0 left-0 w-full h-full object-cover grayscale z-0"
				src={Artist}
				alt=""
			/>
			<div className="heroContent z-[1] relative flex flex-col justify-between h-full">
				<div className="breadCrumb flex items-center justify-between text-primaryTextWhite">
					<p className="text-[12px] font-bold text-left">
						Home /{" "}
						<span className="font-normal">Popular Artist</span>
					</p>
					<i className="text-[22px]">
						<FaEllipsisH />
					</i>
				</div>
				<div className="artist flex items-center justify-between">
					<div className="left flex items-start justify-between flex-col">
						<div className="name flex items-center justify-start">
							<h1 className="text-primaryTextWhite text-[40px] font-bold">
								A-Ha
							</h1>
							<img
								className="w-[30px] ml-1"
								src={Check}
								alt=""
							/>
						</div>
						<p className="flex items-center text-primaryTextWhite text-[14px] font-bold">
							<i className="mr-2">
								<FaHeadphones />
							</i>
							11,165,222 {/* bg-primary py-[2px] px-[5px] */}
							<span className="text-[12px] font-normal ml-2 rounded-lg text-primary">
								Monthly Listeners
							</span>
						</p>
					</div>
					<div className="right flex items-center justify-between">
						<a
							href="/"
							className="text-[16px] py-[5px] px-[20px] text-primaryTextWhite flex items-center justify-center rounded-full mr-[25px] last:mr-0 font-bold bg-themeGreen">
							Play
						</a>
						<a
							href="/"
							className="text-[16px] py-[5px] px-[20px] text-primaryTextWhite flex items-center justify-center rounded-full mr-[25px] last:mr-0 font-bold bg-[rgba(0,0,0,0.4)]">
							<i className="mr-2">
								<FaCheck />
							</i>
							Following
						</a>
					</div>
				</div>
			</div>
			<div className="bottomLayer absolute bottom-0 left-0 w-full h-20"></div>
		</div>
	);
};

export { Banner };
