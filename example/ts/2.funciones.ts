function formatUser(
    name: string,
    age: number
): string{
    const hasSurname = name.split(' ').length > 1
    return `Name: ${name}, age: ${age}`;
}

formatUser('Nauel Gomez', 34)

function formatUserOptionalParam(
    name: string = 'Default Name',
    age?: number
): string{
    let ret: string
    ret = `Name: ${name}`
    if(age){
        ret+= `, age: ${age}`
    }
    return ret
}

console.log()