const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const validateEmail = (email) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    return regex.test(email);
}

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'El nombre del usuario es requerido']
    },
    lastName: {
        type: String,
        trim: true, // borra espacio a los costados
        required: [true, 'El apellido del usuario es requerido']
    },
    age: {
        type: Number,
        min: [18, 'La edad minima es de 18 anios'],
        max: [90, 'La edad maxima es de 90 anios']
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'El correo es requerido'],
        //unique: true,
        validate: {
            validator: validateEmail,
            message: 'Por favor digite un correo valido'
        }
    },
    genre: {
        type: String,
        required: false,
        enum: ['masculino', 'femenino']
    },
    familiares: {
        type: [{
            type: String,
            trim: true,
            required: [true, 'El nombre del familiar es requerido']
        }],
        required: false
    }
}, { timestamps: true });

userSchema.plugin(mongooseSoftDelete);

userSchema.index({email: true, deleted: true}, {unique: true});

module.exports = User = mongoose.model('User', userSchema);