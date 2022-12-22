import { Outlet } from "react-router-dom";
import SearchHeaer from "./components/SearchHeaer";

function App() {
    return (
        <>
            <SearchHeaer />
            <Outlet />
        </>
    );
}

export default App;
