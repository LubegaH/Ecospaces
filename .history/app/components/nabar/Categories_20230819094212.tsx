import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';

import { MdOutlineVilla } from 'react-icons/md';
import { MdOutlineForest } from 'react-icons/md';
import {GiIsland} from 'react-icons/gi'

import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

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
  {
    label: 'Coutryside',
    icon: TbMountain,
    description: 'Exquisite living in the country side',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'Exquisite living in the country side',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'Executive stay on an Island',
  },
  
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathName = usePathname();

  const isMainPage = pathName === '/';
  if (!isMainPage) {
    return null;
  }

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
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
