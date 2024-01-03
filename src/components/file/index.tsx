import classNames from "classnames";
import { ArrowDownIcon, FileIcon } from "../icons";
import { Folder } from "../folder";
import { IFolder } from "src/types";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

interface IProps {
  info: IFolder;
  allFilesIndexes: string[];
  handleOpenClick: () => void;
}

export const File = (props: IProps) => {
  const { handleOpenClick, info, allFilesIndexes } = props;
  const { type, name, nestedItems } = info;
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const isToShowButton =
    type === "folder" && nestedItems && nestedItems.length > 0;

  const isActiveBranch = nestedItems?.every((index) =>
    allFilesIndexes.includes(index)
  );

  const handleClick = () => {
    handleOpenClick();
    // setIsButtonClicked(!isButtonClicked);
  }

  return (
    <div
      className={classNames(styles.file, {
        [styles.file__activeBranch]: isActiveBranch,
      })}
    >
      <div className={styles.file__icon}>
        {type === "file" && <FileIcon />}
        {type === "folder" && <Folder folderNestedItems={nestedItems} />}
        <p>{name}</p>
      </div>
      {isToShowButton && (
        <button
          onClick={handleClick}
          type="button"
          disabled={nestedItems === undefined || nestedItems.length === 0}
          className={styles.file__openButton}
        >
          <ArrowDownIcon />
        </button>
      )}
    </div>
  );
};
