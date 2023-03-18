/* eslint-disable no-undef */
/* /* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Pagination from '../../src/components/Pagination'

const defaultProps = {
  count: 100,
  page: 1,
  pageSize: 10,
  onChange: () => null
}

describe('Pagination component', () => {
  describe('render', () => {
    it('renders a default Pagination Component', () => {
      render(<Pagination {...defaultProps} />)
    })
    it("Pagination Item onClick method", () => {
        const onChangeSpy = jest.fn()
        render(<Pagination {...defaultProps} onChange={onChangeSpy} />);
        const paginationItem = screen.getByTestId('pagination-item-1')
        fireEvent.click(paginationItem);
        expect(onChangeSpy).toHaveBeenCalled()
      });
  })
})
