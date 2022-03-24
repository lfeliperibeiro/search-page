export function SearchResult({ data, errorMessage, noResults }) {
  return (
    <div className={'grid'}>
      {errorMessage && <div>{errorMessage}</div>}
      {noResults && (
        <div className={'flex items-center justify-center'}>
          Sem resultado para a sua busca
        </div>
      )}
      <div className={'grid grid-cols-8 gap-20 p-10'}>
        {data.map(({ name, uri }) => (
          <div
            key={uri}
            className={'h-24 w-10 flex flex-col items-center gap-3'}
          >
            <img
              src={`https://fa-search-backend.herokuapp.com/${uri}`}
              alt={name}
            />
            <p>
              <a href={`https://fontawesome.com/icons/${name}`}>{name}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
