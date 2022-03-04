import { context, PersistentVector } from "near-sdk-as";
@nearBindgen
export class ListItem {
  name: string;
  listOwner: string;
  sender: string = context.sender;
  constructor(public textName: string, textlistOwner: string) {
    this.name = textName;
    this.listOwner = textlistOwner;
  }
}
@nearBindgen
export class List {
  name: string;
  description: string;
  sender: string = context.sender;
  constructor(public textName: string, textDescription: string) {
    this.name = textName;
    this.description = textDescription;
  }
}

export const listsStorage = new PersistentVector<List>("list");
export const listsItemsStorage = new PersistentVector<ListItem>("list-items");
