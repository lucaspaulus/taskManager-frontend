import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes.tsx";
import { AppThemeProvider } from "./shared/providers";
import { GlobalStyle } from "./shared/themes";

function App() {
    return (
        <AppThemeProvider>
            <GlobalStyle />
            <AppRoutes />
            <ToastContainer />
        </AppThemeProvider>
    );
}
export default App;
