import { useState, useEffect, useRef} from "react";
import { IconContext } from "react-icons";
import { HiMenuAlt4 } from "react-icons/hi";
import navbarclasses from "./Navbar.module.css";
import bisonteLogo from "../assets/bisonte-logo.webp";
import { Link } from "react-router-dom";
import { useMenuAnimation } from "../hooks/useMenuAnimation";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navRef = useRef(null);

	const scope = useMenuAnimation(isMenuOpen);

	const closeMenu = () => setIsMenuOpen(false);

	useEffect(() => {
		if (!isMenuOpen) return;

		const handleClickOutside = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isMenuOpen]);

	return (
		<div ref={navRef}>
			<IconContext.Provider
				value={{ className: `${navbarclasses["logo-icon"]}` }}
			>
				<article>
					<header>
						<div className={navbarclasses.logo}>
							<img
								src={bisonteLogo}
								alt="Bisonte industrial"
							/>
							<p className={navbarclasses.logo__title}>BISONTE INDUSTRIAL</p>
						</div>
						<div
							style={{ cursor: "pointer" }}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<HiMenuAlt4 />
						</div>
					</header>
				</article>
			</IconContext.Provider>
			<div ref={scope}>
				<nav
					className={`${navbarclasses["menu-wrapper"]} ${navbarclasses.active}`}
				>
					<ul className={navbarclasses["menu-list__container"]}>
						<li>
							<Link
								className={navbarclasses["menu-list__listitem"]}
								to="/"
								onClick={closeMenu}
							>
								Home
							</Link>
							<Link
								className={navbarclasses["menu-list__listitem"]}
								to="/about-us"
								onClick={closeMenu}
							>
								About Us
							</Link>
							{
								/* <Link
								className={navbarclasses["menu-list__listitem"]}
								to="/#services"
							>
								Services
							</Link> */
							}
							<Link
								className={navbarclasses["menu-list__listitem"]}
								to="/contact"
								onClick={closeMenu}
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
