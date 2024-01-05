import { useState } from "react";
import classNames from "classnames";
import { Folder, ArrowButton } from "src/components";
import { AccessType, FolderType, IFolderClient } from "src/types";
import styles from "./index.module.scss";

interface IProps {
  info: IFolderClient;
  activeFolderId: string;
  setActiveFolderId: (activeFolderId: string) => void;
  searchQuery: string;
  openFolderIds: string[];
  setOpenFolderIds: React.Dispatch<React.SetStateAction<string[]>>;
  children?: React.ReactNode;
}

export const File = (props: IProps) => {
  const {
    info,
    activeFolderId,
    setActiveFolderId,
    setOpenFolderIds,
    openFolderIds,
    children,
  } = props;
  const { id, type, name, nestedItems, parent, access } = info;
  const [prevActiveFolderId, setPrevActiveFolderId] = useState("");

  const folderWithChildren = type === FolderType.folder && nestedItems.length > 0;

  console.log({name, nestedItems: folderWithChildren})

  const isForbiddenToOpen =
    access === AccessType.admin || parent?.access === AccessType.admin;

  const handleClick = () => {
    if (isForbiddenToOpen) {
      return;
    }

    if (openFolderIds.includes(id)) {
      setOpenFolderIds((prev) => prev.filter((prevIds) => prevIds !== id));
      setActiveFolderId(prevActiveFolderId);
    } else {
      setOpenFolderIds((prev) => [...prev, id]);
      setPrevActiveFolderId(activeFolderId);
      setActiveFolderId(id);
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open folder"
        data-testid={name}
        onClick={handleClick}
        disabled={isForbiddenToOpen}
        className={classNames(styles.file, {
          [styles.file_active]: activeFolderId === id,
          [styles.file_empty]: !folderWithChildren && type !== FolderType.file,
        })}
      >

        {folderWithChildren && (
          <ArrowButton isOpenedFolder={openFolderIds.includes(id)} />
        )}

        <Folder folderNestedItems={nestedItems} type={type} name={name} />
      </button>

      {openFolderIds.includes(id) && (
        <div className={styles.nestedFiles}>{children}</div>
      )}
    </>
  );
};
