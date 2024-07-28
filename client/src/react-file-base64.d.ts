declare module 'react-file-base64' {
  import * as React from 'react';

  interface FileBase64 {
    type: string;
    multiple: boolean;
    onDone: (base64: { base64: string }) => void;
  }

  const FileBase64: React.ComponentType<FileBase64>;

  export default FileBase64;
}
