import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import useFetchEvent from "../hooks/useFetchEvent";

const EventsDetailsPage = () => {
	const event = useFetchEvent();
	const location = useLocation();
	const navigate = useNavigate();

	console.log(location);

	return (
		<>
			<button
				onClick={() => {
					navigate(location?.state?.from ?? "/");
				}}
			>
				Go back
			</button>
			{event && (
				<div>
					<h2>{event.name}</h2>
					<p>{event.classifications[0].genre.name}</p>
					<p>{event.classifications[0].subGenre.name}</p>
				</div>
			)}
			{location.pathname.includes("search") && (
				<Link state={location.state} to="test">
					Show test component
				</Link>
			)}
			<Outlet />
		</>
	);
};

export default EventsDetailsPage;
