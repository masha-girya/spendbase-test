import { FileIcon, FolderEmptyIcon, FolderFullIcon } from "../icons";
import { FolderType, TNestedItems } from "src/types";
import styles from "./index.module.scss";

interface IProps {
  folderNestedItems: TNestedItems | undefined;
  name: string;
  type: FolderType;
}

export const Folder = (props: IProps) => {
  const { folderNestedItems, type, name } = props;

  return (
    <div className={styles.folder}>
      {type === FolderType.file && <FileIcon />}
      {type === FolderType.folder && (
        <div className={styles.folder__directory}>
          {folderNestedItems && folderNestedItems.length > 0
            ? <FolderFullIcon />
            : <FolderEmptyIcon />
          }
        </div>
      )}
      <p>{name}</p>
    </div>
  );
};
