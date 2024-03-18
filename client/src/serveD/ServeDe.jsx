import { Link, useLocation } from "react-router-dom";
import "./ServeDet.css";
import { useMemo, useEffect, useState } from "react";
import axios from "axios";

function ServeDe() {
  let [serviceDetail, setServiceDetail] = useState("");
  let queryParam = useQuery();
  function useQuery() {
    const { search } = useLocation();
    //esme URL kai parameter ate hai
    return useMemo(() => {
      return new URLSearchParams(search);
      //URLSearchParams kai through us parameter ko handel kar sakte hai
    }, [search]);
  }

  //Get data

  function getAll() {
    axios
      .get(`http://localhost:5000/serviceDetail?id=` + queryParam.get("id"))
      .then((res) => {
        // console.log(res.data.getServiceDetail);
        setServiceDetail(res.data.getServiceDetail); // Set the state with the JSON data
      })
      .catch((e) => {
        console.log("Data not found", e);
      });
  }
  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <div className="container ">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6" style={{ width: "100%" }}>
                <div className="preview-pic tab-content">
                  <div
                    className="tab-pane active"
                    //   id="pic-1"
                  >
                    <img
                      src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Product Preview 1"
                      height="350"
                      style={{ width: "100%" }} // Apply width inline
                    />
                  </div>
                </div>

                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <Link data-target="#pic-1" data-toggle="tab">
                      <img
                        src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Thumbnail 1"
                        height="100"
                        width="100"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link data-target="#pic-2" data-toggle="tab">
                      <img
                        src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Thumbnail 2"
                        height="100"
                        width="100"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link data-target="#pic-3" data-toggle="tab">
                      <img
                        src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Thumbnail 3"
                        height="100"
                        width="100"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link data-target="#pic-4" data-toggle="tab">
                      <img
                        src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Thumbnail 4"
                        height="100"
                        width="200"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h1 className="product-title">{serviceDetail.name}</h1>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked">⭐</span>
                    <span className="fa fa-star checked">⭐</span>
                    <span className="fa fa-star checked">⭐</span>
                    <span className="fa fa-star">⭐</span>
                    <span className="fa fa-star">⭐</span>
                  </div>
                  <br />
                  <br />
                  <h2>
                    <span className="review-no">41 reviews</span>
                  </h2>
                </div>
                <p className="product-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium deserunt temporibus ipsum unde delectus blanditiis
                  illo voluptatum tempore provident animi odit quod, autem
                  numquam dicta fuga tempora minus tenetur totam voluptate
                  consequatur assumenda, modi labore nobis. Est omnis deserunt
                  quam, blanditiis, ipsum pariatur perferendis id eveniet, neque
                  necessitatibus libero! Molestias.
                </p>
                <h2 className="price">
                  current price: <span>${serviceDetail.price}</span>
                </h2>
                <br />
                <br />
                <br />
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>

                <br />

                <div className="action">
                  <br />
                  <br />

                  <button
                    className="add-to-cart btn btn-default"
                    type="button"
                    style={{ width: "50%" }}
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServeDe;
