import { FolderEmptyIcon, FolderFullIcon } from "../icons";
import { TNestedItems } from "src/types";
import styles from "./index.module.scss";

interface IProps {
  folderNestedItems: TNestedItems | undefined;
}

export const Folder = (props: IProps) => {
  const { folderNestedItems } = props;

  return (
    <div className={styles.folder}>
      {folderNestedItems && folderNestedItems.length > 0
        ? <FolderFullIcon />
        : <FolderEmptyIcon />
      }
    </div>
  )
}