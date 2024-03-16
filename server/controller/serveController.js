import Service from "../model/servicesSchema.js";

export const getService = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      return res.status(401).json({
        message: "No services found",
      });
    } else {
      return res.status(200).json(response);
    }
  } catch (error) {
    console.log("Failed to get services");
  }
};

// export const saveService = async (req, res) => {
//   console.log(req.body);
//   console.log(req.file);
//   try {
//     // Access the uploaded file via req.file
//     const { name, description, detailDesctiption, skills, price, provider } =
//       req.body;

//     // Check if all required fields are provided
//     if (
//       !name ||
//       !description ||
//       !detailDesctiption ||
//       !skills ||
//       !price ||
//       !provider
//     ) {
//       return res
//         .status(400)
//         .json({ message: "Please provide all required fields." });
//     }

//     // Create a new service in the database
//     const newService = await Service.create({
//       name,
//       description,
//       detailDesctiption,
//       skills,
//       image: req.file, // Store the path to the uploaded image
//       price,
//       provider,
//     });

//     return res
//       .status(201)
//       .json({ message: "Service created successfully", service: newService });
//   } catch (error) {
//     console.error("Error saving service:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const saveService = async (req, res) => {
//   console.log(req.body);
//   console.log(req.file.filename);
//   try {
//     const serveData = await Service.create({
//       name: req.body.name,
//       description: req.body.description,
//       detailDesctiption: req.body.detailDesctiption,
//       skills: req.body.skills,
//       image: req.file.filename,
//       price: req.body.price,
//       provider: req.body.provider,
//     });
//     console.log("serverData", serveData);
//     if (serveData) {
//       res.status(201).send({ message: "University created successfully" });
//     } else {
//       res.status(404).send({ error: "University not created" });
//     }
//   } catch (e) {
//     res.status(404).send({ message: "Unable to create Services" });
//   }
// };

export const saveService = async (req, res) => {
  console.log(req.body);
  try {
    // Ensure that both req.body and req.file are present
    if (!req.body || !req.file || !req.file.filename) {
      return res
        .status(400)
        .json({ message: "Missing data in request body or file" });
    }

    const { name, description, detailDescription, skills, price, provider } =
      req.body;

    // Create a new service in the database
    const newService = await Service.create({
      name,
      description,
      detailDescription,
      skills,
      image: req.file.filename,
      price,
      provider,
    });

    if (newService) {
      return res
        .status(201)
        .json({ message: "Service created successfully", newService });
    } else {
      return res.status(404).json({ error: "Failed to create service" });
    }
  } catch (error) {
    console.error("Error saving service:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
