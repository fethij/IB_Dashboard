const { Schema, model } = require("mongoose");


import { model, Schema } from 'mongoose';

const Domain = new Schema (
    {
        host : String,
        port : String,
        endpoints : {
            grade : String,
            statusMessage : String
        } 
    }
);

export const DomainModel = model('DomainModel', Domain);