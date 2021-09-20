import React from 'react';

export const MyPointer = () => {
  return (
    <div
      style={{
        transform: 'translate(-50%, -10px)',
        cursor: 'pointer',
        fontSize: 32,
      }}>
      <span role={'img'} aria-label={'pointer'}>
        🔥
      </span>
    </div>
  );
};

export default MyPointer;
