declare module "qrcode" {
  type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

  type QRCodeToDataURLOptions = {
    color?: {
      dark?: string;
      light?: string;
    };
    errorCorrectionLevel?: ErrorCorrectionLevel;
    margin?: number;
    width?: number;
  };

  const QRCode: {
    toDataURL(
      text: string,
      options?: QRCodeToDataURLOptions,
    ): Promise<string>;
  };

  export default QRCode;
}
