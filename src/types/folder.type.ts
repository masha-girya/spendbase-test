export enum FolderType {
  folder = "folder",
  file = "file",
}

export type TNestedItems = IFolder[]; // an array of IDs of connected folders/files

export interface IFolder {
  id: string;
  name: string;
  type: FolderType,
  nestedItems?: TNestedItems;
}