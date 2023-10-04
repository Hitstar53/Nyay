import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { DjangoUrl } from "../../constants";

const fileTypes = ["PDF"];

const DocTrans = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    const formData = new FormData();
    formData.append("file", file);
    //download the file
    // const url = window.URL.createObjectURL(new Blob([file]));
    // const link = document.createElement("a");
    // link.href = url;
    // link.setAttribute("download", "file.pdf");
    // document.body.appendChild(link);
    // link.click();
    const docTranslate = async () => {
      const response = await fetch(`${DjangoUrl}/translation/`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        console.log("error");
      } else {
        console.log("success");
        console.log(response);
      }
    };
    docTranslate();
  };
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Upload your file here</h1>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  );
};

export default DocTrans;
