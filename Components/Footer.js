import React from 'react'
import { BiMap, BiPhoneCall, BiEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
		<div>
			<div
				class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
				data-wow-delay="0.1s"
			>
				<div class="container py-5">
					<div class="row g-5">
						<div class="col-md-6">
							<h1 class="text-white mb-4">
								<img
									class="img-fluid me-3"
									src="img/icon/icon-02-light.png"
									alt=""
								/>
								Storm Accessories
							</h1>
							<span className='text-justify'>
								For high-quality window films that come in a wide range of
								styles and designs to offer privacy, safety, and sun protection,
								Storm Automotive LLC is a reputable name in the UAE. according
								to the UAE revised federal traffic law, which permits car
								windows to be tinted up to 50%
							</span>
						</div>
						<div class="col-md-6">
							<h5 class="text-light mb-4">Newsletter</h5>
							<p>Subscribe Now.</p>
							<div class="position-relative">
								<input
									class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
									type="text"
									placeholder="Your email"
								/>
								<button
									type="button"
									class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
								>
									SignUp
								</button>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<h5 class="text-light mb-4">Get In Touch</h5>
							<p>
								<BiMap />
								123 Street, New York, USA
							</p>
							<p>
								<BiPhoneCall />
								+012 345 67890
							</p>
							<p>
								<BiEnvelope />
								info@example.com
							</p>
						</div>
						<div class="col-lg-3 col-md-6">
							<h5 class="text-light mb-4">Our Services</h5>
							<a class="btn btn-link" href="">
								AC Installation
							</a>
							<a class="btn btn-link" href="">
								Cooling Services
							</a>
							<a class="btn btn-link" href="">
								Heating Services
							</a>
							<a class="btn btn-link" href="">
								Annual Inspections
							</a>
						</div>
						<div class="col-lg-3 col-md-6">
							<h5 class="text-light mb-4">Quick Links</h5>
							<a class="btn btn-link" href="">
								About Us
							</a>
							<a class="btn btn-link" href="">
								Contact Us
							</a>
							<a class="btn btn-link" href="">
								Our Services
							</a>
							<a class="btn btn-link" href="">
								Terms & Condition
							</a>
						</div>
					</div>
				</div>
				<div class="container-fluid copyright">
					<div class="container">
						<div class="row">
							<div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
								&copy;{" "}
								<a href="#" style={{ color: "##FFD700" }}>
									Storm Accessories
								</a>
								, All Right Reserved.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer
