export enum FolderType {
  folder = "folder",
  file = "file",
}

export enum AccessType {
  admin = "admin",
  user = "user",
}

export type TNestedItems = IFolder[];

export interface IFolder {
  id: string;
  name: string;
  type: FolderType,
  parent: null | IFolder,
  access: AccessType,
}

export interface IFolderClient extends IFolder {
  nestedItems: IFolderClient[],
}