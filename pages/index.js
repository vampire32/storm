import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import C1 from "../img/window-tinting-2.jpg";
import C2 from "../img/carousel-2.jpg";


import {
	GiShakingHands,
	GiAchievement,
	GiCombinationLock,
	GiThreeFriends,
	GiFactory,
	GiMetalDisc,
} from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { BsShieldCheck, BsPeople } from "react-icons/bs";
import { GrUserWorker, GrUnorderedList, GrDeliver } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

import A1 from "../img/about-1.jpg";
import A2 from "../img/about-2.jpg";
import A3 from "../img/about-3.jpg";
import A4 from "../img/about-4.jpg";
import { AiFillPhone, AiOutlineSolution } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Feature from "../img/mec.jpg";
import Feature2 from "../img/mec2.gif";
import S1 from "../img/service-1.jpg";
import S2 from "../img/service-2.jpg";
import S3 from "../img/service-3.jpg";
import S4 from "../img/image.jpg";
import S5 from "../img/image2.jpg";
import S6 from "../img/image3.jpg";
import T1 from "../img/team-1.jpg";
import T2 from "../img/team-2.jpg";
import T3 from "../img/team-3.jpg";
import T4 from "../img/team-4.jpg";
import R1 from "../img/testimonial-1.jpg";
import R2 from "../img/testimonial-2.jpg";
import R3 from "../img/testimonial-3.jpg";
import ContactForm from "@/Components/ContactForm";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Poster from '../img/poster.jpg' 
import {RxCross2} from 'react-icons/rx'
import Link from "next/link";
import bg from "../img/carousel-2.jpg"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	
	
	 const [open, setOpen] = useState(false);
	  const [open2, setOpen2] = useState(true);

		const cancelButtonRef = useRef(null);
		
		
	return (
		<>
			<Head>
				<title>Storm Accessories</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bgimage" style={{height:"100vh"}}>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1 className="text-center text-white text-[44px] mt-[50%]">
								Storm Accessories Car Window Tinting Dubai
							</h1>
							<a
								className="text-center btn btn btn-primary mt-5"
								style={{ display: "flex", justifyContent: "center" }}
							>
								<Link
									href="/Home2"
									style={{
										textAlign: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									English
								</Link>
							</a>
						</div>
						<div className="col-md-6">
							<h1 className="text-center text-white text-[44px] mt-[50%]">
								Storm Accessories Car Window Tinting Dubai
							</h1>
							<a
								className="text-center btn btn btn-primary mt-5"
								style={{ display: "flex", justifyContent: "center" }}
							>
								<Link
									href="/Homearabic"
									style={{
										textAlign: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									Arabic
								</Link>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
