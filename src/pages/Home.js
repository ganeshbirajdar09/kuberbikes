import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        <Link to="/projects" className="btn">
          Projects
        </Link>
        <div id="slider">
          <figure>
            <img
              src="https://scontent.fpnq8-1.fna.fbcdn.net/v/t39.30808-6/248222228_110252091445560_1628459952476567315_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Myk7us8INnYAX_EnPeh&_nc_ht=scontent.fpnq8-1.fna&oh=00_AT-cfIvAzSpwcjF_EtRCDyzQn-Cx0dTg6fpQGHcG3bfINA&oe=61E53E62"
              alt="1"
            />

            <img
              src="https://scontent.fpnq8-1.fna.fbcdn.net/v/t39.30808-6/p640x640/271591348_136251048845664_948826887158424222_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=N_5-GgpNkzIAX9nLHVX&_nc_ht=scontent.fpnq8-1.fna&oh=00_AT-b4U1puvkF4svR6gI3P9esntt_YjqqYNFT84zb0uTMiw&oe=61E55921"
              alt="3"
            />
            <img
              src="https://scontent.fpnq8-1.fna.fbcdn.net/v/t39.30808-6/248222228_110252091445560_1628459952476567315_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Myk7us8INnYAX_EnPeh&_nc_ht=scontent.fpnq8-1.fna&oh=00_AT-cfIvAzSpwcjF_EtRCDyzQn-Cx0dTg6fpQGHcG3bfINA&oe=61E53E62"
              alt="1"
            />
            <img
              src="https://scontent.fpnq8-1.fna.fbcdn.net/v/t39.30808-6/p640x640/271591348_136251048845664_948826887158424222_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=N_5-GgpNkzIAX9nLHVX&_nc_ht=scontent.fpnq8-1.fna&oh=00_AT-b4U1puvkF4svR6gI3P9esntt_YjqqYNFT84zb0uTMiw&oe=61E55921"
              alt="3"
            />
          </figure>
        </div>

        <div id="features" className="text-center">
          <div className="container text-center">
            <div className="col-md-12 section-title">
              <br />
              <h2 className="text-center">Features</h2>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <i className="fa fa-leaf"></i>
                <h3 className="color black">Eco Friendly</h3>
                <p></p>
              </div>
              <div className="col-xs-6 col-md-3">
                <i className="fa fa-tools"></i>
                <h3 className="color black">Low Maintenance</h3>
                <p></p>
              </div>
              <div className="col-xs-6 col-md-3">
                <i className="fa fa-id-badge"></i>
                <h3 className="color black">No License</h3>
                <p></p>
              </div>
              <div className="col-xs-6 col-md-3">
                <i className="fa fa-book"></i>
                <h3 className="color black">No Registration</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          non eveniet, eos eum dicta ipsam alias corporis, est labore amet
          libero facilis culpa molestias? Iste impedit dicta nulla error modi
          sequi cumque consequuntur dolore sint, atque aliquid itaque suscipit,
          voluptatem cum amet minus, iusto veritatis pariatur quo? Nobis, illum
          error!
        </p>

        <Link to="/customers" className="btn">
          Proud Customers
        </Link>
      </div>
    </>
  );
};

export default Home;
