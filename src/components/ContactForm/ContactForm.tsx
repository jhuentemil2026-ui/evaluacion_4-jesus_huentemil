import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { ContactFormErrors, ContactFormValues } from '../../types';
import './ContactForm.css';

const initialValues: ContactFormValues = { name: '', email: '', message: '' };

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Escribe tu nombre (mínimo 2 caracteres).';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Escribe un correo válido, por ejemplo nombre@correo.cl.';
  }
  if (values.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres.';
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSent(true);
      setValues(initialValues);
    } else {
      setSent(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="name">
          Nombre
        </label>
        <input
          className="contact-form__input"
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby="name-error"
        />
        <p className="contact-form__error" id="name-error">
          {errors.name}
        </p>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="email">
          Correo
        </label>
        <input
          className="contact-form__input"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby="email-error"
        />
        <p className="contact-form__error" id="email-error">
          {errors.email}
        </p>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="contact-form__input"
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby="message-error"
        />
        <p className="contact-form__error" id="message-error">
          {errors.message}
        </p>
      </div>

      <button className="contact-form__button" type="submit">
        Enviar mensaje
      </button>

      <p className="contact-form__status" role="status" aria-live="polite">
        {sent ? '¡Mensaje enviado! Gracias por escribirme.' : ''}
      </p>
    </form>
  );
}