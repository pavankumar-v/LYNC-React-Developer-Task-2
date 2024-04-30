import pdfIconPng from '@/assets/images/pdf.png';
import jpgIconPng from '@/assets/images/jpg.png';
import unknownIconPng from '@/assets/images/unknown.png';

const re: RegExp = /(?:\.([^.]+))?$/;
export const getFileExtention = (fileName: string): FileExtentions =>
  (re.exec(fileName)?.[0] as FileExtentions) || 'default';

export enum FileExtentions {
  PNG = '.png',
  JPG = '.jpg',
  PDF = '.pdf',
  JPEG = '.jpeg',
  DEFAULT = 'default',
}
export const supportedFileExtention: string[] = Object.values(FileExtentions);
export const imageExtentions: string[] = [FileExtentions.JPEG, FileExtentions.JPG, FileExtentions.PNG];
export const fileIcon: { [key in FileExtentions]: string } = {
  '.pdf': pdfIconPng,
  '.png': jpgIconPng,
  '.jpeg': jpgIconPng,
  '.jpg': jpgIconPng,
  default: unknownIconPng,
};

export const getFileIcon = (fileName: string): string => {
  const fileExtention: FileExtentions = getFileExtention(fileName);
  if (supportedFileExtention.includes(fileExtention)) {
    return fileIcon[fileExtention];
  }

  return fileIcon['default'];
};

export const getTrimmedFileName = (fileName: string): string => {
  const maxSize: number = 10;
  if (fileName.length > maxSize) {
    const fileExtention: FileExtentions = getFileExtention(fileName);
    return `${fileName.slice(0, maxSize)}...${fileExtention}`;
  }

  return fileName;
};
