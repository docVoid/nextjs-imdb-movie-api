type Props = {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({ query, setQuery, onSearch }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <div className="w-full max-w-md flex mb-6">
      <input
        className="flex-1 p-2 rounded-l-md border border-gray-300 focus:outline-none"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="enter movie name"
      />
      <button
        className="px-4 py-2 bg-yellow-500 text-white rounded-r-md hover:bg-orange-500 cursor-pointer"
        onClick={onSearch}
      >
        search
      </button>
    </div>
  );
}
