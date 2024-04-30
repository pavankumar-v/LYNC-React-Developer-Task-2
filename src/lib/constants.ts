import { FileDrive, Folder, File } from './interface';

export const rootFolderId = 'my-drive';
export const files = (): File[] => JSON.parse(localStorage.getItem('files') || '[]');
export const getFolders = (): Folder[] => JSON.parse(localStorage.getItem('folders') || '[]');

export const initalState: FileDrive = {
  name: 'My Drive',
  folders: [],
  files: [],
  currentFolderId: rootFolderId,
};
