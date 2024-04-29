import { FileDrive, Folder } from '@/lib/interface';
import { getFiles, setFiles } from '@/services/fileDrive';
import { useSDK } from '@metamask/sdk-react-ui';
import React, { createContext, useEffect, useReducer } from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type FileDriveAction = {
  type: 'createFoler' | 'initalize';
  payload?: {
    fileDrive?: FileDrive;
    account: string;
    file?: File;
    folder?: Folder;
  };
};

const fileDriveReducer = (
  state: FileDrive,
  action: FileDriveAction
): FileDrive => {
  switch (action.type) {
    case 'initalize':
      return action.payload?.fileDrive || initalState;
    case 'createFoler':
      if (action.payload?.folder) {
        state = {
          ...state,
          dirs: [...state.dirs, action.payload?.folder],
        };
        console.log(action.payload.account);
        localStorage.setItem(action.payload.account, JSON.stringify(state));
        return state;
      }

      return state;
    default:
      return state;
  }
};

export const initalState: FileDrive = {
  id: 'ROOT',
  name: 'My Drive',
  dirs: [],
  files: [],
};

export type FileDriveContextType = {
  fileDrive: FileDrive;
  fileDriveDispatch: React.Dispatch<FileDriveAction>;
};

export const FileDriveContext = createContext<FileDriveContextType | null>(
  null
);

const FileDriveProvider: React.FC<Props> = ({ children }) => {
  const [fileDrive, fileDriveDispatch] = useReducer(
    fileDriveReducer,
    initalState
  );

  const { account = '' } = useSDK();

  useEffect(() => {
    if (account) {
      initializeFileDrive();
    }
  }, [account]);

  function initializeFileDrive() {
    const files: FileDrive | null = getFiles(account);
    console.log(files);
    if (files == null) {
      return setFiles(account, initalState);
    }

    return fileDriveDispatch({
      type: 'initalize',
      payload: { fileDrive: files || initalState, account },
    });
  }

  return (
    <FileDriveContext.Provider value={{ fileDrive, fileDriveDispatch }}>
      {children}
    </FileDriveContext.Provider>
  );
};

export default FileDriveProvider;
