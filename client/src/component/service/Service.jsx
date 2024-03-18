import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Service() {
  const [services, setServices] = useState([]);
  console.log("serviCes", services);
  const navigate = useNavigate();

  useEffect(() => {
    const getServicesData = async () => {
      try {
        const response = await fetch("http://localhost:5000/serviceData", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const serviceData = await response.json();
          console.log("Response", serviceData);
          console.log("Image Response", serviceData[0].image);

          setServices(serviceData);
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.error("Services error:", error);
      }
    };

    getServicesData();
  }, []);

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container">
          <div className="grid grid-three-cols">
            {services.map((curElem) => (
              <div className="card" key={curElem._id}>
                <div className="card-img">
                  <img
                    src={`http://localhost:5000/${curElem.image}`}
                    alt="image"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{curElem.provider}</p>
                    <p>Price:${curElem.price}</p>
                  </div>
                  <h2>{curElem.name}</h2>
                  <p>{curElem.description}</p>
                </div>
                <div className="action">
                  {/* <button
                    type="button"
                    style={{
                      marginLeft: "90px",
                      marginBottom: "50px",
                      width: "100px",
                    }}
                  >
                    Show Details
                  </button> */}
                  <button
                    style={{
                      width: "200px", // Adjust the width as needed
                      padding: "10px", // Add padding for better appearance
                      fontSize: "16px", // Adjust font size as needed
                      borderRadius: "5px", // Add border radius for rounded corners
                      backgroundColor: "blue", // Change background color as needed
                      color: "white", // Change text color as needed
                      border: "none", // Remove border
                      cursor: "pointer", // Add cursor pointer for better user experience
                      marginLeft: "40px",
                      marginBottom: "50px",
                    }}
                    onClick={() => {
                      navigate(
                        "/serveDetail" +
                          "?id=" +
                          curElem._id +
                          "&name=" +
                          curElem.name
                      );
                    }}
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
