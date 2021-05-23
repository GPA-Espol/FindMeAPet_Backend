import {Schema,mode, model} from 'mongoose';

const userSchema = new Schema({
    name:String,
    password:SVGStringList
});

export default model('User',userSchema);