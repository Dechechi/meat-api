import * as mongoose from 'mongoose'
import { TooManyRequestsError } from 'restify-errors'

export interface MenuItem extends mongoose.Document{
    name: String,
    price: number
}

export interface Restaurant extends mongoose.Document {
    name: String,
    menu: MenuItem[]
}

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const restSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    menu: {
        type: [menuSchema],
        required: false,
        select: false,
        default: []
    }
})

export const Restaurant = mongoose.model<Restaurant>('Restaurant', restSchema)