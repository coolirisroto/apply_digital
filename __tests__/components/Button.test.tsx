/* eslint-disable no-undef */
/* /* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Button from '../../src/components/Button'

const defaultProps = {
  text: 'Default Text',
  onClick: () => null,
}

describe('Button component', () => {
  describe('render', () => {
    it('renders a default Button Component', () => {
      render(<Button {...defaultProps} />)
    })
    it("button onClick method", () => {
        const onClickQuoterModalSpy = jest.fn()
        render(<Button {...defaultProps} onClick={onClickQuoterModalSpy} />);
        const button = screen.getByTestId('button')
        fireEvent.click(button);
        expect(onClickQuoterModalSpy).toHaveBeenCalled()
      });
  })
})
