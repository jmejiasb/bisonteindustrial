import detailsclasses from "./History.module.css";
import Wrapper from "../UI/Wrapper";
import { motion } from "framer-motion";

const mainTitleAnimation = {
	hidden: { opacity: 0, y: -90 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const lineanimate = {
	initial: {
		width: 0,
	},
	start: {
		width: "100%",
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const fadeinAnimate = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const History = () => {
	return (
		<Wrapper>
			<div id="about-us" className={detailsclasses["details-info"]}>
				<motion.div
					variants={mainTitleAnimation}
					initial="initial"
					whileInView="show"
					viewport={{ once: true, amount: 0.8 }}
				>
					<p className={detailsclasses["details-title"]}>
						About Us
					</p>
					{
						/* <p className={detailsclasses["details-title__italic"]}>
						Through experience, precision, and delivery
					</p> */
					}
				</motion.div>
				<motion.hr
					variants={lineanimate}
					initial="initial"
					whileInView="start"
					viewport={{ once: true, amount: 0.8 }}
					className={detailsclasses.whitehr}
				/>
				<div className={detailsclasses["details-img__withinfo"]}>
					<motion.img
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ ease: [0.2, 0.65, 0.3, 0.9], duration: 2 }}
						viewport={{ once: true, amount: 0.8 }}
						src={"https://images.pexels.com/photos/5324856/pexels-photo-5324856.jpeg"} // Reemplaza la URL con la imagen local
						alt="Fitness Details"
					/>
					<div className={detailsclasses["details-details"]}>
						<motion.p
							variants={fadeinAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							Established in 2019, Bisonte Industrial USA was founded with a
							clear focus on serving government agencies with reliability,
							efficiency, and integrity. Our team is comprised by a dedicated
							and hard-working group of people, who are committed to providing
							exceptional service and support to our clients, no matter where
							they are located. <br />
						</motion.p>
						<motion.p
							variants={fadeinAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							We have been awarded more than 20 contracts from multiple federal,
							state, and local agencies, with additional opportunities actively
							progressing through our pipeline. Our history reflects a
							commitment to performance, compliance, and long-term partnerships
							built on trust.
						</motion.p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default History;
