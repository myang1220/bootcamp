import Image from "next/image";
import styles from "./page.module.css";
import MyCard from "./components/MyCard"

export default function Home() {
  return (
    <div>
      <p>Hello World!</p>
      <MyCard
      heading="Heading"
      paragraph="this is some text that I have written."
      buttonText="Clicked 1 time!"></MyCard>
      <MyCard
      heading="Heading"
      paragraph="this is some text that I have written."
      buttonText="Clicked 1 time!"></MyCard>
      <MyCard
      heading="Heading"
      paragraph="this is some text that I have written."
      buttonText="Clicked 1 time!"></MyCard>
      <MyCard
      heading="Heading"
      paragraph="this is some text that I have written."
      buttonText="Clicked 1 time!"></MyCard>
      </div>
  );
}
