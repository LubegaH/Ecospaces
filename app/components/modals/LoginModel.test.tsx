// Generated by CodiumAI

import LoginModel from './LoginModel';

describe('LoginModel', () => {
  // Test that the onSubmit function is called with the correct data when the user enters a valid email and password
  it('should call onSubmit with correct data when user enters valid email and password', () => {
    // Mock dependencies
    const registerModal = {
      isOpen: false,
      onClose: jest.fn(),
      onOpen: jest.fn(),
    };
    const loginModal = {
      isOpen: true,
      onClose: jest.fn(),
    };
    const setIsLoading = jest.fn();
    const router = {
      refresh: jest.fn(),
    };
    const signIn = jest.fn().mockResolvedValue({ ok: true });
    const toast = {
      success: jest.fn(),
      error: jest.fn(),
    };

    // Mock form data
    const formData = {
      email: 'test@example.com',
      password: 'password123',
    };

    // Mock form errors
    const formErrors = {};

    // Mock handleSubmit function
    const handleSubmit = jest.fn((callback) => callback(formData));

    // Render the LoginModel component
    const component = shallow(
      <LoginModel
        registerModal={registerModal}
        loginModal={loginModal}
        setIsLoading={setIsLoading}
        router={router}
        signIn={signIn}
        toast={toast}
      />
    );

    // Set the form state with the mock data and errors
    component.find('form').props().handleSubmit(handleSubmit)({
      ...formData,
      errors: formErrors,
    });

    // Assertions
    expect(setIsLoading).toHaveBeenCalledWith(true);
    expect(signIn).toHaveBeenCalledWith('credentials', {
      ...formData,
      redirect: false,
    });
    expect(setIsLoading).toHaveBeenCalledWith(false);
    expect(toast.success).toHaveBeenCalledWith('You are in!');
    expect(router.refresh).toHaveBeenCalled();
    expect(loginModal.onClose).toHaveBeenCalled();
  });
});
