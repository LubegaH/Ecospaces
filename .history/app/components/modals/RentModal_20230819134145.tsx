import useRentModal from '@/app/hooks/useRentModal';
import Modal from './Modal';

const RentModal = () => {
  const rentModal = useRentModal;
  return <Modal isOpen={rentModal.isOpen} />;
};

export default RentModal;
