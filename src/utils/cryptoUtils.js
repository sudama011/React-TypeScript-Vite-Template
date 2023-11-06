import CryptoJS from "crypto-js";

const aes_key = import.meta.env.AES_KEY;

export function encrypt(raw) {
  const encrypted = CryptoJS.AES.encrypt(
    raw,
    CryptoJS.enc.Utf8.parse(aes_key),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  );
  return encrypted.toString();
}

export function decrypt(enc) {
  const decrypted = CryptoJS.AES.decrypt(
    enc,
    CryptoJS.enc.Utf8.parse(aes_key),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  );
  return decrypted.toString(CryptoJS.enc.Utf8);
}
