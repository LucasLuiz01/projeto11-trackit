import Navbar from "../../components/Navbar";
import { AddHab, Padding, Footer } from "../../components";
export default function Habits() {
  return (
    <>
      <Navbar
        img={
          "https://almeidajunior-prod1.s3.amazonaws.com/prod/uploads/news/5d81505ac6770.jpg"
        }
        text={"TrackIt"}
      />
      <Padding size={"huge"} />
      <AddHab/>
      <Footer/>
    </>
  );
}
