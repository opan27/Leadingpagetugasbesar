import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Kami Menyediakan Anda sepatu
          <span className="text-coral-red"> berkualitas </span>
          <span className="text-coral-red">super </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Memastikan kenyamanan dan gaya premium, alas kaki kami yang dibuat dengan cermat dirancang untuk meningkatkan pengalaman Anda, memberi Anda kualitas, inovasi, dan sentuhan elegan yang tak tertandingi.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Dedikasi kami terhadap detail dan keunggulan memastikan kepuasan Anda</p>
        <div className="mt-11">
          <Button label="Lihatlah" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="product detail" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
