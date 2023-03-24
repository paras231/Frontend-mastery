import React from "react";
import "./layout.scss";

const Review = () => {
  const image =
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text card-desc-section">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary review-card-btn">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Review;

export const GridView = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6  col-lg-3">
            <div className="card text-center mb-5 custom-card">
              <img
                src="https://media.istockphoto.com/photos/ko-lipe-and-andman-sea-in-thailand-picture-id1045564860?b=1&k=20&m=1045564860&s=170667a&w=0&h=O6z87V3pItnHkSURTsOmRg4Sz-QObrbLz6G_QtcGVvw="
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h3 className="card-title py-2">Jack Willson</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3">
            <div className="card text-center mb-5 custom-card">
              <img
                src="https://media.istockphoto.com/photos/ko-lipe-and-andman-sea-in-thailand-picture-id1045564860?b=1&k=20&m=1045564860&s=170667a&w=0&h=O6z87V3pItnHkSURTsOmRg4Sz-QObrbLz6G_QtcGVvw="
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h3 className="card-title py-2">Jack Willson</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3">
            <div className="card text-center mb-5 custom-card">
              <img
                src="https://media.istockphoto.com/photos/ko-lipe-and-andman-sea-in-thailand-picture-id1045564860?b=1&k=20&m=1045564860&s=170667a&w=0&h=O6z87V3pItnHkSURTsOmRg4Sz-QObrbLz6G_QtcGVvw="
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h3 className="card-title py-2">Jack Willson</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3">
            <div className="card text-center mb-5 custom-card">
              <img
                src="https://media.istockphoto.com/photos/ko-lipe-and-andman-sea-in-thailand-picture-id1045564860?b=1&k=20&m=1045564860&s=170667a&w=0&h=O6z87V3pItnHkSURTsOmRg4Sz-QObrbLz6G_QtcGVvw="
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h3 className="card-title py-2">Jack Willson</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3">
            <div className="card text-center mb-5 custom-card">
              <img
                src="https://media.istockphoto.com/photos/ko-lipe-and-andman-sea-in-thailand-picture-id1045564860?b=1&k=20&m=1045564860&s=170667a&w=0&h=O6z87V3pItnHkSURTsOmRg4Sz-QObrbLz6G_QtcGVvw="
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h3 className="card-title py-2">Jack Willson</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
