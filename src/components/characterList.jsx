import React from 'react'
import Character from './character'


function CharacterList({ characters }) {
    return (
        <div className='row' >
            {
                characters.map(character => {
                    return (<div className='col-md-4' key={character.id} >
                        <Character character={character} />
                    </div>)
                })
            }
        </div>
    )
}

export default CharacterList