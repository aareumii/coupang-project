declare module "./LogoutButton";
declare module "*.png";
declare module "*.jsx";
declare global {
  interface Window {
    daum?: {
      Postcode: any;
    };
  }
}
declare module "react-daum-postcode" {
  const DaumPostcode: React.FC<any>;
  export default DaumPostcode;
}
