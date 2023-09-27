import { IconType } from 'react-icons';

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neurtral transition cursor-pointer'>
      <Icon size={26} />
    </div>
  );
};

export default CategoryBox;
