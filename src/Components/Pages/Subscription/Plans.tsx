import React from "react";
import { FcCheckmark } from "react-icons/fc";
import s from "../../../styles/Pages/Subscription/plans.module.scss";

const Plans: React.FC = () => {
  return (
    <section className={s.planSection}>
      <h1 className={s.title}>Discover the Perfect Plan for You</h1>
      <h4 className={s.subTitle}>
        Delve into our extensive array of movie subscription pricing plans, each
        thoughtfully designed to cater to the distinct preferences and viewing
        habits of our diverse customer base.
      </h4>
      <div className={s.container}>
        <div className={s.cardItem}>
          <h3 className={s.cardTitle}>Basic Subsciption</h3>
          <div className={s.price}>
            <h2 className={s.amount}>$9.99 </h2>
            <h4 className={s.duration}>/month</h4>
          </div>
          <div className={s.advantages}>
            <div className={s.advantage}>
              <FcCheckmark /> Unlock unlimited access to our vast movie library,
              including new releases and exclusive content.
            </div>
            <div className={s.advantage}>
              <FcCheckmark /> Enjoy movies in stunning 4K Ultra HD and High
              Dynamic Range (HDR).
            </div>
            <div className={s.advantage}>
              <FcCheckmark /> Download your favorite films to watch offline on
              your mobile devices.
            </div>
            <div className={s.advantage}>
              <FcCheckmark /> Experience uninterrupted movie enjoyment.
            </div>
          </div>
          <button className={s.getStarted}>Get Started</button>
        </div>

        <div className={s.cardItem}>
          <h3 className={s.cardTitle}>Premium Subscription</h3>
          <div className={s.price}>
            <h2 className={s.amount}>$24.99 </h2>
            <h4 className={s.duration}>/month</h4>
          </div>
          <div className={s.advantages}>
            <div className={s.advantage}>
              <FcCheckmark /> Everything included in the Basic Subscription.
            </div>
            <div className={s.advantage}>
              <FcCheckmark /> Watch on up to four devices at the same time, making it perfect for families or friends.
            </div>
            <div className={s.advantage}>
              <FcCheckmark /> Get access to movies before they hit theaters or other streaming services.
            </div>
            <div className={s.advantage}>
              <FcCheckmark /> Create and share your movie playlists with your friends.
            </div>
          </div>
          <button className={s.getStarted}>Get Started</button>
        </div>

        <div className={s.cardItem}>
          <h3 className={s.cardTitle}>Ultimate Movie</h3>
          <div className={s.price}>
            <h2 className={s.amount}>$34.99 </h2>
            <h4 className={s.duration}>/month</h4>
          </div>
          <div className={s.advantages}>
            <div className={s.advantage}>
              <FcCheckmark /> All features and benefits of the Basic Subscription and Premium Subscription.
            </div>
            <div className={s.advantage}>
              <FcCheckmark /> Gain access to our exclusive director's cuts, behind-the-scenes footage, and original movies.
            </div>
            <div className={s.advantage}>
              <FcCheckmark /> Enjoy priority customer support available 24/7.
            </div>
            <div className={s.advantage}>
              <FcCheckmark /> Receive an annual limited-edition movie poster from a featured film.
            </div>
          </div>
          <button className={s.getStarted}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
