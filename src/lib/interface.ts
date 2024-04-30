export interface FileDrive {
  name: string;
  folders: Folder[];
  files: File[];
  currentFolderId: string;
}

export interface File {
  IpfsHash: string;
  fileName: string;
  TimeStamp: Date;
  PinSize: number;
  accountId: string;
  folderId: string;
}

export interface Folder {
  id: string;
  accountId: string;
  folderName: string;
  parentFolderID: string;
  createdAt: Date;
  files?: File[];
}
