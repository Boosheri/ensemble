import React from "react";
import { FormErrors } from "./FormErrors";
// import { checkbox } from "./Checkbox";

export const PostForm = props => {
  const { data = {}, errors = [] } = props;

  //   const handleChange = () => {
  //     this.setState({checked: !this.state.checked})
  //  }

  const handleSubmit = event => {
    event.preventDefault();
    const formNode = event.currentTarget;
    const formData = new FormData(formNode);

    if (typeof props.onSubmit === "function") {
      props.onSubmit({
        title: formData.get("title"),
        body: formData.get("body"),
        // roles: formData.get("roles"),
        gender: formData.get("gender"),
        min_age: formData.get("min_age"),
        max_age: formData.get("max_age"),
        company: formData.get("company"),
        production_type: formData.get("production_type"),
        paid: formData.get("paid"),
        union: formData.get("union"),
        contact_name: formData.get("contact_name"),
        contact_email: formData.get("contact_email")
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="form">
        <div className="half-form">
          <div>
            <label htmlFor="title">Title</label>
            <FormErrors forField="title" errors={errors} />
            <input name="title" id="title" defaultValue={data.title} />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body</label>
            <FormErrors forField="body" errors={errors} />
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="37"
              defaultValue={data.body}
            />
          </div>
          <br />
        </div>

        <div className="half-form">
       
 {/*           <div>
            <label htmlFor="roles">Roles</label> <br />
            <FormErrors forField="roles" errors={errors} />
            <input name="roles" id="roles" defaultValue={data.roles} />
          </div>
          <br /> */}
        <div>
            <label htmlFor="gender">Gender</label> <br />
            <FormErrors forField="gender" errors={errors} />
            <input name="gender" id="gender" defaultValue={data.gender} />
          </div>
        <br />
          <div>
            <label htmlFor="min_age">Min Age</label> <br />
            <FormErrors forField="min_age" errors={errors} />
            <input
              type="number"
              pattern="[0-9]*"
              name="min_age"
              id="min_age"
              defaultValue={data.min_age}
            />
          </div>
          <br />
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
          <br />
          <div>
            <label htmlFor="company">Company</label> <br />
            <FormErrors forField="company" errors={errors} />
            <input name="company" id="company" defaultValue={data.company} />
          </div>
          <br />
          <div>
            <label htmlFor="production_type">Prodution Type</label> <br />
            <FormErrors forField="production_type" errors={errors} />
            <input
              name="production_type"
              id="production_type"
              defaultValue={data.production_type}
            />
          </div>
          <br />
          <div className="checkboxes">
            <div>
              <label htmlFor="paid">Paid </label>
              <FormErrors forField="paid" errors={errors} />
              <input
                type="checkbox"
                // defaultChecked={this.state.checked}
                // onChange={this.handleChange}
                name="paid"
                id="paid"
                defaultValue={data.paid}
              />
            </div>
            <div>
              <label htmlFor="union">Union </label>
              <FormErrors forField="union" errors={errors} />
              <input
                type="checkbox"
                // defaultChecked={this.state.checked}
                // onChange={this.handleChange}  type="checkbox"
                name="union"
                id="union"
                defaultValue={data.union}
              />
            </div>
          </div>

          <br />
          <div>
            <label htmlFor="contact_name">Contact Name</label> <br />
            <FormErrors forField="contact_name" errors={errors} />
            <input
              name="contact_name"
              id="contact_name"
              defaultValue={data.contact_name}
            />
          </div>
          <br />
          <div>
            <label htmlFor="contact_email">Contact Email</label> <br />
            <FormErrors forField="contact_email" errors={errors} />
            <input
              name="contact_email"
              id="contact_email"
              defaultValue={data.contact_email}
            />
          </div>
        </div>
        <div>
        </div>
    </div>

        <button type="submit" value="Submit">
            Save
          </button>
      </form>
  );
};
