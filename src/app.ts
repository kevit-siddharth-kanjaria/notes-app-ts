import yargs from "yargs";
import * as notes from "./notes.js";

yargs.command({
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

yargs.command({
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

yargs.command({
  command: "list",
  describe: "list all the notes",
  handler() {
    notes.displayNotes();
  },
});

yargs.command({
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
yargs.parse();
