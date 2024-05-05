import css from "./ImageCard.module.css";

export default function ImageCard({ urls, description }) {
  return (
    <div className={css.card}>
      <img className={css.image} src={urls.small} alt={description} />
    </div>
  );
}
