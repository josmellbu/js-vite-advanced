
export const promiseRaceComponent = ( element) => {
    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        fastPromise,
        slowPromise(),
        mediumPromise(),
        slowPromise(),
        fastPromise,
        slowPromise(),
        mediumPromise(),
    ]).then(renderValue)
}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000);
})

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 1500);
})

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 1000);
})