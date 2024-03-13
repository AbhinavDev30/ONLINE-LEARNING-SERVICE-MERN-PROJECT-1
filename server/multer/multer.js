export const storageService = multer.diskStorage({
  destination: "uploadsService/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const uploadsService = multer({
  storage: storageService,
});
