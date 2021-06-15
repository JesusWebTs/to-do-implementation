const { useState } = require("react");

const useModal = () => {
  const [showModal, setstate] = useState(false);

  return {
    closeModal: () => setstate(false),
    openModal: () => setstate(true),
    showModal,
  };
};

export default useModal;
