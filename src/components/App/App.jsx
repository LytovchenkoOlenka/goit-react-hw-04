// import { useState } from 'react'
import LoadMorebutton from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import ImageModal from "../ImageModal/ImageModal";
// import css from "./App.module.css";

export default function App() {
  return (
    <div>
      <LoadMorebutton />
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMassage />
      <ImageModal />
    </div>
  );
}
