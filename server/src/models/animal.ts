import { Schema, model, Model, Document } from 'mongoose'

export interface Animal extends Document  {
  name: string,
  age: number,
  type: string,
  //vivo, muerto
  state: string
}

export type AnimalModelT = Model<Animal>

export const animalSchema: Schema = new Schema({
  name: {
    type: String
  },
  age: { type: Number, default: 0 },
  type: { type: String},
  state: { type: Number }
})

const AnimalModel = model<Animal>('Animal',animalSchema )

export default AnimalModel
