import React from "react";
import "../styles/NavBar.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../slices/userSlice";

function NavBar() {
	const auth = useSelector((state) => state.user.auth);
	const dispatch = useDispatch();
	const history = useHistory();
	const logout = async () => {
		//logout
		await dispatch(userLogout());
		history.push("/");
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
