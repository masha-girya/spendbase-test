import { useCallback } from "react";
import styles from "./index.module.scss";

interface IProps {
  searchQuery: string;
  onChange: (searchQuery: string) => void;
}

export const Search = (props: IProps) => {
  const { searchQuery, onChange } = props;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <input
      className={styles.search}
      type="text"
      value={searchQuery}
      onChange={handleChange}
    />
  );
};
