'use client';
/**
 * Modal Component
 *
 * A reusable component for displaying a modal dialog.
 *
 * Props:
 * - isOpen: Boolean indicating whether the modal is open or not.
 * - onClose: Function to handle the modal close event.
 * - onSubmit: Function to handle the form submission event.
 * - title: Optional string representing the title of the modal.
 * - body: Optional React element representing the content of the modal body.
 * - footer: Optional React element representing the content of the modal footer.
 * - actionLabel: String representing the label for the primary action button.
 * - disabled: Boolean indicating whether the modal is disabled or not.
 * - secondaryAction: Optional function to handle the secondary action button click event.
 * - secondaryActionLabel: Optional string representing the label for the secondary action button.
 *
 * Usage:
 * ```tsx
 * <Modal
 *   isOpen={isOpen}
 *   onClose={handleClose}
 *   onSubmit={handleSubmit}
 *   title="Modal Title"
 *   body={<div>Modal Content</div>}
 *   footer={<div>Modal Footer</div>}
 *   actionLabel="Submit"
 *   disabled={isLoading}
 *   secondaryAction={handleSecondaryAction}
 *   secondaryActionLabel="Cancel"
 * />
 * ```
 */

import React, { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '@/app/components/Button';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  // Submit
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  // Secondary action
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className='
            justify-center
            items-center
            flex
            overflow-x-hidden
            overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none
            bg-neutral-800/70'
      >
        <div
          className='
                relative
                w-full
                md:w-4/6
                lg:w-3/6
                xl:w-2/5
                my-6
                mx-auto
                h-full
                lg:h-auto
                md:h-auto'
        >
          {/*    Content */}
          <div
            className={`translate
                    duration-300
                    h-full
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className='
                        translate
                        h-full
                        lg:h-auto
                        md:h-auto
                        border-0
                        rounded-lg
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-white
                        outline-none
                        focus:outline-none'
            >
              {/*    Header */}
              <div
                className='
                            flex
                            items-center
                            p-6
                            rounded-t
                            justify-center
                            relative
                            border-b-[1px]'
              >
                <button
                  onClick={handleClose}
                  className='
                                p-1
                                border-0
                                hover:opacity-70
                                transition
                                absolute
                                left-9'
                >
                  <IoMdClose size={18} />
                </button>
                <div className='text-lg font-semibold'>{title}</div>
              </div>
              {/*  Body  */}
              <div className='relative p-6 flex-auto'>{body}</div>
              {/*  Footer  */}
              <div className='flex flex-col gap-2 p-6'>
                <div
                  className='
                                flex
                                flex-row
                                items-center
                                gap-4
                                w-full'
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}

                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
