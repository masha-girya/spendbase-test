import { IFolder, IFolderClient } from "src/types";

export const buildNestedStructure = (items: IFolder[]) => {
  const helperDataStructure: any = {};
  const root: IFolderClient | any = {};

  items.forEach((item: IFolder) => {
    const { id, parent } = item;
    helperDataStructure[id] = { ...item, nestedItems: [] };

    if (parent) {
      if (helperDataStructure[parent.id]) {
        helperDataStructure[parent.id].nestedItems.push(helperDataStructure[id]);
      } else {
        helperDataStructure[parent.id] = { ...parent, nestedItems: [] };

      }
    } else {
      Object.assign(root, helperDataStructure[id]);
    }
  });

  return root;
};