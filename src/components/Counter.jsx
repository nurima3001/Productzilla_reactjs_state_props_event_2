import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Nilai Count: {count}</h2>
      <button onClick={incrementCount}>Tambah</button>
      <button onClick={decrementCount} disabled={count <= 0}>Kurang</button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
};

export default Counter;

    