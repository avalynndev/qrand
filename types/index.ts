export interface QROptions {
  text: string;
  size: number;
  backgroundColor: string;
  foregroundColor: string;
  logo?: string;
  dotType:
    | "square"
    | "rounded"
    | "dots"
    | "classy"
    | "classy-rounded"
    | "extra-rounded";
  eyeType: "square" | "extra-rounded" | "dot" | "classy" | "classy-rounded";
  cornerRadius: number;
  errorCorrectionLevel: "L" | "M" | "Q" | "H";
  margin: number;
  logoMargin: number;
  logoSize: number;
  useGradient: boolean;
  gradientType: "linear" | "radial";
  gradientDirection: number;
  gradientColor1: string;
  gradientColor2: string;
  backgroundGradient: boolean;
  backgroundGradientColor1: string;
  backgroundGradientColor2: string;
}

export const defaultQROptions: QROptions = {
  text: "",
  size: 300,
  backgroundColor: "#ffffff",
  foregroundColor: "#000000",
  dotType: "square",
  eyeType: "square",
  cornerRadius: 0,
  errorCorrectionLevel: "H",
  margin: 4,
  logoMargin: 20,
  logoSize: 0.4,
  useGradient: false,
  gradientType: "linear",
  gradientDirection: 0,
  gradientColor1: "#000000",
  gradientColor2: "#333333",
  backgroundGradient: false,
  backgroundGradientColor1: "#ffffff",
  backgroundGradientColor2: "#f8f9fa",
};


