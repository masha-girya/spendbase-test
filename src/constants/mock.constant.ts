import { AccessType, FolderType } from "src/types";

const MOCK_FOLDER_1 = {
  id: "Folder 1",
  name: "Folder 1",
  type: FolderType.folder,
  parent: null,
  access: AccessType.user,
};

const MOCK_FOLDER_2 = {
  id: "Folder 2",
  name: "Folder 2",
  type: FolderType.folder,
  parent: MOCK_FOLDER_1,
  access: AccessType.user,
};

const MOCK_FOLDER_3 = {
  id: "Folder 3",
  name: "Folder 3",
  type: FolderType.folder,
  parent: MOCK_FOLDER_1,
  access: AccessType.admin,
};

const MOCK_FOLDER_6 = {
  id: "Folder 6",
  name: "Folder 6",
  type: FolderType.folder,
  parent: MOCK_FOLDER_1,
  access: AccessType.user,
};

const MOCK_FILE_3 = {
  id: "File 3",
  name: "File 3",
  type: FolderType.file,
  parent: MOCK_FOLDER_2,
  access: AccessType.user,
};

const MOCK_FOLDER_4 = {
  id: "Folder 4",
  name: "Folder 4",
  type: FolderType.folder,
  parent: MOCK_FOLDER_3,
  access: AccessType.admin,
};

const MOCK_FILE_4 = {
  id: "File 4",
  name: "File 4",
  type: FolderType.file,
  parent: MOCK_FOLDER_4,
  access: AccessType.admin,
};

const MOCK_FOLDER_5 = {
  id: "Folder 5",
  name: "Folder 5",
  type: FolderType.folder,
  parent: MOCK_FOLDER_2,
  access: AccessType.user,
};

const MOCK_FILE_2 = {
  id: "File 2",
  name: "File 2",
  type: FolderType.file,
  parent: MOCK_FOLDER_5,
  access: AccessType.admin,
};

const MOCK_FILE_1 = {
  id: "File 1",
  name: "File 1",
  type: FolderType.file,
  parent: MOCK_FOLDER_1,
  access: AccessType.admin,
};

export const MOCK_FILESYSTEM = [
  MOCK_FOLDER_1,
  MOCK_FOLDER_2,
  MOCK_FOLDER_3,
  MOCK_FOLDER_4,
  MOCK_FOLDER_5,
  MOCK_FOLDER_6,
  MOCK_FILE_1,
  MOCK_FILE_2,
  MOCK_FILE_3,
  MOCK_FILE_4,
];
