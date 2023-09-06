"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let NoteService = class NoteService {
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    async createANote(createNoteDTO) {
        const newNote = await this.noteModel.create(createNoteDTO);
        return newNote;
    }
    async getAllNotes() {
        const notes = await this.noteModel.find().exec();
        return notes;
    }
    async getANote(noteId) {
        const note = await this.noteModel.findById(noteId).exec();
        return note;
    }
    async updateANote(_id, createNoteDTO) {
        const note = await this.noteModel.findByIdAndUpdate(_id, createNoteDTO, { new: true });
        return note;
    }
    async deleteANote(_id) {
        const note = await this.noteModel.findByIdAndRemove(_id);
        return note;
    }
};
exports.NoteService = NoteService;
exports.NoteService = NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)("Note")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NoteService);
//# sourceMappingURL=note.service.js.map