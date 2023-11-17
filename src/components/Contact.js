import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tz4prif",
        "template_f71bu2b",
        form.current,
        "NFB7kYzXUe5uuUiVI"
      )
      .then(
        (result) => {
          window.alert("Message successfully sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact" id="connect">
      <div className="container">
        <h2 className="--text-center">Send your Comments</h2>
        <form ref={form} onSubmit={sendEmail} className="--form-control --card">
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            placeholder="Type any your feedbacks..."
            name="message"
            rows="4"
          ></textarea>
          <button type="submit" className="--btn --btn-primary">
            <i class="ri-mail-send-fill"></i> SEND
          </button>
        </form>
      </div>
    </section>
  );
};
