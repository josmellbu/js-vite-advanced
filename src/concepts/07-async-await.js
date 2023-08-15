
export const asyncAwait2Component = async( element) => {

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    try {
        cosnt [ value1, value2, value3 ] = await Promise.all([
            slowPromise(),
            mediumPromise(),
            fastPromise(),
        ])
    
        element.innerHTML = `
            value1: ${ value1 } <br/>
            value2: ${ value2 } <br/>
            value3: ${ value3 } <br/>
        `;
    } catch (error) {
        element.innerHTML = errors
    }

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