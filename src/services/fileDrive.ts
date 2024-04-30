import { files, folders } from '@/lib/constants';
import { File, FileDrive, Folder } from '@/lib/interface';

export function getFiles(account: string): FileDrive | null {
  const filesJsonString = localStorage.getItem(account);

  if (filesJsonString) {
    const files: FileDrive | null = JSON.parse(filesJsonString);
    return files;
  }

  return null;
}

export function setFiles(acconut: string, fileDrive: FileDrive) {
  localStorage.setItem(acconut, JSON.stringify(fileDrive));
}

export function createFolder(folder: Folder): Folder[] {
  const updatedFolders: Folder[] = [...folders, folder];
  localStorage.setItem('folders', JSON.stringify([...updatedFolders]));
  return getFolderByAccount(folder.accountId);
}

export function getFolderByAccount(accountId: string) {
  return folders.filter((folder: Folder) => folder.accountId === accountId);
}

export function getFilesByAccount(accountId: string) {
  return files.filter((file: File) => file.accountId === accountId);
}
