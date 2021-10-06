
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mjvjzpro");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="First Name"
        name="First Name"
        type="name"
      />
      <ValidationError 
        prefix="First Name" 
        field="name"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function Form() {
  return (
    <ContactForm />
  );
}
export default Form;

