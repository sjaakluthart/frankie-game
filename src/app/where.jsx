import React from 'react';

function Where() {
  return (
    <section className="where">
      <p>Waar ligt Frankie?</p>
      <img src="/assets/liggend.jpg" />
      <a href="#outside" className="left">buiten</a>
      <a href="#inside" className="right">binnen</a>
    </section>
  );
}

export default Where;
