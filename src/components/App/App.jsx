import css from "./App.module.css";
import { useState, useEffect } from "react";
import LoadMorebutton from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import ImageModal from "../ImageModal/ImageModal";

import { fetchImages } from "../../images-api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(query, page);
        // console.log(page);
        setImages((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  // const loadMoreButtonRef = useRef(null);

  // useEffect(() => {
  //   if (images.length <= 12) {
  //     return;
  //   }
  //   if (loadMoreButtonRef.current) {
  //     const loadMoreButtonRect =
  //       loadMoreButtonRef.current.getBoundingClientRect();
  //     window.scrollTo({
  //       top: window.scrollY + loadMoreButtonRect.top,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [images]);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMassage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMorebutton loadMore={handleLoadMore} />
      )}
      {modalIsOpen && (
        <ImageModal
          isOpen={openModal}
          onRequestClose={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}
