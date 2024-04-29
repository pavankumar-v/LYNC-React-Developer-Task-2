import { FileDrive } from '@/lib/interface';

export function getFiles(account: string): FileDrive | null {
  console.log(account);
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

export function getFolderHierarchy(folderId, folderHierarchy = []) {
  if (folderId === 'ROOT') {
    return folderHierarchy;
  }
  const folder = folders.find((folder) => folder.id === folderId);
  folderHierarchy = [folder.parentFolderId, ...folderHierarchy];

  return getFolderHierarchy(folder.parentFolderId, folderHierarchy);
}

export function getFilesByFolderId(folderId) {
  const filesByFolderId = files.filter((file) => file.folderId === folderId);
  return filesByFolderId;
}
