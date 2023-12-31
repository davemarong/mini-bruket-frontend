"use client";
import React from "react";
interface ImageUploaderProps {
  setSelectedImage: any;
  setImages: any;
}
const ImageUploader = ({ setSelectedImage, setImages }: ImageUploaderProps) => {
  const handleImageChange = (e: any) => {
    setSelectedImage(e.target.files[0]);
    setImages(Object.values(e.target.files));
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <input
        className="file:mr-4 file:py-10 file:px-16 file:shadow-lg file:cursor-pointer 
      file:rounded file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
        type="file"
        id="imageInput"
        multiple
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUploader;
