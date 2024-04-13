import { Helmet } from "react-helmet-async";
import s from "./Contact.module.scss";
import ContactCardInfo from "./ContactCardSection/ContactCardInfo";
import ContactForm from "./ContactForm/ContactForm";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <div className="container">
        <main className={s.contactPage}>
          <PagesHistory history={["/", "Contact"]} />

          <div className={s.contactContent} id="contact-page">
            <ContactCardInfo />
            <ContactForm />
          </div>
        </main>
      </div>
    </>
  );
};
export default Contact;
