import React, { useState } from "react";
import s from "../styles/FAQ.module.css";
import { useNavigate } from "react-router-dom";

const faqData = [
  {
    question: "What is Mostream?",
    answer: "Mostream is not just a platform; it's your VIP pass to a universe of captivating content that transcends the ordinary. Say goodbye to the mundane and embrace the extraordinary.",
  },
  {
    question: "What Devices are Compatible?",
    answer: "Mostream is available on all devices including smartphones, tablets, and smart TVs.",
  },
  {
    question: "Can I Download Movies for Offline Viewing?",
    answer: "Yes, you can download movies and shows to watch offline on Mostream.",
  },
  {
    question: "What Genres Do You Offer?",
    answer: "We offer a wide variety of genres, including action, drama, comedy, and documentaries.",
  },
  {
    question: "How Does Billing Work?",
    answer: "Mostream offers monthly and yearly subscription plans with flexible billing options.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const navigate = useNavigate();

  const handleFAQ = () => {
    navigate('/faq')
  }

  return (
    <section className={s.FAQ}>
      <div className={s.container}>
        <div className={s.leftBox}>
          <h2 className={s.title}>Frequently Asked Question</h2>
          <p className={s.description}>
            Check out our Frequently Asked Questions section for everything you need to know about your movie streaming experience.
          </p>
          <div className={s.haveQuestion}>
            <h4 className={s.questionTitle}>Still Have a Question?</h4>
            <p className={s.questionDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
            <button className={s.contactButton} onClick={handleFAQ}>Contact Us</button>
          </div>
        </div>

        <div className={s.rightBox}>
          {faqData.map((faq, index) => (
            <div key={index} className={s.faqItem} onClick={() => toggleFAQ(index)}>
              <div className={s.faqQuestion}>
                {faq.question}
                <span className={s.icon}>{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <div className={s.faqAnswer}>{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
