import { Outlet } from "react-router-dom";
import SearchHeaer from "./components/SearchHeaer";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
    return (
        <>
            <DarkModeProvider>
                <SearchHeaer />
            </DarkModeProvider>
            <Outlet />
        </>
    );
}

export default App;
