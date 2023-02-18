import { 
    createBrowserRouter,
    createRoutesFromElements, 
    Route
} from "react-router-dom";
import Layout from "./Layout/DefaultLayout";
import Home from './routes/home';
import Book from './routes/book';
import ErrorPage from './routes/error';

const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/book/:id" element={<Book />}/>
                <Route path="*" element={<ErrorPage />} />
            </Route>
    )
);


export default router;
