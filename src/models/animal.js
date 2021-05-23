import {Schema,mode, model} from 'mongoose';

const animalSchema = new Schema({
    name:String
});

export default model('Animal',animalSchema);