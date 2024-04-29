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
