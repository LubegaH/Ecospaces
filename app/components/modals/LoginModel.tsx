'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState, useCallback } from 'react';
import {
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModel from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../input/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

/**
 * LoginModel Component
 *
 * A component for the registration modal in the application.
 *
 * @returns The LoginModel component.
 */

const LoginModel = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModel();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  /**
   * React Hook Form configuration
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  /**
   * Form submission handler
   *
   * @param data - The form data submitted by the user.
   */
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('You are in!');
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  /**
   * JSX content for the modal body
   */
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Happy to see you back!'
        subtitle='Login to your account'
      />
      <Input
        id='email'
        register={register}
        label='Email'
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id='password'
        type='password'
        register={register}
        label='Password'
        disabled={isLoading}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className='text-neutral-500 text-center mt-4 font-light'>
        <div className='flex flex-row items-center gap-2 justify-center'>
          <div>Already have an account?</div>
          <div
            onClick={registerModal.onClose}
            className='text-green-700 cursor-pointer hover:underline font-semibold'
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      disabled={isLoading}
      title='Login'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModel;
