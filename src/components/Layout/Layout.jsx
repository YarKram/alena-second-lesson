import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const Layout = () => {
	const location = useLocation();

	return (
		<>
			<header>
				{!location.pathname.includes("details") && <Navigation />}
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
