'use client';
import Container from '../Container';
import Logo from '@/app/components/nabar/Logo';
import Search from '@/app/components/nabar/Search';
import UserMenu from '@/app/components/nabar/UserMenu';
import { User } from '@prisma/client';

interface NavbarProps {
  currentUser?: User;
}

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div
            className='
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0'
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
