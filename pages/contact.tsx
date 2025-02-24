'use client';
import { useEffect, useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('John Doe');
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);

  useEffect(() => {

    setLoading(true);

    const timer = setTimeout(() => {

      fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
        .then(json => {
          setName(json.name);
          console.log(json);

          setLoading(false);
        });

    },2000);



    return () => {
      clearTimeout(timer);
      console.log('clean up');
    }

  }, [id]); //Запуск эффекта при изменении id


  return (
    <main>
      <section>
          <h1 className="text-xl">Contact page</h1>
      </section>

      <section>
          <p>Hello, {loading ? 'loading...' : name} !</p>
      </section>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setId((prevId) => (prevId < 10 ? prevId + 1 : 1))
      } // Меняем id в пределах 1-10
      > Change id</button>

    </main>
  )
}

export default ContactPage
