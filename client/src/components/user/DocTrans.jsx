import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { DjangoUrl } from "../../constants";

const fileTypes = ["PDF"];

const DocTrans = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null); // Declare the 'url' state variable

  const handleChange = (file) => {
    setFile(file);
    const formData = new FormData();
    formData.append("file", file);

    const docTranslate = async () => {
      console.log("Inside docTranslate");
      try {
        const response = await fetch(`${DjangoUrl}/translation/`, {
          method: "POST",
          body: formData,
        });

        console.log("Response coming");

        if (!response.ok) {
          console.log("error");
        } else {
          console.log("Received");
          const res = await fetch("http://localhost:8085/upload", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fileName: "translated.pdf",
              filePath: "translated.pdf",
            }),
          });

          if (res.ok) {
            const data = await res.json(); // Parse the JSON response
            console.log("Received data:", data); // Logging the entire response for debugging
            console.log("Stored Hash:", data.storedhash);
            const uri = data.storedhash;
            setUrl(uri); // Update the 'url' state with the URI
          } else {
            console.error("Error:", res.statusText);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    docTranslate();
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
        Upload your file here
      </h1>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      {url && (
        <div>
          <div>
            Your file has been translated. Please click on the link below to
            access the translated file.
          </div>
          <br />
          <a href={url} target="_blank" rel="noopener noreferrer">
            translated.pdf
          </a>
        </div>
      )}
    </div>
  );
};

export default DocTrans;
