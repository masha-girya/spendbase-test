import styles from "./index.module.scss";

interface IProps {
  children: React.ReactNode;
}

export const FileSystem = (props: IProps) => {
  const { children } = props;

  return (
    <div className={styles.fileSystem}>
      {children}
    </div>
  );
};
