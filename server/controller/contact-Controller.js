// import Contact from "../model/contactSchema.js";

// export const contactForm = async (req, res) => {
//   try {
//     const { email, username, message } = req.body;
//     if (!email) {
//       return res.status(400).json({
//         message: "Please fill all the fields",
//       });
//     }
//     await Contact.create(req.body);
//     return res.status(200).json({
//       message: "Message sent successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// };
