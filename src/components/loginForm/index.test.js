import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Login, LoginFormTestIds } from "../../pages/Login";


describe('Login', () => {

   it('onSubmit', () => {
      const onSubmit = jest.fn();
      const component = render(<Login onSubmit={onSubmit} />)

      act(() => {
         fireEvent.click(component.queryByTestId(LoginFormTestIds.submit));
      })

      expect(onSubmit).toBeCalled();
   });

   it('ввод данных в поле Login', () => {
      const loginValue = 'auth';
      const setFieldValue = jest.fn();
      const component = render(<LoginForm setFieldValue={setFieldValue} />)

      const loginField = component.queryByTestId(LoginFormTestIds.loginField);

      act(() => {
         fireEvent.change(loginField, {
            target: {
               value: loginValue,
            }
         })
      })

      expect(setFieldValue).toHaveBeenCalledWith('login', loginValue);
   })
});