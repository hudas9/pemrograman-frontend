import Navbar from "./../components/Navbar/Navbar";
import Hero from "./../components/Hero/Hero";
import Indonesia from "./../components/Indonesia/Indonesia";
import Province from "../components/Province/Province";
import Form from "./../components/Form/Form";
import Footer from "./../components/Footer/Footer";
import { useState } from "react";
import data from "./../utils/constants/provinces";

function Home() {
  const [provinces, setProvinces] = useState(data);
  return (
    <>
      <Navbar />
      <Hero />
      <Indonesia />
      <Province provinces={provinces} setProvinces={setProvinces} />
      <Form provinces={provinces.provinces} setProvinces={setProvinces} />
      <Footer />
    </>
  );
}

export default Home;
