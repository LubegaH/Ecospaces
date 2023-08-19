import Container from '../Container';
import { TbBeach } from 'react-icons/tb';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'Close to the beach, you will enjoy the breeze',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'Interesting property with a windmill',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'Modern villa for the 21st century',
  },
];

const Categories = () => {
  return (
    <Container>
      <div
        className='
            pt-4
            flex
            flex-row
            items-center
            justify-betweem
            overflow-x-auto
        '
      ></div>
    </Container>
  );
};

export default Categories;
