const ethers = require("ethers");
const express = require("express");
const path = require("path");
const app = express();
const port = 8085;
require("dotenv").config();
const fs = require("fs");
const Moralis = require("moralis");
const Moralis2 = Moralis.default;
const moralisKey = process.env.MORALIS_KEY;
const cors = require("cors");
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.post("/upload", (req, res) => {
  const fileName = req.body.fileName;
  const filePath = req.body.filePath;

  if (!fileName) {
    return res.status(400).json({ error: "No file name." });
  }

  if (!filePath) {
    return res.status(400).json({ error: "No file path." });
  }

  console.log(`File received. Path: ${filePath}`);
  // Assuming you have a function called `saveFile` that returns `storedhash`
  async function sanika() {
    const storedhash = await saveFile(fileName, filePath);
    console.log("Response Stored Hash : ", storedhash);
    // Send a JSON response containing fileName and filePath
    res.json({ storedhash });
  }
  sanika();
});

async function saveFile(name, path) {
  try {
    await Moralis2.start({
      apiKey: moralisKey,
    });
    const data = fs.readFileSync(path, { encoding: "base64" });
    const uploadArray = [
      {
        path: "file",
        content: data,
      },
    ];
    const response = await Moralis2.EvmApi.ipfs.uploadFolder({
      abi: uploadArray,
    });
    var filePath = response.jsonResponse[0].path;
    filePath = encrypt(Buffer.from(filePath));
    const url_res = await interactWithContract(name, filePath);
    const url_link = url_res.toString();
    console.log("SaveFile Stored Hash : ", url_link);
    return url_link;
  } catch (error) {
    console.error("Error saving file to IPFS:", error);
  }
}

async function interactWithContract(name, filePath) {
  console.log(name);
  console.log(filePath);
  const API_URL = process.env.SEPOLIA_API_URL;
  const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
  // Contract ABI
  const {
    abi,
  } = require("./artifacts/contracts/FileStorage.sol/FileStorage.json");
  const provider = new ethers.providers.JsonRpcProvider(API_URL);
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const StorageContract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
  console.log("Storing the IPFS hash...");
  //   const gasLimit = 25000;
  const tx = await StorageContract.upload(name, filePath.encryptedData);
  await tx.wait();
  const key = await StorageContract.getIPFSHash(name);
  console.log(key);
  const storedhash = { iv: iv.toString("hex"), encryptedData: key };
  const decrypted_hash = decrypt(storedhash);
  console.log(`IPFS hash is stored in the smart contract: ${decrypted_hash}`);
  return decrypted_hash;
}

const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //initialization vector

function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}

function decrypt(text) {
  console.log(text.encryptedData);
  let iv = Buffer.from(text.iv, "hex");
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted;
}
