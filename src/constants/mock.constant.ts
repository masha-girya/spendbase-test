import { FolderType, IFolder } from "src/types";

export const MOCK_FILE_1 = {
  id: "id5",
  name: "File 1",
  type: FolderType.file,
};

export const MOCK_FILE_2 = {
  id: "id6",
  name: "File 2",
  type: FolderType.file,
};

export const MOCK_FILE_3 = {
  id: "id7",
  name: "File 3",
  type: FolderType.file,
};

export const MOCK_FOLDER_4: IFolder = {
  id: "id4",
  name: "Folder 4",
  type: FolderType.folder,
  nestedItems: [MOCK_FILE_2],
};

export const MOCK_FOLDER_3: IFolder = {
  id: "id3",
  name: "Folder 3",
  type: FolderType.folder,
  nestedItems: [MOCK_FOLDER_4],
};

export const MOCK_FOLDER_2: IFolder = {
  id: "id2",
  name: "Folder 2",
  type: FolderType.folder,
  nestedItems: [MOCK_FILE_3, MOCK_FOLDER_3],
};

export const MOCK_FOLDER_1: IFolder = {
  id: "id1",
  name: "Folder 1",
  type: FolderType.folder,
  nestedItems: [MOCK_FOLDER_2, MOCK_FOLDER_3, MOCK_FILE_1],
};

export const MOCK_FILESYSTEM = {
  data: [
    MOCK_FOLDER_1,
    MOCK_FOLDER_2,
    MOCK_FOLDER_3,
    MOCK_FOLDER_4,
    MOCK_FILE_1,
    MOCK_FILE_2,
    MOCK_FILE_3,
  ],
};
