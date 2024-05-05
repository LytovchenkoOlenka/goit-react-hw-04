import { useState, useEffect } from "react";
// import LoadMorebutton from "../LoadMoreBtn/LoadMoreBtn";
// import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
// import Loader from "../Loader/Loader";
// import ErrorMassage from "../ErrorMassage/ErrorMassage";
// import ImageModal from "../ImageModal/ImageModal";
// import css from "./App.module.css";
import { fetchImages } from "../../images-api";

export default function App() {
  const [images, setimages] = useState([]);

  useEffect(() => {
    async function getPictures() {
      const data = await fetchImages();
      console.log(data);
      setimages(data);
    }
    getPictures();
  }, []);

  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
}

//     <SearchBar />
//     <Loader />
//     <ErrorMassage />
//         <ImageGallery images={images} />
//  <LoadMorebutton />
//     <ImageModal />
