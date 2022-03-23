export function SearchResult({ data, errorMessage, noResults }) {
    return (
        <div>
            {errorMessage && <div>{errorMessage}</div>}
            {noResults && <div>Sem resultado para a sua busca</div>}
            <div>
                {data.map(({ name, uri }) => (
                    <div key={uri} className={'w-5 h-6'}>
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
