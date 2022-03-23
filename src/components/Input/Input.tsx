type Props = {
  loading: boolean;
  onChange: () => void;
};

export function Input({ loading, onChange }: Props) {
  return (
    <div className={'flex m-8'}>
      <input
        className={'px-3 py-2 border-gray-300 border-2 rounded mr-4 w-full'}
        placeholder={'Search...'}
        onChange={onChange}
      />
      {loading ? (
        <span
          className={
            'bg-orange-500 text-white py-2 px-10 rounded flex items-center'
          }
        >
          Loading...
        </span>
      ) : (
        <span
          className={
            'bg-green-500 text-white py-2 px-10 rounded flex items-center'
          }
        >
          Ready
        </span>
      )}
    </div>
  );
}
