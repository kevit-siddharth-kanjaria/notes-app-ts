type note = {
  title: string;
  body: string | undefined;
};

import fs from "fs";
import chalk from "chalk";

export const addNote = (title: string, body?: string): void => {
  const notes: note[] = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New note added!"));
  } else {
    console.log(chalk.red("Note title taken..."));
  }
};

export const saveNotes = (notes: note[]): void => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

export const removeNote = (title: string): void => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  if (updatedNotes.length === notes.length) {
    console.log(chalk.red("No note with given title"));
  } else {
    saveNotes(updatedNotes);
    console.log(chalk.blue("Removed note : " + title));
  }
};

export const loadNotes = (): note[] => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

export const displayNotes = (): void => {
  const notes = loadNotes();
  console.log(chalk.yellow.inverse("All notes : "));
  let i = 1;
  for (const key in notes) {
    if (Object.prototype.hasOwnProperty.call(notes, key)) {
      const element: note = notes[key];
      console.log(chalk.yellow(`${i} ` + element.title));
      i++;
    }
  }
  if (notes.length === 0) {
    console.log(chalk.red("No note with given title"));
  }
};

export const readNote = (title: string): void => {
  const notes = loadNotes();
  const openNote = notes.find((note) => note.title === title);
  if (!openNote) {
    console.log(chalk.red("No not with given title"));
  } else {
    console.log(chalk.yellow.inverse(title));
    console.log(openNote.body);
  }
};
