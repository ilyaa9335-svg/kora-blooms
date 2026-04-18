import Hero from "@/components/home/Hero";
import CategoryCards from "@/components/home/CategoryCards";
import ProductShowcase from "@/components/home/ProductShowcase";
import DeliveryCard from "@/components/home/DeliveryCard";
import ValueProps from "@/components/home/ValueProps";
import Reviews from "@/components/home/Reviews";
import AboutPreview from "@/components/home/AboutPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryCards />
      <ProductShowcase />
      <DeliveryCard />
      <ValueProps />
      <Reviews />
      <AboutPreview />
    </>
  );
}
