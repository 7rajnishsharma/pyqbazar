import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Navbar />
      <div className="home">

        <div className="home-hero">
          <div className="home-hero-image">
            <img src="home.png" alt="home" />
          </div>
          <div className="home-content">
            <h1 style={{fontSize: '2.5rem', fontWeight:'500'}}>Unlock Your Academic Success:</h1>
            <p style={{fontSize: '1.56rem', fontWeight:'500'}}>Dive into a Sea of Knowledge with our Archive of Previous Year Questions!</p>
          </div>
        </div>
        <div className="home-course">
          <div className="home-course-container">
            <div className="home-course">
              <div className="course-container">

                <Link to="/cse" className="card "  >
                  <div className="img">
                    <img src="https://i.pinimg.com/564x/88/4f/c4/884fc4a9e9431fa0cf6107381ee57997.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Computer Science Engineering</h5>
                    <p className="card-text"></p>
                  </div>
                </Link>


                <Link to="/" className="card"  >
                  <div className="img">
                    <img src="https://i.pinimg.com/564x/f0/79/f8/f079f83bbc52cbebccee1756108a1980.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Electronics and Communications Engineering</h5>
                    <p className="card-text"></p>
                  </div>
                </Link>


                <Link to="/" className="card"  >
                  <div className="img">
                    <img src="https://i.pinimg.com/564x/ed/ef/98/edef985d1ccf241d2dbaf946270d82c4.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Mechanical Engineering</h5>
                    <p className="card-text"></p>
                  </div>
                </Link>


                <Link to="/" className="card"  >
                  <div className="img">
                    <img src="https://i.pinimg.com/564x/3e/cc/5d/3ecc5dc7737fd0a2411624749c4cb7d9.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Civil Engineering</h5>
                    <p className="card-text"></p>
                  </div>
                </Link>


                <Link to="/" className="card"  >
                  <img src="https://i.pinimg.com/564x/fe/4d/8e/fe4d8e67fdb83f5624d6ee8bdc8a47c0.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Bachelor of Computer Applications</h5>
                    <p className="card-text"></p>
                  </div>
                </Link>


                <Link to="/" className="card"  >
                  <img src="https://i.pinimg.com/564x/2b/75/1c/2b751c42adf805d8a770a0ca1e2f9693.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Bachelor of Business Administration</h5>
                    <p className="card-text"></p>
                  </div>
                </Link>


                <Link to="/" className="card"  >
                  <img src="https://i.pinimg.com/564x/ca/d5/cb/cad5cbdc4cc71779be35f1217f80e5f9.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Bachelor of Journalism and Mass Communication</h5>
                    <p className="card-text"></p>
                  </div>
                </Link>


                <Link to="/" className="card"  >
                  <img src="https://i.pinimg.com/564x/ef/d6/24/efd624a3548899e05673bf11a9b05224.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Bachelor of Laws</h4>
                    <p className="card-text"></p>
                  </div>
                </Link>


                <Link to="/" className="card"  >
                  <img src="https://i.pinimg.com/564x/94/15/cc/9415cc07c3e803d23269140c3ed06579.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Master of Laws</h4>
                    <p className="card-text"></p>
                  </div>
                </Link>


                <Link to="/" className="card"  >
                  <img src="https://i.pinimg.com/736x/b9/b8/11/b9b811754847f4627d164fde7f646018.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Master of Business Administration</h4>
                    <p className="card-text"></p>
                  </div>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
