import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSections from "./components/home/products";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductsSections />
    </main>
  );
}
