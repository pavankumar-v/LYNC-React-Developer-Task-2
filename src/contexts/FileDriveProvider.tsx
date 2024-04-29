import { initalState, rootFolderId } from '@/lib/constants';
import { File, FileDrive, Folder } from '@/lib/interface';
import { createFolder, getFilesByAccount, getFolderByAccount } from '@/services/fileDrive';
import { useSDK } from '@metamask/sdk-react-ui';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type FileDriveAction = {
  type: 'createFoler' | 'initalize';
  payload?: {
    fileDrive?: FileDrive;
    file?: File;
    folder?: Folder;
  };
};

const fileDriveReducer = (state: FileDrive, action: FileDriveAction): FileDrive => {
  switch (action.type) {
    case 'initalize':
      return action.payload?.fileDrive || initalState;
    case 'createFoler':
      if (action.payload?.folder) {
        createFolder(action.payload.folder);
        state = {
          ...state,
          folders: [...state.folders, action.payload.folder],
        };
        return state;
      }

      return state;
    default:
      return state;
  }
};

export type FileDriveContextType = {
  fileDrive: FileDrive;
  fileDriveDispatch: React.Dispatch<FileDriveAction>;
  currentFolderId: string;
  setCurrentFolder: React.Dispatch<React.SetStateAction<string>>;
  currentFilePath: string[];
  getFilesByFolderId: (folerId: string) => File[];
};

export const FileDriveContext = createContext<FileDriveContextType | null>(null);

const FileDriveProvider: React.FC<Props> = ({ children }) => {
  const [fileDrive, fileDriveDispatch] = useReducer(fileDriveReducer, initalState);
  const { folderId } = useParams();
  const [currentFolderId, setCurrentFolder] = useState<string>(folderId || 'my-drive');

  const { account = '' } = useSDK();

  useEffect(() => {
    if (account) {
      initializeFileDrive();
    }
  }, [account]);

  function initializeFileDrive() {
    return fileDriveDispatch({
      type: 'initalize',
      payload: {
        fileDrive: {
          name: rootFolderId,
          folders: getFolderByAccount(account),
          files: getFilesByAccount(account),
        },
      },
    });
  }

  function getFolderHierarchy(folderId: string, folderHierarchy: string[] = []) {
    if (folderId === rootFolderId) {
      return folderHierarchy;
    }

    const folder: Folder | undefined = fileDrive.folders.find((folder) => folder.id === folderId);
    if (folder?.parentFolderID) {
      folderHierarchy = [folder.parentFolderID, ...folderHierarchy];
    }

    return getFolderHierarchy(folder?.parentFolderID || '', folderHierarchy);
  }

  function getFilesByFolderId(folderId: string): File[] {
    const filesByFolderId: File[] = fileDrive.files.filter((file) => file.folderId === folderId);
    return filesByFolderId;
  }

  return (
    <FileDriveContext.Provider
      value={{
        fileDrive,
        fileDriveDispatch,
        currentFolderId,
        setCurrentFolder,
        currentFilePath: getFolderHierarchy(currentFolderId),
        getFilesByFolderId,
      }}
    >
      {children}
    </FileDriveContext.Provider>
  );
};

export default FileDriveProvider;
