import React, { useEffect, useState } from "react";
import { File, FileSystem } from "./components";
import { MOCK_FOLDER_1 } from "./constants";
import { IFolder } from "./types";
import { getFileByKey, getFilesByName } from "./utils";
import styles from "./App.module.scss";
import { Search } from "./components/search";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { ArrowDownIcon } from "./components/icons";
import { ArrowUpIcon } from "./components/icons/ArrowUpIcon";

function App() {
  const [allFiles, setAllFiles] = useState<IFolder[][]>([]);
  const [allFilesIds, setAllFilesIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setAllFiles([[MOCK_FOLDER_1]]);
  }, []);

  useEffect(() => {
    if (allFiles.length > 0) {
      setAllFilesIds(allFiles.flat().map((file) => file.id));
    }
  }, [allFiles]);

  const load = async (query: string) => {
    const folders = await getFilesByName(query);
    setAllFiles(folders.length === 0 ? [] : [folders]);
    console.log({ query, folders });
  };

  useEffect(() => {
    console.log(searchQuery.length);
    if (searchQuery.length === 0) {
      setAllFiles([[MOCK_FOLDER_1]]);
    } else {
      load(searchQuery);
    }
  }, [searchQuery]);

  const renderTree = (file: IFolder) => (
    <File key={file.id} info={file}>
      {Array.isArray(file.nestedItems)
        ? file.nestedItems.map((node) => renderTree(node))
        : null}
    </File>
  );

  return (
    <div className={styles.App}>
      <Search searchQuery={searchQuery} onChange={setSearchQuery} />
      <FileSystem>{renderTree(MOCK_FOLDER_1)}</FileSystem>
    </div>
  );
}

export default App;
