import Input from "./Input";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "../css/contact.scss";
import { motion } from "framer-motion";
import { inputFields } from "../data/InputFields";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_sqmnxzu",
          "template_9ff8k65",
          form.current,
          "w5yINgolpUQUUybPj"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current?.reset();
      toast.success("Votre message a bien été envoyé");
    }
  };

  return (
    <section>
      <Toaster position="top-center" richColors />
      <form ref={form} onSubmit={sendEmail}>
        <div id="form-container">
          {inputFields.map((inputField, index) => (
            <Input
              key={index}
              type={inputField.type}
              placeholder={inputField.placeholder}
              _class={inputField._class}
              Name={inputField.Name}
            />
          ))}
          <textarea
            placeholder="Ecrivez votre message"
            name="message"
            cols={42}
            rows={10}
            required
            minLength={10}
          ></textarea>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            ENVOYER
          </motion.button>
        </div>
      </form>
    </section>
  );
}
