"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const notes = __importStar(require("./notes.js"));
yargs_1.default.command({
    command: "add",
    describe: "add a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});
yargs_1.default.command({
    command: "remove",
    describe: "remove note by title",
    builder: {
        title: {
            describe: "Title to be removed",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});
yargs_1.default.command({
    command: "list",
    describe: "list all the notes",
    handler() {
        notes.displayNotes();
    },
});
yargs_1.default.command({
    command: "read",
    describe: "read note by title",
    builder: {
        title: {
            describe: "Title to be opened",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});
yargs_1.default.parse();
