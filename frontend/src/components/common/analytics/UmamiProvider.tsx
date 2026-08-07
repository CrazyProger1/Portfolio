import Script from "next/script";

interface Props {
  url: string;
  websiteId: string;
}

export const UmamiProvider = ({ url, websiteId }: Props) => (
  <>
    <Script src={`${url}/script.js`} data-website-id={websiteId} strategy="afterInteractive" />
    <Script src={`${url}/recorder.js`} data-website-id={websiteId} strategy="afterInteractive" />
  </>
);
