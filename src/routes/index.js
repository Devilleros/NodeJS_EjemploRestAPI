const Router = require("express");
const router = Router(); 
// Routes
router.get("/test", (req,res) => {
    const data = {
        "name" : "Devilleros",
        "website" : "DEVIROS.com"
    }
    res.json(data);
});

module.exports = router;