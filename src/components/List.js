import React from 'react'

const List = (props) => {
  return (
    <React.Fragment>
        <ul className='p-2 bg-white rounded'>
            {props.data.map((person) => (
                <li className='my-3' key={person.id}>
                {" "}
                <Person {...person} removeItem={props.removeItem} />
                </li>
            ))}
        </ul>
    </React.Fragment>
  )
}

const Person = ({ id, nome, stato, img, removeItem }) => {
    return (
    <article>
    <img src={img} alt="prs" className="person-img" />
        <div className="person-info">
            <div className="person-action">
                <h4>{nome}</h4>
                <button onClick={() => removeItem(id)}>
                    X
                </button>
            </div>
            <p>{stato}</p>
        </div>
    </article>
    );
};

export default List