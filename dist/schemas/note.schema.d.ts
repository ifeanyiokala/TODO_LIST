import * as mongoose from 'mongoose';
export declare const NoteSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    description?: string;
    tags?: "Personal" | "Travel" | "Life" | "Work";
}, mongoose.Document<unknown, {}, {
    name?: string;
    description?: string;
    tags?: "Personal" | "Travel" | "Life" | "Work";
}> & {
    name?: string;
    description?: string;
    tags?: "Personal" | "Travel" | "Life" | "Work";
} & {
    _id: mongoose.Types.ObjectId;
}>;
