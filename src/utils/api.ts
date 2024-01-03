import { MOCK_FILESYSTEM } from "src/constants";
import { IFolder } from "src/types";

export const getFileByKey = (key: keyof IFolder, content: string) => {
  return new Promise<IFolder | undefined>((resolve, reject) => {
    resolve(
      MOCK_FILESYSTEM.data.find((item: IFolder) => item[key] === content)
    );
  });
};

export const getFilesByName = (name: string) => {
  return new Promise<IFolder[]>((resolve, reject) => {
    resolve(
      MOCK_FILESYSTEM.data.filter((item: IFolder) =>
        item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      )
    );
  });
};
