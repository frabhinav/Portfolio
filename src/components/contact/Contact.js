import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const form = useRef();

  const emailValidation = (val) =>
    String(val)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setSuccessMsg(
              `Thank you ${username}, your message was sent successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            setErrMsg("Failed to send message. Please try again later.");
            setSuccessMsg("");
            console.error("EmailJS error:", error);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="section-divider w-full scroll-mt-24 border-white/[0.06] py-24"
    >
      <div className="text-center">
        <Title title="Reach out" des="Contact" />
      </div>
      <div className="flex w-full flex-col gap-8 lgl:flex-row lgl:justify-between lgl:gap-12">
        <ContactLeft />
        <div className="glass-panel-strong flex w-full flex-col gap-8 p-6 lgl:w-[58%] lg:p-10">
          <form
            ref={form}
            className="flex w-full flex-col gap-5 lg:gap-6"
            onSubmit={handleSend}
          >
            {errMsg ? (
              <p
                role="alert"
                className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300"
              >
                {errMsg}
              </p>
            ) : null}
            {successMsg ? (
              <p
                role="status"
                className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-300"
              >
                {successMsg}
              </p>
            ) : null}

            <div className="flex w-full flex-col gap-6 lg:flex-row">
              <div className="flex w-full flex-col gap-3 lg:w-1/2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Your name
                </label>
                <input
                  name="user_name"
                  autoComplete="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`contactInput ${
                    errMsg === "Username is required!" ? "ring-2 ring-accent-rose/40" : ""
                  }`}
                  type="text"
                />
              </div>
              <div className="flex w-full flex-col gap-3 lg:w-1/2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </label>
                <input
                  name="phone"
                  autoComplete="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`contactInput ${
                    errMsg === "Phone number is required!"
                      ? "ring-2 ring-accent-rose/40"
                      : ""
                  }`}
                  type="tel"
                  inputMode="numeric"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email
              </label>
              <input
                name="user_email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`contactInput ${
                  errMsg === "Please give your Email!" ||
                  errMsg === "Give a valid Email!"
                    ? "ring-2 ring-accent-rose/40"
                    : ""
                }`}
                type="email"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Subject
              </label>
              <input
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`contactInput ${
                  errMsg === "Please give your Subject!"
                    ? "ring-2 ring-accent-rose/40"
                    : ""
                }`}
                type="text"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`contactTextArea min-h-[160px] ${
                  errMsg === "Message is required!" ? "ring-2 ring-accent-rose/40" : ""
                }`}
                rows={8}
              />
            </div>

            <button type="submit" className="btn-glass-primary w-full sm:w-auto">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
