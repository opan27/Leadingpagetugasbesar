import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Shoe Promotion" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">penawaran </span>
          khusus
        </h2>
        <p className="mt-4 info-text">
          Mulailah perjalanan berbelanja yang mengubah pengalaman Anda dengan penawaran yang tidak ada duanya. Dari pilihan terbaik hingga penghematan luar biasa, kami menawarkan nilai tak tertandingi yang membedakan kami .
        </p>
        <p className="mt-6 info-text">Jelajahi berbagai kemungkinan yang dirancang untuk memenuhi keinginan unik Anda, melampaui ekspektasi tertinggi. Perjalanan Anda bersama kami sungguh luar biasa .</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Belanja Sekarang" iconURL={arrowRight} />
          <Button label="Pelajari Lebih Lanjut" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
