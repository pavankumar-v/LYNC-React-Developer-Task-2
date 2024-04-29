import { FileDrive } from '@/lib/interface';

export function getFiles(account: string): FileDrive | null {
  console.log(account);
  const files: FileDrive | null = JSON.parse(
    localStorage.getItem(account || '') || '{}'
  );
  return files;
}

export function setFiles(acconut: string, fileDrive: FileDrive) {
  localStorage.setItem(acconut, JSON.stringify(fileDrive));
}
