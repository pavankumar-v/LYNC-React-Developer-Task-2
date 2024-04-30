import { getFiles, getFolders, initalState, rootFolderId } from '@/lib/constants';
import { File, FileDrive, Folder } from '@/lib/interface';
import { FolderHierarchy } from '@/lib/types';
import { createFolder, getFilesByAccount, getFolderByAccount } from '@/services/fileDrive';
import { useSDK } from '@metamask/sdk-react-ui';
import React, { createContext, useEffect, useReducer } from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type FileDriveAction = {
  type: 'initalize' | 'createFolder' | 'setCurrentFolder' | 'updateFolders' | 'addFiles';
  payload?: {
    fileDrive?: FileDrive;
    file?: File;
    folder?: Folder;
    currentFolder?: string;
    folders?: Folder[];
    files?: File[];
  };
};

const fileDriveReducer = (state: FileDrive, action: FileDriveAction): FileDrive => {
  switch (action.type) {
    case 'initalize':
      return action.payload?.fileDrive || initalState;
    case 'createFolder':
      if (action.payload?.folder) {
        const updatedFolders = createFolder(action.payload.folder);
        return {
          ...state,
          folders: [...updatedFolders.filter((folder) => folder.parentFolderID == state.currentFolderId)],
        };
      }

      return state;
    case 'setCurrentFolder':
      if (action.payload?.currentFolder) {
        return {
          ...state,
          currentFolderId: action.payload.currentFolder,
        };
      }

      return state;
    case 'updateFolders':
      if (action.payload?.folders) {
        return {
          ...state,
          folders: action.payload.folders,
        };
      }

      return state;
    case 'addFiles':
      if (action.payload?.files) {
        return {
          ...state,
          files: action.payload.files,
        };
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
  setCurrentFolder: (folderId: string) => void;
  getFolderHierarchy: (folderId: string, folderHierarchy?: FolderHierarchy[]) => FolderHierarchy[];
  getFilesByFolderId: (folerId: string) => File[];
  getCurrentFolderDir: () => Folder[];
};

export const FileDriveContext = createContext<FileDriveContextType | null>(null);

const FileDriveProvider: React.FC<Props> = ({ children }) => {
  const [fileDrive, fileDriveDispatch] = useReducer(fileDriveReducer, initalState);

  const { account = '' } = useSDK();

  useEffect(() => {
    if (account) {
      initializeFileDrive();
    }
  }, [account, fileDrive.currentFolderId]);

  useEffect(() => {
    setCurrentFolder(rootFolderId);
  }, [account]);

  function initializeFileDrive() {
    return fileDriveDispatch({
      type: 'initalize',
      payload: {
        fileDrive: {
          name: rootFolderId,
          folders: getFolderByAccount(account).filter((folder) => folder.parentFolderID === fileDrive.currentFolderId),
          files: getFilesByAccount(account),
          currentFolderId: fileDrive.currentFolderId || rootFolderId,
        },
      },
    });
  }

  function getFolderHierarchy(folderId: string, folderHierarchy: FolderHierarchy[] = []): FolderHierarchy[] {
    if (folderId === rootFolderId) {
      return [{ folderId: rootFolderId, label: 'My Drive' }, ...folderHierarchy];
    }

    const folder: Folder | undefined = getFolders().find((folder) => folder.id === folderId);
    if (folder?.parentFolderID) {
      folderHierarchy = [{ folderId: folder.id, label: folder.folderName }, ...folderHierarchy];
    }

    return getFolderHierarchy(folder?.parentFolderID || rootFolderId, folderHierarchy);
  }

  function getFilesByFolderId(folderId: string): File[] {
    const filesByFolderId: File[] = getFiles().filter((file) => file.folderId === folderId);
    return filesByFolderId;
  }

  function setCurrentFolder(folderId: string) {
    fileDriveDispatch({ type: 'setCurrentFolder', payload: { currentFolder: folderId } });
  }

  function getCurrentFolderDir(): Folder[] {
    return getFolderByAccount(account).filter((folder) => folder.parentFolderID == fileDrive.currentFolderId);
  }

  return (
    <FileDriveContext.Provider
      value={{
        fileDrive,
        fileDriveDispatch,
        currentFolderId: fileDrive.currentFolderId,
        setCurrentFolder,
        getFolderHierarchy,
        getFilesByFolderId,
        getCurrentFolderDir,
      }}
    >
      {children}
    </FileDriveContext.Provider>
  );
};

export default FileDriveProvider;
