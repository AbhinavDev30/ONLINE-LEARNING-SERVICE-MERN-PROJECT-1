import { useState } from "react";

function AddServices() {
  const [contact, setContact] = useState({
    name: "",
    description: "",
    detailDesctiption: "",
    skills: "",
    price: "",
    image: "",
    provider: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Add Services</h1>
        </div>

        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <h1>We Are 24/7 Avalible For You </h1>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="description">Description</label>
                <input
                  type="description"
                  name="description"
                  id="email"
                  autoComplete="off"
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Skills</label>
                <input
                  type="skills"
                  name="skills"
                  id="skills"
                  autoComplete="off"
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="provider">Provider</label>
                <input
                  type="provider"
                  name="provider"
                  id="provider"
                  autoComplete="off"
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="price">Price</label>
                <input
                  type="price"
                  name="price"
                  id="price"
                  autoComplete="off"
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="detailDescription">Detailed Description</label>
                <textarea
                  name="detailDescription"
                  id="detailDescription"
                  autoComplete="off"
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
}

export default AddServices;
