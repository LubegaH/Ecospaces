'use client';

/**
 * RegisterModel Component
 *
 * A component for the registration modal in the application.
 *
 * Props:
 * - None
 *
 * Usage:
 * ```tsx
 * <RegisterModel />
 * ```
 */

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
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../input/Input';
import { toast } from 'react-hot-toast';

/**
 * RegisterModel Component
 *
 * A component for the registration modal in the application.
 *
 * @returns The RegisterModel component.
 */

const RegisterModel = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * React Hook Form configuration
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
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
    axios
      .post('/api/register', data)
      .then(() => {
        // Registration successful
        registerModal.onClose();
      })
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        // Error occurred during registration
        toast.error('Oops! Something went wrong...');
      })
      .finally(() => {
        // Reset loading state
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Ecospaces' subtitle='Create an account' />
      <Input
        id='email'
        register={register}
        label='Email'
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id='name'
        register={register}
        label='Name'
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

  return (
    <Modal
      isOpen={registerModal.isOpen}
      disabled={isLoading}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModel;
