import React from 'react';

export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(#eeee , .3)',
        backdropFilter: ' blur(10px)',
        left: 0,
        top: 0,
        zIndex: 50,
      }}
    ></div>
  );
}
