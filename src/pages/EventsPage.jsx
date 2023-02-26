import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { fetchEvents } from "../services/eventsApi";

const EventsPage = () => {
	const [events, setEvents] = useState([]);
	const location = useLocation();

	useEffect(() => {
		fetchEvents().then(setEvents);
	}, []);

	return (
		<div>
			<ul>
				{events.map(({ id, name }) => {
					return (
						<li key={id}>
							<Link state={{ from: location }} to={id}>
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
			<Outlet />
		</div>
	);
};

export default EventsPage;
