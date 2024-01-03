import { File } from "../file";
import { IFolder } from "@/types";
import styles from "./index.module.scss";

interface IProps {
  fileInfo: IFolder[];
  rowIndex: number;
  allFilesIndexes: [] | string[];
  handleOpenClick: (file: IFolder, arrowNumber: number) => void;
}

export const FileSystem = (props: IProps) => {
  const { fileInfo, rowIndex, allFilesIndexes, handleOpenClick } = props;

  return (
    <div className={styles.fileSystem}>
      {fileInfo.map((file) => (
        <File
          key={file.id}
          info={file}
          allFilesIndexes={allFilesIndexes}
          handleOpenClick={() => handleOpenClick(file, rowIndex)}
        />
      ))}
    </div>
  );
};
