import contactclasses from "./Contact.module.css";

// const mainTitleAnimation = {
// 	hidden: {opacity: 0, y: -90},
// 	visible: {
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			ease: [0.2, 0.65, 0.3, 0.9],
// 			duration: 2,
// 		},
// 	},
// };

// const fadeinAnimate = {
// 	hidden: {
// 		opacity: 0,
// 	},
// 	visible: {
// 		opacity: 1,
// 		transition: {
// 			ease: [0.2, 0.65, 0.3, 0.9],
// 			duration: 2,
// 		},
// 	},
// };

const MapPinIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
		<circle cx="12" cy="10" r="3"></circle>
	</svg>
);

const PhoneIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
		</path>
	</svg>
);

const MailIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect x="2" y="4" width="20" height="16" rx="2"></rect>
		<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
	</svg>
);

const ClockIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="10"></circle>
		<polyline points="12 6 12 12 16 14"></polyline>
	</svg>
);

const Contact = () => {
	return (
		<div className={contactclasses["contact-us"]}>
			<div className={contactclasses["contact-us__container"]}>
				{/* Company Info Section */}
				<div className={contactclasses["contact-us__info"]}>
					<div className={contactclasses["contact-us__brand"]}>
						<h2 className={contactclasses["brand__title"]}>Bisonte Industrial</h2>
						<p className={contactclasses["brand__tagline"]}>USA LLC</p>
					</div>

					<p className={contactclasses["contact-us__description"]}>
						Providing high-quality industrial solutions with excellence and
						reliability since 2020.
					</p>

					<div className={contactclasses["contact-us__contact"]}>
						<div className={contactclasses["contact__item"]}>
							<div className={contactclasses["contact__icon"]}>
								<MapPinIcon />
							</div>
							<div>
								<h4>Address</h4>
								<p>
									2452 Druid Hill Avenue<br />Baltimore, MD, 21217
								</p>
							</div>
						</div>

						<div className={contactclasses["contact__item"]}>
							<div className={contactclasses["contact__icon"]}>
								<PhoneIcon />
							</div>
							<div>
								<h4>Call us</h4>
								<p>410-799-9552</p>
							</div>
						</div>

						<div className={contactclasses["contact__item"]}>
							<div className={contactclasses["contact__icon"]}>
								<MailIcon />
							</div>
							<div>
								<h4>Email us</h4>
								<p>sales@bisonteindustrial.com</p>
							</div>
						</div>

						<div className={contactclasses["contact__item"]}>
							<div className={contactclasses["contact__icon"]}>
								<ClockIcon />
							</div>
							<div>
								<h4>Business Hours</h4>
								<p>Mon-Fri: 8:00 AM - 6:00 PM</p>
							</div>
						</div>
					</div>
				</div>

				{/* Map Section */}
				<div className={contactclasses["contact-us__map"]}>
					<div className={contactclasses["map__container"]}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.4859819779567!2d-76.64454492346985!3d39.31247497161799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c804e22f0c6beb%3A0x8c3e1e5c5f5c5c5c!2s2452%20Druid%20Hill%20Ave%2C%20Baltimore%2C%20MD%2021217%2C%20USA!5e0!3m2!1sen!2s!4v1737328348845!5m2!1sen!2s"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Bisonte Industrial Location - Baltimore"
						/>
						<div className={contactclasses["map__overlay"]}>
							<span>📍 Visit Us</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
