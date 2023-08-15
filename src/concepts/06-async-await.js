import { heroes } from "../data/heroes copy"

export const asyncAwaitComponent = async( element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371f233c9f2425f16916';

    try {

        const hero1 = await findHero( id1 );
        const hero2 = await findHero( id2 );
    
        element.innerHTML = `${hero1} / ${hero2}`;
        
    } catch (error) {
        element.innerHTML = error;
    }
}

const findHero = async() => {
    const hero = heroes.find( hero => hero.id === id)
    if ( !hero )
        throw `Hero not found`

    return hero;
}