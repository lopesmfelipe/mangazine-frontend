import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Auth } from "./pages/auth/AuthPage.js";
import ListContentPage from "./pages/list-content/ListContentPage.js";
import ListsPage from "./pages/lists/ListsPage.js";
import HomePage from "./pages/home/HomePage.js";
import DetailsPage from "./pages/details/DetailsPage.js";
import CreateListPage from "./pages/create-list/CreateListPage";
import "./general.css";
import ReadlistPage from "./pages/readlist/ReadlistPage.js";
import RatingPrompt from "./components/rating-prompt/RatingPrompt.js";
import ProtectedRoute from "./components/protected-route/ProtectedRoute.js";
import AboutPage from "./pages/about/AboutPage.js";
import AdminRoute from "./components/admin-route/AdminRoute.js";
import ContactPage from "./pages/contact/ContactPage.js";
import CreateItemPage from "./pages/create-item/CreateItemPage.js";
import AddMangaPage from "./pages/create-item/add-pages/add-manga/MangaFormPage.js";
import MultipleImagesUploader from "./pages/create-item/add-pages/add-manga/components/multiple-images-uploader/MultipleImagesUpload.js";
import AuthorSearch from "./pages/create-item/add-pages/add-manga/components/author-search/AuthorSearchbar.js";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="auth" />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/details/:itemId/:itemType" element={<DetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/create-item" element={<CreateItemPage />} />
          <Route path="/add-manga" element={<AddMangaPage />} />
          <Route path="/search-author" element={<AuthorSearch />} />

          <Route
            path="/readlist"
            element={<ProtectedRoute element={ReadlistPage} />}
          />
          <Route
            path="/Lists"
            element={<ProtectedRoute element={ListsPage} />}
          />
          <Route
            path="/list/:listId"
            element={<ProtectedRoute element={ListContentPage} />}
          />
          <Route
            path="/rating"
            element={<ProtectedRoute element={RatingPrompt} />}
          />
          <Route
            path="/create-list"
            element={<ProtectedRoute element={CreateListPage} />}
          />

          {/* // Example of props being passed to the component through the wrapper component 'ProtectedRoute'
              <Route
               path="/create-title"
               element={<ProtectedRoute element={CreateTitle} someProp="examplePropValue"/>}
              />
            */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
