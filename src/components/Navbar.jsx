import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { HiMap, HiMenuAlt4, HiPhone } from "react-icons/hi";
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

	const NavLinks = () => (
		<>
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
		</>
	);

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
							{/* <p className={navbarclasses.logo__title}>BISONTE INDUSTRIAL</p> */}
						</div>
						<div
							className={`${navbarclasses["menu-info-wrapper"]}`}
						>
							<div
								className={`${navbarclasses["text-container"]}`}
							>
								<HiPhone className={`${navbarclasses["icon"]}`}/>
								<p>+1 410-779-9552</p>
							</div>
							<div
								className={`${navbarclasses["text-container"]}`}
							>
								<HiMap className={`${navbarclasses["icon"]}`}/>
								<p>2452 Druid Hill Avenue, Baltimore, MD</p>
							</div>
							
						</div>
						{
							/* <div style={{display:"flex"}}>

						</div> */
						}

						<nav className={navbarclasses["menu-wrapper"]}>
							<ul className={navbarclasses["menu-list__container"]}>
								<li>
									<NavLinks />
								</li>
							</ul>
						</nav>
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
					className={`${navbarclasses["menu-wrapper"]} ${
						isMenuOpen ? navbarclasses.active : ""
					}`}
				>
					<ul className={navbarclasses["menu-list__container"]}>
						<li>
							<NavLinks />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
