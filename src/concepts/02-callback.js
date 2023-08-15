import { heroes } from "../data/heroes";

export const callbacksComponent = ( element) => {

    const id1 = '5d86371f233c9f2425f16916';
    const id2 = '5d86371f233c9f2425f16916';

    findHero( id1, ( error, hero1 ) => {
        // element.innerHTML = hero?.name || 'No hay heroe';

        if ( error) {
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error , hero2) => {
            if ( error ) {
                element.innerHTML = error;
                return;
            }
            
            element.innerHTML = `${hero1.name} / ${hero2.name} `;
        })

    } );
}

const findHero =  ( id, callback) => {

    const hero = heroes.find( hero => hero.id === id);

    if ( !hero ) {
        callback( `Hero with id ${ id } not found`);
        return;
    }

    callback( null, hero );
}