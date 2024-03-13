import React, { useState, useEffect } from "react";

function Service() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServicesData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/data/services",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const serviceData = await response.json();
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
            {services.map((curElem, index) => (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src="/images/design.png" alt="designer" width="200" />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{curElem.provider}</p>
                    <p>Price:${curElem.price}</p>
                  </div>
                  <h2>{curElem.name}</h2>
                  <p>{curElem.description}</p>
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
