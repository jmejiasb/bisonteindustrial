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
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 1.2,
		},
	},
};

const History = () => {
	return (
		<Wrapper>
			<div id="about-us" className={detailsclasses["details-info"]}>
				<motion.div
					variants={mainTitleAnimation}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.8 }}
				>
					<p className={detailsclasses["details-title"]}>About Us</p>
				</motion.div>
				
				<motion.hr
					variants={lineanimate}
					initial="initial"
					whileInView="start"
					viewport={{ once: true, amount: 0.8 }}
					className={detailsclasses.whitehr}
				/>

				{/* Layout tipo periódico/revista */}
				<div className={detailsclasses["magazine-layout"]}>
					{/* Primer párrafo - ocupa todo el ancho */}
					<motion.div
						className={detailsclasses["intro-section"]}
						variants={fadeinAnimate}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
					>
						<p className={detailsclasses["lead-paragraph"]}>
							Established in 2019, <strong>Bisonte Industrial USA</strong> was founded with a 
							clear focus on serving government agencies with reliability, efficiency, and integrity. 
							Our team comprises a dedicated and hard-working group of people committed to providing 
							exceptional service and support to our clients, no matter where they are located.
						</p>
					</motion.div>

					{/* Grid de 2 columnas: texto + imagen */}
					<div className={detailsclasses["content-grid"]}>
						{/* Columna de texto izquierda */}
						<div className={detailsclasses["text-column"]}>
							<motion.div
								variants={fadeinAnimate}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.8 }}
							>
								<h3 className={detailsclasses["section-subtitle"]}>
									Our Track Record
								</h3>
								<p>
									We have been awarded more than 20 contracts from multiple federal, 
									state, and local agencies, with additional opportunities actively 
									progressing through our pipeline. Our history reflects a commitment 
									to performance, compliance, and long-term partnerships built on trust.
								</p>
							</motion.div>

							<motion.div
								variants={fadeinAnimate}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.8 }}
								transition={{ delay: 0.2 }}
							>
								<h3 className={detailsclasses["section-subtitle"]}>
									Chilean Roots, American Growth
								</h3>
								<p>
									Bisonte Industrial USA is proudly part of a Chilean business group 
									with decades of experience in agricultural and industrial sectors. 
									Our parent company,{" "}
									<a 
										href="https://arrocerasanfernando.cl/" 
										target="_blank" 
										rel="noopener noreferrer"
										className={detailsclasses["company-link"]}
									>
										Arrocera San Fernando
									</a>, has been a leader in rice production and distribution 
									throughout South America since its founding.
								</p>
								<p>
									Leveraging this expertise and expanding into the United States market, 
									we bring international standards of quality and service to American 
									government agencies. Our expansion represents a bridge between Chilean 
									industrial excellence and the demanding requirements of U.S. federal, 
									state, and local procurement.
								</p>
							</motion.div>
						</div>

						{/* Columna de imagen derecha */}
						<motion.div
							className={detailsclasses["image-column"]}
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ ease: [0.2, 0.65, 0.3, 0.9], duration: 1.5 }}
							viewport={{ once: true, amount: 0.8 }}
						>
							<img
								src="https://images.pexels.com/photos/5324856/pexels-photo-5324856.jpeg"
								alt="Bisonte Industrial team at work"
								className={detailsclasses["feature-image"]}
							/>
							<p className={detailsclasses["image-caption"]}>
								Our team delivering excellence to government agencies across the United States
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default History;