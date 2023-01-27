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
import {TbTruckDelivery} from 'react-icons/tb'

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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Storm Accessories</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div class="container-fluid p-0">
				<div
					id="header-carousel"
					class="carousel slide"
					data-bs-ride="carousel"
				>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<Image style={{ height: "800px" }} src={C1} />
							<div class="carousel-caption">
								<div class="container">
									<div class="row justify-content-center">
										<div class="col-lg-10 pt-5">
											<h1
												style={{ fontWeight: "bold" }}
												class="display-3 text-white mb-4  animated slideInDown"
											>
												Storm Accessories Car Window Tinting Dubai
											</h1>
											<p
												style={{ color: "#FFD700", fontSize: "20px" }}
												className="mb-4"
											>
												CERAMIC COATING | PPF | OFFICE & HOME WINDOW TINTING |
												SAFETY & SECURITY FILM
											</p>
											<h2 class=" mb-4 pb-2 mx-sm-5 text-white text-[18px] leading-8 ">
												For high-quality window films that come in a wide range
												of styles and designs to offer privacy, safety, and sun
												protection, Storm Automotive LLC is a reputable name in
												the UAE. according to the UAE revised federal traffic
												law, which permits car windows to be tinted up to 50%
											</h2>
											<a
												style={{
													backgroundColor: "rgba(0,0,0,0.1)",
													borderColor: "#FF7276",
												}}
												href=""
												class="btn btn-primary py-3 px-5 animated slideInDown"
											>
												Book Me
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<Image style={{ height: "800px" }} src={C2} />
							<div class="carousel-caption">
								<div class="container">
									<div class="row justify-content-center">
										<div class="col-lg-10 pt-5">
											<h1
												style={{ fontWeight: "bold" }}
												class="display-4 text-white mb-4 animated slideInDown"
											>
												Storm Accessories Car Window Tinting Dubai
											</h1>
											<p
												style={{ color: "#FFD700", fontSize: "20px" }}
												className="mb-4"
											>
												CERAMIC COATING / PPF / OFFICE & HOME WINDOW TINTING /
												SAFETY & SECURITY FILM
											</p>
											<h2 class=" mb-4 pb-2 mx-sm-5 text-white text-[18px] leading-8 ">
												For high-quality window films that come in a wide range
												of styles and designs to offer privacy, safety, and sun
												protection, Storm Automotive LLC is a reputable name in
												the UAE. according to the UAE revised federal traffic
												law, which permits car windows to be tinted up to 50%
											</h2>
											<a
												href=""
												style={{
													backgroundColor: "rgba(0,0,0,0.1)",
													borderColor: "#FF7276",
												}}
												class="btn btn-primary py-3 px-5 animated slideInDown"
											>
												Call Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button
						class="carousel-control-prev"
						type="button"
						data-bs-target="#header-carousel"
						data-bs-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button
						class="carousel-control-next"
						type="button"
						data-bs-target="#header-carousel"
						data-bs-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
			</div>

			<div class="container-fluid    py-5" data-parallax="scroll">
				<div class="container  py-5">
					<div class="row ">
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
							<h1
								style={{ color: "BLACK", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								+500 Million
							</h1>
							<p style={{ color: "red", textAlign: "center" }}>Happy Clients</p>
						</div>
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
							<h1
								style={{ color: "BLACK", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								+200
							</h1>
							<p style={{ color: "red", textAlign: "center" }}>Exper Team</p>
						</div>
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
							<h1
								style={{ color: "BLACK", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								+385
							</h1>
							<p style={{ color: "red", textAlign: "center" }}>
								Ongoing Project
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="" style={{ backgroundColor: "#FFF8DC" }}>
				<div class="container">
					<div class="row  align-items-center">
						<div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
							<div class="h-100">
								<h1 style={{ color: "red" }} class="display-6 mb-5 ">
									BEST Storm Car Accessories CENTRE IN DUBAI
								</h1>

								<p class="mb-4 text-justify ">
									excessive UV rays, infrared radiation, sweltering heat, and
									glare by providing a wide range of car tinting in Dubai.
									Modern Auto Storm window films from us can offer improved
									comfort, security, and privacy. Being one of the top auto
									storm authorized center in the UAE, we are aware of the wide
									range of needs of our clients and offer them cutting-edge auto
									storm window films that satisfy their unique requirements for
									sun protection, lighting ergonomics, and temperature
									regulation.<br></br>
									<br></br> Our premium auto storm car tinting will assist in
									giving your automobile the required appearance and usefulness.
									Additionally, every one of our items has a scratch-resistant
									coating that ensures robustness and a flawless finish. You can
									take advantage of the wonderful health advantages of natural
									light and guard your home against excessive temperature
									changes with the help of our home tinting solution.
									Additionally, our auto storm car tint can enhance the comfort
									and luxury of a vehicle. Additionally, they provide a safe
									driving experience by reducing the excessive glare brought on
									by the sun or other man-made light sources.
								</p>
								<div class="border-top mt-4 pt-4">
									<div class="row">
										<div class="col-sm-6">
											<div class="d-flex align-items-center">
												<div
													style={{ backgroundColor: "#FF7276" }}
													class="btn-lg-square  rounded-circle me-3"
												>
													<AiFillPhone color="#fff" />
												</div>
												<h5 class="mb-0">+971 50 144 4353</h5>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="d-flex align-items-center">
												<div
													style={{ backgroundColor: "#FF7276" }}
													class="btn-lg-square  rounded-circle me-3"
												>
													<BsFillEnvelopeFill color="#ffff" />
												</div>
												<h5 class="mb-0">info@accessorystorm.com</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="row g-3">
								<div class="col-6 text-end">
									<div class="img-fluid w-100 wow zoomIn">
										<Image src={A1} />
									</div>
								</div>
								<div class="col-6 text-start">
									<div class="img-fluid w-80 wow zoomIn">
										<Image src={A2} />
									</div>
								</div>
								<div class="col-6 text-end">
									<div class="img-fluid w-100 wow zoomIn">
										<Image src={A3} />
									</div>
								</div>
								<div class="col-6 text-end">
									<div class="img-fluid w-100 wow zoomIn">
										<Image src={A4} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<hr></hr>
			<div class="container-xxl">
				<div class="container">
					<div
						class="text-center mx-auto wow fadeInUp"
						data-wow-delay="0.1s"
						style={{ maxWidth: "800px" }}
					>
						<h1
							style={{ color: "#FF7276", fontWeight: "normal" }}
							class="display-4 mb-3 "
						>
							OUR SERVICES
						</h1>
						<p className=" leading-6 mb-5">
							Storm Automotive, a business known for its array of AUTO STORM
							auto tinting services in Dubai, is firmly committed to
							sustainability. We adopt a comprehensive approach to sun
							protection, damage avoidance, and glare reduction with our
							high-end window tinting and film services.
						</p>
					</div>
					<div class="row g-4 m-auto ">
						<div class="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.1s">
							<div class="service-item ">
								<div class="img-fluid ">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S1}
									/>
								</div>
								<div>
									<a style={{ fontSize: "20px" }} href="">
										Automotive
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
							<div class="service-item">
								<div class="img-fluid">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S2}
									/>
								</div>
								<div>
									<a style={{ fontSize: "20px" }} href="">
										Commercial Window Films
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
							<div class="service-item">
								<div class="img-fluid">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S3}
									/>
								</div>
								<div>
									<a style={{ fontSize: "20px" }} href="">
										Fasara
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							<div class="service-item">
								<div class="img-fluid">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S4}
									/>
								</div>
								<div>
									<a href="">Di-Noc</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
							<div class="service-item">
								<div class="img-fluid">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S5}
									/>
								</div>
								<div>
									<a style={{ fontSize: "20px" }} href="">
										Residential
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
							<div class="service-item">
								<div class="img-fluid">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S6}
									/>
								</div>
								<div>
									<a style={{ fontSize: "20px" }} href="">
										Safety & Security
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid py-5 bg-storm ">
				<div class="">
					<div class="row ">
						<div class=" wow fadeInUp" data-wow-delay="0.1s">
							<div
								class="text-center mx-auto wow fadeInUp"
								data-wow-delay="0.1s"
								style={{ maxWidth: "900px" }}
							>
								<h1
									style={{ color: "#FF7276", fontWeight: "normal" }}
									class="display-4 mb-3 "
								>
									Why To Choose Storm AUTOMOTIVE ?
								</h1>
								<h2
									style={{ color: "#FFD700", fontWeight: "normal" }}
									className="font-bold text-[24px]"
								>
									CAR TINTING IN DUBAI
								</h2>
								<p class="mt-3 text-center text-white ">
									With its excellent quality auto storm car tinting in Dubai,
									window film, Storm Automotive LLC has improved and transformed
									many vehicles and structures since its founding in 2010. To
									improve energy efficiency, safety, and general privacy, our
									highly qualified team of professionals can offer efficient
									window tinting services for cars and homes. Customers have the
									highest faith in us for a number of reasons. Several of them
									are listed below.
								</p>
							</div>
							<br></br>
							<br></br>
							<br></br>
							<div className="row">
								<div className="col-md-6">
									<div class="d-flex mb-5">
										<div
											class="flex-shrink-0 btn-square  rounded-circle"
											style={{
												width: "90px",
												height: "90px",
												background: "#FF7276",
											}}
										>
											<div class="img-fluid">
												<GiShakingHands size={40} color="#ffff" />
											</div>
										</div>
										<div class="ms-4">
											<h5
												style={{ color: "#FFD700", fontWeight: "normal" }}
												class="mb-3 "
											>
												World-class products
											</h5>
											<p className="text-justify text-white ">
												Storm Automotive offers a wide selection of window films
												as an authorised Storm accessories tinting centre in
												Dubai. All of our goods come from a high-quality company
												that is the industry leader in window film production.
												Additionally, they have completed a number of quality
												analysis procedures to guarantee unrivalled quality.
												These window tinting options seek to provide a safer
												driving environment by minimising glare. Additionally,
												they can offer the required level of safety and defence
												against damaging sunrays when used on a window.
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6"></div>

								<div className="col-md-6">
									<div class="d-flex mb-5">
										<div
											class="flex-shrink-0 btn-square  rounded-circle"
											style={{
												width: "90px",
												height: "90px",
												background: "#FF7276",
											}}
										>
											<div class="img-fluid">
												<GiAchievement size={40} color="#ffff" />
											</div>
										</div>
										<div class="ms-4">
											<h5
												style={{ color: "#FFD700", fontWeight: "normal" }}
												class="mb-3 "
											>
												Extensive Industry Experience
											</h5>
											<p className="text-justify text-white ">
												With around 20 years of car-tinting experience in Dubai,
												we aim to continually provide perfection. All window
												tinting services can be performed by our skilled
												personnel with the utmost precision. These professionals
												can polish and detail any vehicle to a high standard and
												within the allotted time thanks to their attention to
												detail. Additionally, they continue to expand their
												knowledge and skills as automobile tinting technology
												advances.
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<Image
										style={{ width: "50%", margin: "auto" }}
										src={Feature}
									/>
								</div>

								<div className="col-md-6">
									<div class="d-flex mb-5">
										<div
											class="flex-shrink-0 btn-square  rounded-circle"
											style={{
												width: "90px",
												height: "90px",
												background: "#FF7276",
											}}
										>
											<div class="img-fluid">
												<GiCombinationLock size={40} color="#ffff" />
											</div>
										</div>
										<div class="ms-4">
											<h5
												style={{ color: "#FFD700", fontWeight: "normal" }}
												class="mb-3"
											>
												Authorization
											</h5>
											<p className="text-justify text-white">
												Storm Automotive relies on ethical business practises
												and standards because it is an authorised partner of the
												top manufacturer of sun control window films in the
												world. We go above and above to establish a connection
												of trust with our customers. Therefore, each car tinting
												service or product provided by our business includes an
												authenticity certificate.
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6"></div>

								<div className="col-md-6"></div>
								<div className="col-md-6">
									<div class="d-flex mb-5">
										<div
											class="flex-shrink-0 btn-square  rounded-circle"
											style={{
												width: "90px",
												height: "90px",
												background: "#FF7276",
											}}
										>
											<div class="img-fluid">
												<FcApproval size={40} color="#ffff" />
											</div>
										</div>
										<div class="ms-4">
											<h5
												style={{ color: "#FFD700", fontWeight: "normal" }}
												class="mb-3 "
											>
												Scientifically-approved window films
											</h5>
											<p className="text-justify text-white">
												As a licenced window film dealer, storm Automotive
												offers premium automobile tinting products with some
												known health advantages. These cutting-edge storm car
												tints have been validated by science and can block up to
												99% of UV and infrared rays. As a result of their
												prolonged sun exposure, they shield themselves from
												prevalent ailments.
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<Image
										style={{ width: "50%", margin: "auto" }}
										src={Feature2}
									/>
								</div>
								<div className="col-md-6">
									<div class="d-flex mb-5">
										<div
											class="flex-shrink-0 btn-square  rounded-circle"
											style={{
												width: "90px",
												height: "90px",
												background: "#FF7276",
											}}
										>
											<div class="img-fluid">
												<GiThreeFriends size={40} color="#ffff" />
											</div>
										</div>
										<div class="ms-4">
											<h5
												style={{ color: "#FFD700", fontWeight: "normal" }}
												class="mb-3 "
											>
												Budget-friendly
											</h5>
											<p className="text-justify text-white">
												We dont demand that you spend a fortune protecting your
												car from dangerous UV and infrared rays. Instead, we
												provide affordable auto tinting and sun control window
												films to improve comfort. We also offer a variety of
												solutions for home tinting and let our customers select
												the one that best suits their needs and their budget.
												Additionally, our window tinting options can enable you
												to reduce your long-term lighting and air conditioning
												expenses.
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6"></div>
								<div className="col-md-6">
									<div class="d-flex mb-5">
										<div
											class="flex-shrink-0 btn-square  rounded-circle"
											style={{
												width: "90px",
												height: "90px",
												background: "#FF7276",
											}}
										>
											<div class="img-fluid">
												<GiShakingHands size={40} color="#ffff" />
											</div>
										</div>
										<div class="ms-4">
											<h5
												style={{ color: "#FFD700", fontWeight: "normal" }}
												class="mb-"
											>
												100% Satisfaction
											</h5>
											<p className="text-justify text-white ">
												At Storm Automotive, we perform superior storm auto
												tinting services in Dubai and around the UAE with the
												goal of achieving unmatched client satisfaction. We
												guarantee that our goods will meet your expectations for
												quality and performance. Additionally, they maintain
												their appearance and colour throughout time.
												Additionally, being a reputable window tinting business
												in the UAE, we continuously adapt to meet the shifting
												needs and preferences of our clients.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{ height: "350px" }}
				className="container-fluid bg-storm mt-1"
			>
				<h1
					style={{ color: "#FF7276", fontWeight: "bold" }}
					className="text-center text-[44px] pt-5 "
				>
					GUARANTEES
				</h1>
				<h2
					style={{ color: "#FFD700" }}
					className="text-center  m-auto text-[20px] mb-2 w-50"
				>
					In the UAE, storm Automotive is a reliable source of tint and provides
					some of the best warranties available.
				</h2>
				<br></br>
				<h2 className="text-center w-50 m-auto text-white text-[18px] mt-5 ">
					Protection against colour fading We guarantee that all of our window
					films wont fade for years, and that both intense wind and direct
					sunlight wont dull their glossy sheen.
				</h2>
			</div>
			<div className="container mt-5">
				<ul
					style={{ listStyle: "circle" }}
					className=" text-justify m-4 text-[18px]"
				>
					<li>
						In addition to adhering to the many quality standards established by
						the new Federal Traffic Law that went into effect on July 1st.
					</li>
					<li>
						we also follow an universal installation guideline. we backup the
						same with a few warranties that come with each window film
					</li>
					we backup the same with a few warranties that come with each window
					film.
					<li>
						If it turns out that our product is flawed, we will replace itat no
						additional cost. You will need to provide the purchase receipt,
						which includes information on the kind of film and the
						installationdate, in order to take advantage of the guarantee.
					</li>
					<li>
						The length of theguarantee may differ depending on the particular
						automobile or window tint you have selected.
					</li>
				</ul>
				<p
					style={{ color: "#FF7276" }}
					className="text-center  m-auto text-[20px] mb-2 w-50"
				>
					The following warranties are provided to our clients.
				</p>
				<div className="row mt-10 mb-[200px]">
					<div className="col-md-4">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#0c143b",
								border: "7px solid #0005",
							}}
						>
							<div class="card-img-top  mt-5">
								<BsShieldCheck
									size={50}
									style={{ marginLeft: "40%", color: "#FF7276" }}
								/>
							</div>

							<div class="card-body">
								<h5
									style={{ color: "#FFD700" }}
									class="card-title text-center text-[20px] "
								>
									Warranty for UV ray blockage
								</h5>
								<p class="card-text text-[14px] text-white text-justify">
									The window/car tints from Storm Automotive offer some UV and
									infrared radiation protection. They will therefore let you to
									enjoy natural sunshine without having to deal with its
									negative consequences.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#FF7276",
								border: "2px solid #0005",
							}}
						>
							<div class="card-img-top  mt-5">
								<GiFactory
									size={50}
									style={{ marginLeft: "45%", color: "white" }}
								/>
							</div>

							<div class="card-body">
								<h5
									style={{ color: "#FFD700" }}
									class="card-title text-[20px] "
								>
									Industry’s leading warranties
								</h5>
								<p class="card-text text-white text-[14px] text-justify">
									Our contemporary window films offer all the advantages
									outlined by industry standards. Additionally, they come with a
									warranty against delamination, peeling, blistering, and
									bubbling. They are non-metallic, so they dont affect how
									mobile devices and satellite communications normally operate.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#0c143b",
								border: "7px solid #0005",
							}}
						>
							<div class="card-img-top mt-5">
								<GiMetalDisc
									size={50}
									style={{ marginLeft: "45%", color: "#FF7276" }}
								/>
							</div>

							<div class="card-body">
								<h5
									style={{ color: "#FFD700" }}
									class="card-title text-[20px] "
								>
									Warranty for non-metallic window films
								</h5>
								<p class="card-text text-white text-[14px] text-justify">
									Our contemporary automobile window films do not include any
									metallic components, in contrast to their conventional
									equivalents. As a result, they dont prevent mobile devices and
									satellite signals from operating normally.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" bgimage">
				<h1 className="text-center text-white text-[32px] font-bold">
					HOW IT WORKS
				</h1>
				<div className="row container py-28 m-auto">
					<div className="col-lg-3 col-md-5">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#0c143b",
								border: "7px solid #0005",
							}}
						>
							<div class="card-img-top   mt-5">
								<BsPeople
									size={100}
									style={{ marginLeft: "35%", color: "#FF7276" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[18px] text-[#FFD700] text-center font-bold">
									MEET THE CLIENT
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-5">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#FF7276",
								border: "2px solid #0005",
							}}
						>
							<div class="card-img-top  mt-5">
								<AiOutlineSolution
									size={100}
									style={{ marginLeft: "35%", color: "#FFf" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[18px] text-center text-[#FFD700] font-bold">
									CUSTOMISE SOLUTION
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-5">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#0c143b",
								border: "7px solid #0005",
							}}
						>
							<div class="card-img-top  mt-5">
								<GrUnorderedList
									size={100}
									style={{ marginLeft: "35%", color: "#FF7276" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[18px] text-center text-[#FFD700]  font-bold">
									CONFIRM ORDER
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-5">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#FF7276",
								border: "2px solid #0005",
							}}
						>
							<div class="card-img-top  mt-5">
								<TbTruckDelivery
									size={100}
									style={{ marginLeft: "35%", color: "#fff" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[18px] text-center text-[#FFD700]  font-bold">
									DELIVERY & INSTALLATION
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bgimage ">
				<div className="container m-auto">
					<h1 className="font-bold text-[44px] text-[#FFD700]">
						STORM AUTOMATIVE WINDOW FILM AND CAR TINTING CENTER SHARJAH
					</h1>
					<h2 className="font-semibold text-[20px] text-[#FFD700] text-justify mt-5 mb-5 leading-8">
						WINDOW TINTING CAN OFFER LONG-LASTING PRACTICAL ADVANTAGES, SUCH AS
						PRIVACY, SUN PROTECTION, AND SAFETY, IN ADDITION TO IMPROVING
						AESTHETICS. STORM AUTOMOTIVE IS A REPUTABLE AUTO TINTING BUSINESS
						THAT WORKS WITH YOU TO INSTALL AN OPTICALLY TRANSPARENT FILM TO GIVE
						VEHICLES THE PERFORMANCE AND APPEARANCE YOU WANT. ALL OF OUR
						MATERIALS PROTECT AGAINST UV RADIATION AND ADHERE TO UAE AUTOMOBILE
						TINTING REGULATIONS. ADDITIONALLY, THEY INCLUDE A UV PROTECTION
						CERTIFICATION THAT YOU CAN ATTEST TO.
					</h2>
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									Trusted Window Tinting Centre in Dubai
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body text-justify">
									Window films are an excellent investment since they offer
									everything from temperature control to sun protection. Optical
									clear films may be installed by Storm Automotive, a reputable
									window tinting business, to safeguard your car and provide you
									with a safer and more pleasant ride. We have a wide variety of
									automobile tints to comply with the new traffic regulation in
									Dubai, which permits car owners to receive up to 50% tint.
									<br />
									<br />
									Your automobile may have a brand-new appearance thanks to our
									high-quality window tinting services. We can provide you with
									the ideal window/car tinting solution, regardless of whether
									you need a specific amount of UV protection, light filtering,
									interior upgrading, privacy, safety, or glare relief. Our
									staff considers each customers particular needs and offers the
									best window tinting materials to fit them.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									Upgrade the Style and Comfort of Your Vehicle with storm
									Window Tinting
								</button>
							</h2>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body text-justify">
									We try to satisfy the various demands of automobile owners in
									the UAE with our premium automotive window tinting, which
									exudes unrivalled excellence. We provide you with a wide range
									of automobile tinting choices that enable you to drive more
									easily, including Crystalline, Ceramic Coating, and FX Series.
									Simply inform us of your issues, and our window tinting
									specialists will respond with appropriate advice. We will
									implement a product or service when you approve it.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									An Exhaustive Range of Car Window Tinting Services
								</button>
							</h2>
							<div
								id="collapseThree"
								class="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Storm automotive, a window tinting company with years of
									expertise, offers a wide range of automobile and window
									tinting choices in dubai. Therefore, you may choose a window
									film that suits your needs here, whether you want privacy and
									protection or a better look. We make sure that all of our
									products are made to offer uv protection, reduce overheating,
									and the required amount of privacy since we are an approved
									storm vehicle tinting facility in dubai.
									<br /> In addition to providing products of the highest
									calibre, our business places a huge emphasis on appropriate
									installation and finishing. Additionally, as an approved
									automobile tinting shop, we provide a wide array of services,
									including
									<br />
									<span className="text-red-600">Car Window Tinting </span>
									<br />
									Our premium selection of storm sun control films gives the
									inside of your automobile the necessary degree of privacy and
									security..
									<br />
									<span className="text-red-600">
										Creative Vehicle Graphics{" "}
									</span>
									<br />
									As a storm certified car tinting shop in Dubai, we give you
									countless opportunities to express your creativity via vehicle
									wraps.
									<br />
									<span className="text-red-600">Paint Protection Film </span>
									<br />
									When used on a cars painted surfaces, this high-end automobile
									tinting aids in avoiding fading or abrasion.
									<br />
									<span className="text-red-600">Car Detailing </span>
									<br />
									With a range of services, we can provide a brand-new look to
									the interior and exterior of your car.
									<br />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bgimage2 py-5 mt-2">
				<div className="row container">
					<div className="col-md-8">
						<h1
							style={{ color: "#FFD700" }}
							className="text-center text-[44px] font-bold"
						>
							CALL US FOR LIVE ASSISTANCE
						</h1>
						<h2 className="text-center text-[20px] text-white">
							Its time to turn to our experts for assignment
						</h2>
					</div>
					<div className="col-md-4">
						<a
							href=""
							style={{
								backgroundColor: "rgba(0,0,0,0.1)",
								borderColor: "#FF7276",
							}}
							class="btn btn-primary py-3 px-5 animated slideInDown ml-28"
						>
							{" "}
							Call Now
						</a>
					</div>
				</div>
			</div>
			<ContactForm />
		</>
	);
}
