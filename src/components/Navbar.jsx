import { useState } from "react";
import { IconContext } from "react-icons";
import { HiMenuAlt4 } from "react-icons/hi";
import navbarclasses from "./Navbar.module.css";
import bisonteLogo from "../assets/bisonte-logo.webp";
import { Link } from "react-router-dom";
import { useMenuAnimation } from "../hooks/useMenuAnimation";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scope = useMenuAnimation(isMenuOpen);

	return (
		<>
			<IconContext.Provider
				value={{className: `${navbarclasses["logo-icon"]}` }}
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
							>
								Home
							</Link>
							<Link
								className={navbarclasses["menu-list__listitem"]}
								to="/about-us"
							>
								About Us
							</Link>
							<a
								className={navbarclasses["menu-list__listitem"]}
								href="/#services"
							>
								Services
							</a>
							<a
								className={navbarclasses["menu-list__listitem"]}
								href="/#contact"
							>
								Contact Us
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
