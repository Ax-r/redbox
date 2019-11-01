const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({

    f_name: { type: String, required: true, max: 50 },
    l_name: { type: String, required: true, max: 50 },
    email: { type: String, required: true, max: 100, unique: true },
    updated: { type: Date, default: Date.now },
    created: { type: Date, required: true },
    slug: { type: String, unique: true },
    status: { type: String, required: true, max: 20, default: 'active' },
    online: { type: Boolean, default: false },
    dob: { type: Date, required: true },
    pwd: { type: String, required: true, max: 50 },
    salt: { type: String, required: true, max: 100 },
    friends: { type: Array, default: [] }

});

// Export the model
module.exports = mongoose.model('User', UserSchema);