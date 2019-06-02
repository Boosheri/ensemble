import React from "react";
import { FormErrors } from "./FormErrors";

export const PostForm = props => {
  const { data = {}, errors = [] } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const formNode = event.currentTarget;
    const formData = new FormData(formNode);

    if (typeof props.onSubmit === "function") {
      props.onSubmit({
        title: formData.get("title"),
        body: formData.get("body")
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <FormErrors forField="title" errors={errors} />
        <input name="title" id="title" defaultValue={data.title} />
      </div>

      <div>
        <label htmlFor="body">Body</label> <br />
        <FormErrors forField="body" errors={errors} />
        <textarea
          name="body"
          id="body"
          cols="60"
          rows="4"
          defaultValue={data.body}
        />
      </div>

      <div>
        <label htmlFor="gender">Gender</label> <br />
        <FormErrors forField="gender" errors={errors} />
        <input name="gender" id="gender" defaultValue={data.gender} />
      </div>

      <div>
        <label htmlFor="min_age">Min Age</label> <br />
        <FormErrors forField="min_age" errors={errors} />
        <input
          type="text"
          pattern="[0-9]*"
          name="min_age"
          id="min_age"
          defaultValue={data.min_age}
        />
      </div>

      <div>
        <label htmlFor="max_age">Max Age</label> <br />
        <FormErrors forField="max_age" errors={errors} />
        <input
          type="number"
          pattern="[0-9]*"
          name="max_age"
          id="max_age"
          defaultValue={data.max_age}
        />
      </div>

      <div>
        <label htmlFor="company">Company</label> <br />
        <FormErrors forField="company" errors={errors} />
        <input name="company" id="company" defaultValue={data.company} />
      </div>

      <div>
        <label htmlFor="production_type">Prodution Type</label> <br />
        <FormErrors forField="production_type" errors={errors} />
        <input
          name="production_type"
          id="production_type"
          defaultValue={data.production_type}
        />
      </div>

      <div>
        <label htmlFor="paid">Paid</label> <br />
        <FormErrors forField="paid" errors={errors} />
        <input type="checkbox" name="paid" id="paid" defaultValue={data.paid} />
      </div>

      <div>
        <label htmlFor="union">Union</label> <br />
        <FormErrors forField="union" errors={errors} />
        <input
          type="checkbox"
          name="union"
          id="union"
          defaultValue={data.union}
        />
      </div>

      <div>
        <label htmlFor="contact_name">Contact Name</label> <br />
        <FormErrors forField="contact_name" errors={errors} />
        <input
          name="contact_name"
          id="contact_name"
          defaultValue={data.contact_name}
        />
      </div>

      <div>
        <label htmlFor="contact_email">Contact Email</label> <br />
        <FormErrors forField="contact_email" errors={errors} />
        <input
          name="contact_email"
          id="contact_email"
          defaultValue={data.contact_email}
        />
      </div>

      <div>
        <label htmlFor="union">Union</label> <br />
        <FormErrors forField="union" errors={errors} />
        <input name="union" id="union" defaultValue={data.union} />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
