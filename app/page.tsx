import Greetings from "./components/greetings";

export default function Home() {
  return (
    <div className="">
      <section>
        <h1 className="text-xl">Home page</h1>
      </section>
      <section>
        <Greetings name="John" />
      </section>
    </div>
  );
}
