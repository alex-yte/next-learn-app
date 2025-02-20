import Greetings from "./components/greetings";
import Hey from "./components/hey";

export default function Home() {
  return (
    <div className="">
      <section>
        <h1 className="text-xl">Home page</h1>
      </section>
      <section>
        <Greetings name="John" />
      </section>
      <section>
        <Hey name="John" />
      </section>
    </div>
  );
}
