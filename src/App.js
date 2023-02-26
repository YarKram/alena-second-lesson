import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Test from "./components/Test/Test";
import EventsDetailsPage from "./pages/EventsDetailsPage";
import EventsPage from "./pages/EventsPage";
import EventsSearchPage from "./pages/EventsSearchPage";
import EventsSubPage from "./pages/EventsSubPage";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="events" element={<EventsPage />}>
					<Route path=":id" element={<EventsSubPage />} />
				</Route>
				<Route path="events/:id/details" element={<EventsDetailsPage />} />
				<Route path="search" element={<EventsSearchPage />}>
					<Route path=":id" element={<EventsSubPage />} />
				</Route>
				<Route path="search/:id/details" element={<EventsDetailsPage />}>
					<Route path="test" element={<Test />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
