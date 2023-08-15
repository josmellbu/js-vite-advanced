import { heroes } from "../data/heroes";

export const asyncComponent = ( element) => {
    
    const id1 = '5d86371f97c29d020f1e1f6d'

    findHero( id1 )
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error )
}

const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id ===id );

    if ( !hero )
        throw  `Hero with id ${ id } not found` ;

    return hero.name;
}