import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.message);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
