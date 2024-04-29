export interface FileSystem {
  id: string;
  dirs: Folder;
  files: File[];
}

export interface File {
  IpfsHash: string;
  fileName: string;
  TimeStamp: Date;
  PinSize: number;
}

export interface Folder {
  id: string;
  folderName: string;
  createdAt: Date;
  files?: File[];
}
