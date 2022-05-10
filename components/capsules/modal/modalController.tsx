import React, { useState } from 'react'
import { CongratsModal, OpenHeroModal, ErrorModal, MainModal, SuccessModal } from '.';

type Props = {
  status: boolean;
  setStatus:any;
}

const ModalController = ({status, setStatus}: Props) => {
  // const [mainModal, setMainModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false)
  const [opedHeroModal, setOpedHeroModal] = useState(false)
  const [congratsModal, setCongratsModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)
  return (
    <>
      {status && (
        <MainModal setStatus={setStatus} setSuccessModal={setSuccessModal} />
      )}
      {successModal && (
        <SuccessModal setSuccessModal={setSuccessModal} setOpedHeroModal={setOpedHeroModal} setErrorModal={setErrorModal} />
      )}
      {opedHeroModal && (
        <OpenHeroModal setOpedHeroModal={setOpedHeroModal} setCongratsModal={setCongratsModal} />
      )}
      {congratsModal && (
        <CongratsModal setCongratsModal={setCongratsModal} setStatus = {setStatus} />
      )}
      {errorModal && (
        <ErrorModal setErrorModal={setErrorModal} setStatus = {setStatus}/>
      )}
    </>
  )
}

export default ModalController