import { List, listsStorage, ListItem, listsItemsStorage } from "./model";

export function createList(name: string, description: string): string {
  const newList = new List(name, description);
  listsStorage.push(newList);
  return "List created successfully";
}

export function getLists(): List[] {
  const newArray = new Array<List>(listsStorage.length);
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = listsStorage[i];
  }
  return newArray;
}

export function removeList(): void {
  listsStorage.pop();
}

export function createListItem(name: string, list: string): string {
  const newItem = new ListItem(name, list);
  listsItemsStorage.push(newItem);
  return "List item created successfully";
}

export function getListsItems(): ListItem[] {
  const newArray = new Array<ListItem>(listsItemsStorage.length);
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = listsItemsStorage[i];
  }
  return newArray;
}

export function getList(listName: string): ListItem[] {
  const allListItems = getListsItems();
  const newArray = new Array<ListItem>();
  for (let i = 0; i < allListItems.length; i++) {
    const isItemList: bool = allListItems[i].listOwner.includes(listName);
    if (isItemList) {
      newArray.push(allListItems[i]);
    }
  }
  return newArray;
}
