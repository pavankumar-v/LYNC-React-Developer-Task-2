export interface FileDrive {
  id: 'ROOT';
  name: string;
  dirs: Folder[];
  files: File[];
}

export interface File {
  IpfsHash: string;
  fileName: string;
  TimeStamp: Date;
  PinSize: number;
  folderId: string;
}

export interface Folder {
  id: string;
  folderName: string;
  parentFolderID: string;
  createdAt: Date;
  files?: File[];
}
