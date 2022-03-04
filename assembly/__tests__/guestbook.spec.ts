import { createList, getLists } from "../main";
import { listsStorage } from "../model";

describe("List tests", () => {
  afterEach(() => {
    while (listsStorage.length > 0) {
      listsStorage.pop();
    }
  });

  it("adds a list", () => {
    createList("hello world", "test");
    expect(listsStorage.length).toBe(1, "should only contain one list");
    expect(listsStorage[0].name).toBe("hello world");
  });

  it("get lists", () => {
    createList("hello world", "test");
    const messagesArr = getLists();
    expect(messagesArr.length).toBe(1, "should be one list");
    expect(messagesArr[0].description).toBe("test");
  });
});
