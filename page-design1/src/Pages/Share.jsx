import React from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";

const Share = () => {
  const url = window.location.href;
  return (
    <>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </>
  );
};

export default Share;
