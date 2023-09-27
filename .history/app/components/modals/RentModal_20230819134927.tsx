import useRentModal from '@/app/hooks/useRentModal';
import Modal from './Modal';

const RentModal = () => {
  const rentModal = useRentModal();
  return <Modal title='Eco your home' isOpen={RentModal.isOpen} />;
};

export default RentModal;
