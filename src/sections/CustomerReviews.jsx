import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Apa yang
        <span className="text-coral-red"> mereka </span>
        Katakan ?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">Dengarkan kisah asli dari pelanggan kami yang puas tentang pengalaman luar biasa mereka bersama kami.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
