import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/greetings/random')
      .then((response) => response.json())
      .then((data) => {
        setGreeting(data.greeting);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Greeting Message</h2>
      {loading ? <p>Loading...</p> : <p>{greeting}</p>}
    </div>
  );
};

export default Greeting;
