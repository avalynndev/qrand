import QRCodeStyling from "qr-code-styling";
import tinycolor from "tinycolor2";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { QROptions } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createQRCode(options: QROptions): QRCodeStyling {
  const foregroundGradient = options.useGradient
    ? {
        type: options.gradientType,
        rotation: options.gradientDirection,
        colorStops: [
          { offset: 0, color: options.gradientColor1 },
          { offset: 1, color: options.gradientColor2 },
        ],
      }
    : undefined;

  const backgroundGradient = options.backgroundGradient
    ? {
        type: options.gradientType,
        rotation: options.gradientDirection,
        colorStops: [
          { offset: 0, color: options.backgroundGradientColor1 },
          { offset: 1, color: options.backgroundGradientColor2 },
        ],
      }
    : undefined;

  const qrCode = new QRCodeStyling({
    width: options.size,
    height: options.size,
    type: "svg",
    data: options.text,
    image: options.logo,
    margin: options.margin,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: options.errorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: options.logoSize,
      margin: options.logoMargin,
      crossOrigin: "anonymous",
    },
    dotsOptions: {
      color: options.useGradient ? undefined : options.foregroundColor,
      type: options.dotType,
      gradient: foregroundGradient,
    },
    backgroundOptions: {
      color: options.backgroundGradient ? undefined : options.backgroundColor,
      gradient: backgroundGradient,
    },
    cornersSquareOptions: {
      color: options.useGradient ? undefined : options.foregroundColor,
      type: options.eyeType,
      gradient: foregroundGradient,
    },
    cornersDotOptions: {
      color: options.useGradient ? undefined : options.foregroundColor,
      type: options.eyeType,
      gradient: foregroundGradient,
    },
  });

  return qrCode;
}


