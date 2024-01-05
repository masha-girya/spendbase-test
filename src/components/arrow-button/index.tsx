import classNames from "classnames";
import { ArrowDownIcon } from "../icons";
import styles from "./index.module.scss";

interface IProps {
  isOpenedFolder: boolean;
}

export const ArrowButton = (props: IProps) => {
  const { isOpenedFolder } = props;

  return (
    <div
      className={classNames(styles.folderButton, {
        [styles.folderButton_active]: isOpenedFolder,
      })}
    >
      <ArrowDownIcon />
    </div>
  );
};
