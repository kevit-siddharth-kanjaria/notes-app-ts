"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readNote = exports.displayNotes = exports.loadNotes = exports.removeNote = exports.saveNotes = exports.addNote = void 0;
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const addNote = (title, body) => {
    const notes = (0, exports.loadNotes)();
    const duplicateNotes = notes.find((note) => note.title === title);
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body,
        });
        (0, exports.saveNotes)(notes);
        console.log(chalk_1.default.green("New note added!"));
    }
    else {
        console.log(chalk_1.default.red("Note title taken..."));
    }
};
exports.addNote = addNote;
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs_1.default.writeFileSync("notes.json", dataJSON);
};
exports.saveNotes = saveNotes;
const removeNote = (title) => {
    const notes = (0, exports.loadNotes)();
    const updatedNotes = notes.filter((note) => note.title !== title);
    if (updatedNotes.length === notes.length) {
        console.log(chalk_1.default.red("No note with given title"));
    }
    else {
        (0, exports.saveNotes)(updatedNotes);
        console.log(chalk_1.default.blue("Removed note : " + title));
    }
};
exports.removeNote = removeNote;
const loadNotes = () => {
    try {
        const dataBuffer = fs_1.default.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (error) {
        return [];
    }
};
exports.loadNotes = loadNotes;
const displayNotes = () => {
    const notes = (0, exports.loadNotes)();
    console.log(chalk_1.default.yellow.inverse("All notes : "));
    let i = 1;
    for (const key in notes) {
        if (Object.prototype.hasOwnProperty.call(notes, key)) {
            const element = notes[key];
            console.log(chalk_1.default.yellow(`${i} ` + element.title));
            i++;
        }
    }
    if (notes.length === 0) {
        console.log(chalk_1.default.red("No note with given title"));
    }
};
exports.displayNotes = displayNotes;
const readNote = (title) => {
    const notes = (0, exports.loadNotes)();
    const openNote = notes.find((note) => note.title === title);
    if (!openNote) {
        console.log(chalk_1.default.red("No not with given title"));
    }
    else {
        console.log(chalk_1.default.yellow.inverse(title));
        console.log(openNote.body);
    }
};
exports.readNote = readNote;
