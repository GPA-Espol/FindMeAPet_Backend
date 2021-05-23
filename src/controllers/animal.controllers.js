import Animal from '../models/animal'

export const getAnimals = async (req, res) => {
    
    const animals= await Animal.find();
    res.json(animals);
};
export const createAnimal = async (req, res) => {
    const { name } = req.body;
    const newAnimal = new Animal({ name });
    const animalSave = await newAnimal.save();
    res.json(animalSave);
};

export const updateAnimalById = async (req, res) => {
    const updateAnimal = await Animal.findByIdAndUpdate(req.params.animalId,req.body,{
        new : true
    });
    res.status(200).json(updateAnimal);
};
export const getAnimalById = async (req, res) => {
    const animal = await Animal.findById(req.params.animalId);
    res.status(200).json(animal);

};
export const deleteAnimalById = async (req, res) => {
    const deleteAnimal = await Animal.findByIdAndDelete(req.params.animalId);
    res.status(204).json();
};