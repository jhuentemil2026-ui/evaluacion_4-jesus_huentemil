import { ContactForm } from '../components/ContactForm/ContactForm';
import './ContactPage.css';

export function ContactPage() {
  return (
    <main className="contact">
      <h1 className="contact__title">Contacto</h1>
      <ContactForm />
    </main>
  );
}