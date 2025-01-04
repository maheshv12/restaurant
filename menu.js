const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Fetch all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch menu items', error: err });
    }
});

module.exports = router;
