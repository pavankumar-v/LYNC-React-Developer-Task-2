import { FileDrive, Folder } from '@/lib/interface';
import React, { createContext, useReducer } from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type FileDriveAction = {
  type: 'createFoler';
  payload?: {
    file?: File;
    folder: Folder;
  };
};

const fileDriveReducer = (
  state: FileDrive,
  action: FileDriveAction
): FileDrive => {
  switch (action.type) {
    case 'createFoler':
      if (action.payload?.folder) {
        return {
          ...state,
          dirs: [...state.dirs, action.payload?.folder],
        };
      }

      return state;
    default:
      return state;
  }
};

const initalState: FileDrive = {
  id: 'ROOT',
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

  return (
    <FileDriveContext.Provider value={{ fileDrive, fileDriveDispatch }}>
      {children}
    </FileDriveContext.Provider>
  );
};

export default FileDriveProvider;
