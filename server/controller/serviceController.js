import Services from "../model/serviceSchema.js";

export const getServices = async (req, res) => {
  try {
    const response = await Services.find();
    if (!response) {
      return res.status(400).json({
        message: "No services found",
      });
    } else {
      return res.status(200).json(response);
    }
  } catch (error) {
    console.log("Failed to get services");
  }
};

export const postServices = async (req, res) => {
  try {
    const {
      name,
      description,
      detailDescription,
      skills,
      price,
      provider,
      image,
    } = req.body;
    if (
      !name ||
      !description ||
      !detailDescription ||
      !skills ||
      !price ||
      !provider ||
      !image
    ) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    } else {
      const createService = await Services.create({
        name: name,
        description: description,
        detailDescription: detailDescription,
        skills: skills,
        price: price,
        provider: provider,
        image: req?.file?.filename,
      });
      res.status(200).json({ message: "Service created successfully" });
    }
  } catch (error) {
    console.log("Failed to post services");
  }
};
