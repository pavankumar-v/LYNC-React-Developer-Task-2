import { getFiles, getFolders } from '@/lib/constants';
import { File, FileDrive, Folder } from '@/lib/interface';

export function setFiles(acconut: string, fileDrive: FileDrive) {
  localStorage.setItem(acconut, JSON.stringify(fileDrive));
}

export function createFolder(folder: Folder): Folder[] {
  const updatedFolders: Folder[] = [...getFolders(), folder];
  localStorage.setItem('folders', JSON.stringify([...updatedFolders]));
  return getFolderByAccount(folder.accountId);
}

export function createFile(file: File) {
  const newFiles: File[] = [...getFiles(), file];
  localStorage.setItem('files', JSON.stringify(newFiles));
}

export function getFolderByAccount(accountId: string) {
  return getFolders().filter((folder: Folder) => folder.accountId === accountId);
}

export function getFilesByAccount(accountId: string) {
  return getFiles().filter((file: File) => file.accountId === accountId);
}

export function renameFolder(folderId: string, newName: string) {
  const folders: Folder[] = getFolders();
  const index: number | undefined = folders.findIndex((folder) => folder.id === folderId);

  if (index > -1) {
    folders[index]['folderName'] = newName;
  }

  return folders;
}

export function deleteFolder(folderId: string) {
  const folders: Folder[] = getFolders();
  const index: number | undefined = folders.findIndex((folder) => folder.id === folderId);

  if (index > -1) {
    folders.splice(index, 1);
    localStorage.setItem('folders', JSON.stringify(folders));
  }
  return folders;
}
