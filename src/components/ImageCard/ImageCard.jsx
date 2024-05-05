import css from "./ImageCard.module.css";

export default function ImageCard({ urls, description }) {
  return (
    <div>
      <a className={css.link} href={urls.regular}>
        <img className={css.image} src={urls.small} alt={description} />
      </a>
    </div>
  );
}
