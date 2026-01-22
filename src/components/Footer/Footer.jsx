import footerclass from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={footerclass['footer']}>
			{/* Bottom Bar */}
			<div className={footerclass['footer__bottom']}>
				<div className={footerclass['bottom__container']}>
					<p className={footerclass['copyright']}>
						© 2026 Bisonte Industrial USA LLC. All rights reserved.
					</p>
					<div className={footerclass['footer__links']}>
						{/* <a href="/privacy">Privacy Policy</a> */}
						{/* <a href="/terms">Terms of Service</a> */}
						<a href="/contact">Contact</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;