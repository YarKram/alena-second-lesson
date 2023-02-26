import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { fetchEventsByName } from "../services/eventsApi";

const EventsSearchPage = () => {
	const [events, setEvents] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const eventName = searchParams.get("event");
	const location = useLocation();

	useEffect(() => {
		if (eventName === "" || eventName === null) return;

		fetchEventsByName(eventName).then(setEvents);

		fetchEventsByName();
	}, [eventName]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		setSearchParams({ event: e.target.elements.event.value });
		form.reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input name="event" />
				<button>Search</button>
			</form>
			{events.map(({ id, name }) => {
				return (
					<li key={id}>
						<Link state={{ from: location }} to={id}>
							{name}
						</Link>
					</li>
				);
			})}
			<Outlet />
		</>
	);
};

export default EventsSearchPage;

//fetchEventsByName
