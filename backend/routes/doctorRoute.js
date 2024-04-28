const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctorController");

router.get("/", doctorController.doctors);
router.get("/:id", doctorController.doctor);
router.post("/create", doctorController.createDoctor);
router.delete("/delete/:doctorID", doctorController.deleteDoctor);
router.put("/update/:id", doctorController.updateDoctor);
router.get("/name/:name", doctorController.getDoctorByName);



module.exports = router;
