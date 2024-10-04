import React from "react";

import s from "../styles/FAQ.module.css"

const FAQ: React.FC = () => {
    return (
        <section className={s.FAQ}>
            <div className={s.container}>
                <div className={s.leftBox}>
                    <h2 className={s.title}>
                        Frequently Asked Question
                    </h2>
                    <p className={s.description}>
                        Check out our Frequently Asked Questions section for 
                        everything you need to know about your movie streaming experience.
                    </p>
                    <div className={s.haveQuestion}>
                        <h4 className={s.questionTitle}>
                            Still Have a Question?
                        </h4>
                        <p className={s.questionDescription}>
                            Lorem Ipsum is simply dummy text of 
                            the printing and typesetting
                        </p>
                        <button className={s.contactButton}>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className={s.rightBox}>
                    
                </div>
            </div>
        </section>
    );
}

export default FAQ;