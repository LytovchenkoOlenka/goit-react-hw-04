import { useState, useEffect } from "react";
// import LoadMorebutton from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
// import Loader from "../Loader/Loader";
// import ErrorMassage from "../ErrorMassage/ErrorMassage";
// import ImageModal from "../ImageModal/ImageModal";
// import css from "./App.module.css";
import { fetchImages } from "../../images-api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [query, setQuery] = useState("");

  // useEffect(() => {
  //   async function getPictures() {}
  //   getPictures();
  // }, []);

  const handleSearch = async (newQuery) => {
    try {
      // setQuery(newQuery);
      console.log(newQuery);
      setIsLoading(true);
      const data = await fetchImages(newQuery);
      setImages(data);
    } catch (error) {
      console.log(newQuery);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <p>Loading</p>}
      {error && <p>Error</p>}
      {images.length > 0 && <ImageGallery images={images} />}
    </div>
  );
}

//      <Loader />
// <ErrorMassage />

//         <ImageGallery images={images} />
//  <LoadMorebutton />
//     <ImageModal />
