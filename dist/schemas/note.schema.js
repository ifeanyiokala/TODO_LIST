"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteSchema = void 0;
const mongoose = require("mongoose");
const { Schema } = mongoose;
exports.NoteSchema = new Schema({
    name: String,
    description: String,
    tags: {
        type: String,
        enum: ["Personal", "Travel", "Life", "Work"],
    },
});
//# sourceMappingURL=note.schema.js.map