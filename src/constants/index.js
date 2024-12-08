import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Penjualan" },
  { value: "250k+", label: "Pelanggan" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "Rp 3.173.050",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "Rp 3.331.702",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$3.490.355",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$3.649.007",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Gratis Ongkir",
    subtext: "Nikmati belanja lancar dengan layanan pengiriman gratis kami.",
  },
  {
    imgURL: shieldTick,
    label: "Pembayaran Aman",
    subtext: "Rasakan transaksi tanpa rasa khawatir dengan opsi pembayaran kami yang aman.",
  },
  {
    imgURL: support,
    label: "Senang membantu Anda",
    subtext: "Tim kami yang berdedikasi siap membantu Anda di setiap langkah.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Bagas",
    rating: 4.5,
    feedback: "Perhatian terhadap detail dan kualitas produk melebihi ekspektasi saya. Sangat direkomendasikan!",
  },
  {
    imgURL: customer2,
    customerName: "Coki",
    rating: 4.5,
    feedback: "Produknya tidak hanya memenuhi tetapi melampaui ekspektasi saya. Saya pasti akan menjadi pelanggan kembali!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "bagas:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
