import { Prop, Schema, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type NoteDocument = HydratedDocument<Note>;


@Schema()
export class Note {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    type: string;

}

export const NoteSchema = SchemaFactory.createForClass(Note);