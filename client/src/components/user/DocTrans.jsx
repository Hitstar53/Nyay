import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { DjangoUrl } from "../../constants";

const fileTypes = ["PDF"];

const DocTrans = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: file,
        }),
      });
      if (!response.ok) {
        console.log("error");
      } else {
        const data = await response.json();
        console.log(data);
      }
    };
    docTranslate();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Upload your file here</h1>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  );
};

export default DocTrans;
