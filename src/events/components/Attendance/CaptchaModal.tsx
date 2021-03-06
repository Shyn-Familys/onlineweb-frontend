import React, { FC } from 'react';
import { Modal } from '@dotkomonline/design-system';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_KEY } from 'common/constants/google';

interface ICaptchaModalProps {
  showModal: boolean;
  header?: string;
  text?: string;
  toggleModal: () => void;
  setRecaptcha: (token: string | null) => void;
}

const CaptchaModal: FC<ICaptchaModalProps> = (props: ICaptchaModalProps) => {
  const { showModal, toggleModal, setRecaptcha, header, text } = props;

  const validCaptcha = (token: string | null) => {
    if (token) {
      setRecaptcha(token);
      toggleModal();
    }
    //TODO Do something with unvalid token?
  };

  if (!showModal) return null;

  return (
    <Modal open={showModal} onClose={toggleModal}>
      <h1>{header}</h1>
      <p>{text}</p>
      <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={validCaptcha} />
    </Modal>
  );
};

export default CaptchaModal;
