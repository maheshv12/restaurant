const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem');

mongoose.connect('mongodb://localhost:27017/restaurant', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

const seedMenuItems = async () => {
    const items = [
        { name: 'Burger', category: 'Fast Food', price: 5, imageUrl: 'burger.jpg' },
        { name: 'Pizza', category: 'Fast Food', price: 8, imageUrl: 'pizza.jpg' },
        { name: 'Pasta', category: 'Italian', price: 7, imageUrl: 'pasta.jpg' },
        { name: 'Sushi', category: 'Japanese', price: 12, imageUrl: 'sushi.jpg' },
        { name: 'Salad', category: 'Healthy', price: 4, imageUrl: 'salad.jpg' },
        { name: 'Steak', category: 'Grill', price: 15, imageUrl: 'steak.jpg' },
        { name: 'Tacos', category: 'Mexican', price: 6, imageUrl: 'tacos.jpg' },
        { name: 'Ice Cream', category: 'Dessert', price: 3, imageUrl: 'icecream.jpg' },
        { name: 'Soup', category: 'Appetizer', price: 4, imageUrl: 'soup.jpg' },
        { name: 'Fries', category: 'Fast Food', price: 3, imageUrl: 'fries.jpg' },
        { name: 'Noodles', category: 'Chinese', price: 5, imageUrl: 'noodles.jpg' },
        { name: 'Sandwich', category: 'Breakfast', price: 4, imageUrl: 'sandwich.jpg' },
        { name: 'Pancakes', category: 'Breakfast', price: 6, imageUrl: 'pancakes.jpg' },
        { name: 'Brownie', category: 'Dessert', price: 3, imageUrl: 'brownie.jpg' },
        { name: 'Coffee', category: 'Beverage', price: 2, imageUrl: 'coffee.jpg' },
    ];

    try {
        await MenuItem.deleteMany(); // Clear the collection
        await MenuItem.insertMany(items);
        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding the database:', err);
        mongoose.connection.close();
    }
};

seedMenuItems();
