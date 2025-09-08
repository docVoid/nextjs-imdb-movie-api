import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/searchbar';

describe('SearchBar', () => {
  it('calls onSearch when pressing Enter', () => {
    const onSearch = jest.fn();
    const setQuery = jest.fn();
    render(<SearchBar query="" setQuery={setQuery} onSearch={onSearch} />);

    const input = screen.getByPlaceholderText(/enter movie name/i);

    fireEvent.change(input, { target: { value: 'Batman' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(onSearch).toHaveBeenCalled();
  });
});
