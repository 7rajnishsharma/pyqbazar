// Cse.jsx
import React from 'react';
// import { Route, Routes, Link, useParams } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';
import Sem1 from './Sem1'; // Your Sem1 component
import Sem2 from './sem2'; // Your Sem2 component
import Sem3 from './Sem3'; // Your Sem3 component
import Sem4 from './Sem4'; // Your Sem4 component
import Sem5 from './Sem5'; // Your Sem5 component
import Sem6 from './sem6'; // Your Sem6 component
import Sem7 from './Sem7'; // Your Sem7 component
import Sem8 from './Sem8'; // Your Sem8 component
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const Cse = () => {
  //   const { sem } = useParams();
  window.scrollTo(0, 0);
  return (
    <div>
      <Navbar />
      <div className="cse">
        <h2 className="pb-3 fw-bold">Computer Science Engineering</h2>
        <div className="sem-list">
            <Link to="/cse/sem1">Semester 1</Link>
            <Link to="/cse/sem2">Semester 2</Link>
            <Link to="/cse/sem3">Semester 3</Link>
            <Link to="/cse/sem4">Semester 4</Link>
            <Link to="/cse/sem5">Semester 5</Link>
            <Link to="/cse/sem6">Semester 6</Link>
            <Link to="/cse/sem7">Semester 7</Link>
            <Link to="/cse/sem8">Semester 8</Link>
        </div>

        <Routes>
          <Route path="sem1" element={<Sem1 />} />
          <Route path="sem2" element={<Sem2 />} />
          <Route path="sem3" element={<Sem3 />} />
          <Route path="sem4" element={<Sem4 />} />
          <Route path="sem5" element={<Sem5 />} />
          <Route path="sem6" element={<Sem6 />} />
          <Route path="sem7" element={<Sem7 />} />
          <Route path="sem8" element={<Sem8 />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default Cse;
