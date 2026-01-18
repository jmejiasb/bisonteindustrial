import Wrapper from "../UI/Wrapper";
import detailsclasses from "./Details.module.css";
import BlankCard from "../UI/BlankCard";
import { motion } from "framer-motion";
// import { useMediaQuery } from "../../hooks/useMediaQuery";

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

const featureNumAnimate = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const Details = () => {
	// const isSmallDevices = useMediaQuery("(350px < width < 766px)");

	return (
		<Wrapper>
			<div id="about-us" className={detailsclasses["details-info"]}>
				<motion.div
					variants={mainTitleAnimation}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.8 }}
				>
					<p className={detailsclasses["details-title"]}>
						We build confidence
					</p>
					<p className={detailsclasses["details-title__italic"]}>
						Through experience, precision, and delivery
					</p>
				</motion.div>
				<motion.hr
					variants={lineanimate}
					initial="initial"
					whileInView="start"
					viewport={{ once: true, amount: 0.8 }}
					className={detailsclasses.whitehr}
				/>
				<div className={detailsclasses["details-featurecard"]}>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							Trusted
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							partner for state and federal agencies
						</motion.p>
					</BlankCard>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							30+
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							Successful projects delivered
						</motion.p>
					</BlankCard>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							5+ years
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							Of public-sector experience
						</motion.p>
					</BlankCard>
				</div>
			</div>
		</Wrapper>
	);
};

export default Details;
