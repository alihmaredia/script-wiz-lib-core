import WizData from "@script-wiz/wiz-data";
import BN from "bn.js";
import { convert64 } from "../convertion";

export const ZERO_64 = new BN(convert64(WizData.fromHex("00")).bin, 2);
export const MAX_INTEGER_64 = new BN("1111111111111111111111111111111111111111111111111111111101111111", 2);
export const MIN_INTEGER_64 = new BN("0000000000000000000000000000000000000000000000000000000010000000", 2);
export const NEGATIVE_1_64 = new BN("0000000000000000000000000000000000000000000000000000000010000001", 2);

export const flipbits = (str: string): string => {
  return str
    .split("")
    .map((b: any) => (1 - b).toString())
    .join("");
};

export const toHexString = (byteArray: Uint8Array) => {
  return Array.from(byteArray, function (byte) {
    return ("0" + (byte & 0xff).toString(16)).slice(-2);
  }).join("");
};
