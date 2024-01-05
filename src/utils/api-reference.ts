import { AccessType, FolderType, IFolder } from "src/types";

interface IApiReference {
  id: string;
  name: string;
  type: FolderType,
  parent: null | IFolder,
  access: AccessType,
}
