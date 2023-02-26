import { Link, useLocation } from "react-router-dom";
import useFetchEvent from "../hooks/useFetchEvent";

const EventsSubPage = () => {
	const event = useFetchEvent();
	const location = useLocation();

	return (
		<>
			{event && (
				<div>
					<h2>{event.name}</h2>
					<img width="300px" src={event.images[0].url} alt={event.name} />
					<Link state={location.state} to="details">
						More details
					</Link>
				</div>
			)}
		</>
	);
};

export default EventsSubPage;
