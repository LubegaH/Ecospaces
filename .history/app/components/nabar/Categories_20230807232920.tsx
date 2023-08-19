import Container from '../Container';
import {TbBeach}

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
    }
]

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
