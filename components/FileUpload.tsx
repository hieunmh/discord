"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";  

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endPoint: "messageFile" | "serverImage";
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange, value, endPoint }) => {

  const fileType= value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-32 w-32">
        <Image src={value} alt="upload" className="rounded-full" fill />
        <button onClick={() => onChange("")} type="button"
          className="bg-rose-500 text-white p-1 rounded-full absolute top-1.5 right-1.5 shadow-sm"
        > 
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <UploadDropzone  endpoint={endPoint} onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}
      onUploadError={(error: Error) => {
        console.log(error);
        
      }}
    />
  )
}
 
export default FileUpload;