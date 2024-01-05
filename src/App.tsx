import React, { useCallback, useEffect, useState } from "react";
import { File, Search } from "./components";
import { MOCK_FILESYSTEM } from "./constants";
import { AccessType, FolderType, IFolder, IFolderClient } from "./types";
import { buildNestedStructure } from "./utils";
import styles from "./App.module.scss";

function App() {
  const [allFiles, setAllFiles] = useState<IFolder[]>([]);
  const [allFilesClient, setAllFilesClient] = useState<IFolderClient | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFolderId, setActiveFolderId] = useState("");
  const [openFolderIds, setOpenFolderIds] = useState<string[]>([]);

  useEffect(() => {
    const nestedData = buildNestedStructure(MOCK_FILESYSTEM);

    setAllFiles(MOCK_FILESYSTEM);
    setAllFilesClient(nestedData);
  }, []);

  const openFolder = useCallback(
    (folder: IFolder) => {
      const { id, access } = folder;

      const isClosedFolder = !openFolderIds.includes(id);
      const isAllowedToOpen = access === AccessType.user;

      console.log({isAllowedToOpen, isClosedFolder})

      if (isClosedFolder && isAllowedToOpen) {
        setOpenFolderIds((prev) => [...prev, id]);
      }
    },
    [openFolderIds]
  );

  const openParentFolder = useCallback((folder: IFolder) => {
    const { parent, type } = folder;

    if(type === FolderType.folder) {
      openFolder(folder);
    }

    if (parent) {
      openParentFolder(parent);
    }
  }, []);

  useEffect(() => {
    if (allFiles) {
      const searchResult = allFiles.find(
        (item) =>
          item.name.toLocaleLowerCase() === searchQuery.toLocaleLowerCase()
      );

      if (searchResult) {
        openParentFolder(searchResult);

        setActiveFolderId(searchResult.id);
      } else {
        setActiveFolderId("");
        setOpenFolderIds([]);
      }
    }
  }, [allFiles, searchQuery]);

  const treeView = (file: IFolderClient) => (
    <File
      key={file.id}
      info={file}
      activeFolderId={activeFolderId}
      setActiveFolderId={setActiveFolderId}
      searchQuery={searchQuery}
      openFolderIds={openFolderIds}
      setOpenFolderIds={setOpenFolderIds}
    >
      {Array.isArray(file.nestedItems)
        ? file.nestedItems.map((node) => treeView(node))
        : null}
    </File>
  );

  return (
    <div className={styles.App}>
      <Search searchQuery={searchQuery} onChange={setSearchQuery} />
      {allFilesClient && (
        <div className={styles.fileSystem}>{treeView(allFilesClient)}</div>
      )}
    </div>
  );
}

export default App;
