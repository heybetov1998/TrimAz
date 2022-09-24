import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ScrollToTop />
            <App />
        </Provider>
    </BrowserRouter>
);
