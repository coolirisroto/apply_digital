/* eslint-disable no-undef */
/* /* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import NewsItem from '../../src/components/NewsItem'

const defaultProps = {
  item: {
    created_at_i: '122387783',
    author: 'Nemo',
    story_title: 'SvelteKit 1.0',
    story_url: 'https://svelte.dev/blog/announcing-sveltekit-1.0',
    created_at: '2022-12-14T18:38:05.000Z',
  },
  isFavorite: false,
  onPress: ()=> null
}

describe('NewsItem component', () => {
  describe('render', () => {
    it('renders a default NewsItem Component', () => {
      render(<NewsItem {...defaultProps} />)
    })
    it("NewsItem Item onClick method", () => {
        const onChangeSpy = jest.fn()
        render(<NewsItem {...defaultProps} onPress={onChangeSpy} />);
        const buttonComponent = screen.getByTestId(`news_item_button_${defaultProps.item.created_at_i}`)
        fireEvent.click(buttonComponent);
        expect(onChangeSpy).toHaveBeenCalled()
      });
  })
})
