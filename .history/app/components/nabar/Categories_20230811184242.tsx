import Container from '../Container';
import { TbBeach } from 'react-icons/tb';

import { MdOutlineVilla } from 'react-icons/md';
import { MdOutlineForest } from 'react-icons/md';
import { useSearchParams } from 'react-navigation';

import CategoryBox from '../CategoryBox';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'Close to the beach, you will enjoy the breeze',
  },
  {
    label: 'Forest',
    icon: MdOutlineForest,
    description: 'Interesting property with a windmill',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'Modern villa for the 21st century',
  },
];

const Categories = () => {
  const params = useSearchParams();
  return (
    <Container>
      <div
        className='
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
        '
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
