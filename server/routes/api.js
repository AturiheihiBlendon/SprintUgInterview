const Restaurant = require('../models/restaurant')
const upload = require('../middleware/upload')
const express = require('express')
const router = express.Router()


// get all the restaurants
router.get('/',async(req, res) => {
    const data = await Restaurant.find()
    // console.log(data);
    res.json(data);
})

// add a restaurant
router.post('/add', upload.single('image'), async(req, res) => {
    try {
        const data = new Restaurant({
            name: req.body.name,
            cuisine: req.body.cuisine,
            location: req.body.location,
            image: req.file.path
            
        })
        const result = await data.save()
        res.json(result)
    } catch (err) {
        console.log(err)
    }
    
})

// get a single restaurant
router.get('/:id', async(req, res) =>{
    try {
        const {id} = req.params
        const data = await Restaurant.findById(id);
        if (!data) {
        // console.log("no restaurant");
        res.status(404).json({msg: `No restaurant found by id ${id}`})
        }
        // console.log(data);
        res.json(data);
        
    } catch (error) {
        console.log(error)
        
    }
    
})

// Edit a restaurant
router.put('/edit/:id', upload.single('image'), async(req, res) =>{
    try {
        const {id} = req.params;
        const dataupdate = {
            name: req.body.name,
            cuisine: req.body.cuisine,
            location: req.body.location,
        };
        if (req.file) {
            dataupdate.image = req.file.path
        }
        const data = await Restaurant.findByIdAndUpdate(id,dataupdate)
        const updated = await Restaurant.findById(id)
        if (!data) {
            // console.log("no restaurant")
            res.status(404).json({msg: `No restaurant found by id ${id}`})
        }
        // console.log(updated);
        res.json(updated)
        
    } catch (error) {
        res.json({"error": error})
        
    }
})

// delete a restaurant
router.delete('/delete/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const data = await Restaurant.findByIdAndDelete(id)
        if (!data) {
            // console.log("no restaurant")
            res.status(404).json({msg: `No restaurant found by id ${id}`})
        }
        // console.log("Deleted");
        res.status(204).json({msg: "Deleted"})
        
    } catch (error) {
        res.json({"error": error})
        
    }
})



module.exports = router;