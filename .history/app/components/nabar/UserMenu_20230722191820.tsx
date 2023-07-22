'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '@/app/components/Avatar';
import React, { useCallback, useState } from 'react';
import MenuItem from '@/app/components/nabar/MenuItem';
import useRegisterModel from '@/app/hooks/useRegisterModal';
import useLoginModel from '@/app/hooks/useLoginModal';
import { User } from '@prisma/client';

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const regiserModal = useRegisterModel();
  const loginModal = useLoginModel();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          className='
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer'
          onClick={() => {}}
        >
          Ecoplace your home
        </div>
        <div
          onClick={toggleOpen}
          className='
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transtion'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className='
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm'
        >
          <div className='flex flex-col cursor-pointer'>
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label='My trips' />
                <MenuItem onClick={() => {}} label='My favorites' />
                <MenuItem onClick={() => {}} label='My reservations' />
                <MenuItem onClick={() => {}} label='My properties' />
                <MenuItem onClick={() => {}} label='Ecoplace my home' />
                <hr />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label='Login' />
                <MenuItem onClick={regiserModal.onOpen} label='Sign Up' />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
