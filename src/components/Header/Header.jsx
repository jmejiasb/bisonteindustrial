import heroclasses from './Header.module.css';
import {motion} from 'framer-motion';
import {PiArrowDownLight} from 'react-icons/pi';
import {IconContext} from 'react-icons';
import capitol from "../../assets/capitol-stock.webp";
import BlurText from './BlurText'; // Ajusta la ruta según tu estructura

const imageAnimation = {
	hidden: {opacity: 0, y: 60},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			staggerChildren: 1,
			duration: 1.3,
		},
	},
};

const Hero = () => {
	const browseDetailsCaller = event => {
		event.preventDefault();
		event.stopPropagation();
		window.scrollTo(0, document.getElementById('about-us').offsetTop);
	};

	return (
		<aside>
			<div>
				<IconContext.Provider value={{size: '4em', color: 'white'}}>
					<motion.div
						variants={imageAnimation}
						initial='hidden'
						whileInView='show'
						viewport={{once: true, amount: 0.8}}
						className={heroclasses['header-image__wrapper']}>
						<img
							src={capitol}
							alt='capitol'
							className={heroclasses['header-image']}
						/>
						<div className={heroclasses['header-text__wrapper']}>
							<BlurText
								text="Bisonte Industrial USA LLC"
								delay={150}
								animateBy="words"
								direction="top"
								className={heroclasses['header-title']}
							/>
							<BlurText
								text="Your wholesaler supplier for federal, state and local agencies."
								delay={100}
								animateBy="words"
								direction="top"
								className={heroclasses['header-subtitle']}
							/>
						</div>
						<button className={heroclasses['btn-scroll']} onClick={browseDetailsCaller}>
							<PiArrowDownLight className={heroclasses['btn-scroll__arrow']} />
						</button>
					</motion.div>
				</IconContext.Provider>
			</div>
		</aside>
	);
};

export default Hero;