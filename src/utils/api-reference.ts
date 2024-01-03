import { FolderType, TNestedItems } from "src/types";

interface IApiReference {
  id: string;
  name: string;
  type: FolderType;
  nestedItems?: TNestedItems;
}
