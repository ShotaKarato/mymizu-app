import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
	const auth = useSelector((state) => state.user.auth);
	const logout = () => {
		//logout
		console.log("logout");
	};
	return (
		<div>
			<nav id="menu">
				<input type="checkbox" id="responsive-menu" />
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					{auth === true && (
						<>
							<li>
								<Link to="/avatar">Avatar</Link>
							</li>
							<li>
								<Link to="/map">Find Spots</Link>
							</li>
							<li>
								<Link to="/logs">Recent</Link>
							</li>
						</>
					)}

					{auth === true ? (
						<li className="logout" onClick={logout}>
							Log out
						</li>
					) : (
						<>
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
