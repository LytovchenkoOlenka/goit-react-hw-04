import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";

export default function SearchBar({ onSubmit }) {
  return (
    <div className={css.container}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSubmit(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
