export function InputSearch({ loading, onChange }) {
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
          Carregando...
        </span>
            ) : (
                <span
                    className={
                        'bg-green-500 text-white py-2 px-10 rounded flex items-center'
                    }
                >
          Pronto
        </span>
            )}
        </div>
    );
}
