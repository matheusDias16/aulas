import './styles.scss'

export type TObj = {
  name: string,
  age: number
}

export type TListProps = {
  listReceived: TObj[]
  handleClick: (person: TObj) => void
}

export function List({ listReceived, handleClick }: TListProps) {

  return (
    <div className='container'>
      <p>Essa é uma lista</p>

      <div className='action-section'>
        {listReceived && listReceived.map((persons, index) => (

          <button key={index} onClick={() => handleClick(persons)}>
            {persons.name} <strong>{persons.age}</strong>
          </button>

        ))}
      </div>
    </div>
  );
}