import classNames from "classnames";
import { ArrowDownIcon, FileIcon } from "../icons";
import { Folder } from "../folder";
import { FolderType, IFolder } from "src/types";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

interface IProps {
  info: IFolder;
  children?: React.ReactNode;
}

export const File = (props: IProps) => {
  const { info, children } = props;
  const { type, name, nestedItems } = info;
  const [isOpenedFolder, setIsOpenedFolder] = useState(false);

  const isToShowButton =
    type === "folder" && nestedItems && nestedItems.length > 0;

  const handleClick = () => {
    setIsOpenedFolder(!isOpenedFolder);
  };

  return (
    <div className={styles.fileStructure}>
      <div
        className={styles.file}
      >
        {isToShowButton && (
          <button
            onClick={handleClick}
            type="button"
            disabled={nestedItems === undefined || nestedItems.length === 0}
            className={classNames(styles.file__openButton, {
              [styles.file__openButton_active]: isOpenedFolder,
            })}
          >
            <ArrowDownIcon />
          </button>
        )}
        {/* {type === FolderType.file && <div className={styles.file__buttonMock}></div>} */}
        <div className={styles.file__icon}>
          {type === FolderType.file && <FileIcon />}
          {type === FolderType.folder && (
            <Folder folderNestedItems={nestedItems} />
          )}
          <p>{name}</p>
        </div>
      </div>
      {isOpenedFolder && <div className={styles.nestedFiles}>{children}</div>}
    </div>
  );
};
