import React, { useEffect, useState } from "react";
import { FileSystem } from "./components";
import { MOCK_FOLDER_1 } from "./constants";
import { IFolder } from "./types";
import { getFileByKey, getFilesByName } from "./utils";
import styles from "./App.module.scss";
import { Search } from "./components/search";

function App() {
  const [allFiles, setAllFiles] = useState<IFolder[][]>([]);
  const [allFilesIds, setAllFilesIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setAllFiles([[MOCK_FOLDER_1]]);
  }, []);

  useEffect(() => {
    if(allFiles.length > 0) {
      setAllFilesIds(allFiles.flat().map((file) => file.id));
    }
  }, [allFiles]);

  const load = async(query: string) => {
    const folders = await getFilesByName(query);
    setAllFiles(folders.length === 0 ? [] : [folders]);
    console.log({query, folders})
  }

  useEffect(() => {
    console.log(searchQuery.length)
    if(searchQuery.length === 0) {
      setAllFiles([[MOCK_FOLDER_1]]);
    } else {
      load(searchQuery);
    }
  }, [searchQuery]);

  const handleOpenClick = async (file: IFolder, arrowNumber: number) => {
    if (arrowNumber < allFiles.length - 1) {
      setAllFiles((prev) => prev.slice(0, arrowNumber + 1));

      return;
    }

    if (file.nestedItems) {
      const resolvedNestedFiles = file.nestedItems.map((nestedFileId) =>
        getFileByKey("id", nestedFileId)
      );

      const nestedData = (await Promise.all(resolvedNestedFiles)).filter(
        (file) => file !== undefined
      );

      setAllFiles((prevFiles) => [...prevFiles, nestedData as IFolder[]]);
    }
  };

  return (
    <div className={styles.App}>
      <Search searchQuery={searchQuery} onChange={setSearchQuery} />

      {allFiles.length > 0 && allFiles.map((file, rowIndex) => (
        <FileSystem
          key={file[0].id + rowIndex}
          fileInfo={file}
          rowIndex={rowIndex}
          allFilesIndexes={allFilesIds}
          handleOpenClick={handleOpenClick}
        />
      ))}
    </div>
  );
}

export default App;
