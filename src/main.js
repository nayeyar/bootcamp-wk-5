// const path = require('path');
// const { readFile, writeFile } = require('fs').promises;

const db = require('../db/connection.js');
const Pokemon = require('./model.js');

async function main() {

    await db.sync({force: true});

    const pikachu = await Pokemon.create(
        {
            name: 'Pikachu',
            type: 'Electric',
            weight: 6
        }
    );
    // console.log(pikachu);
    await Pokemon.bulkCreate(
        {name:"Charmander",type:"Fire", weight: 12},
        {name:"Charizard",type:"Fire", weight: 12},
        {name:"Togepi",type:"Fairy", weight: 12},
        {name:"Ivysaur",type:"Grass", weight: 12}
    )
    const allPokemon = await Pokemon.findAll();
    console.log(allPokemon);
    const oneCharmander = await Pokemon.findOne({ where: {name: "Charmander"}});
    console.log(oneCharmander);
    const updateResult = await Pokemon.update(
        { type: 'Lightning' },
        { where: {name: "Pikachu"} }
    );
    console.log(updateResult);
    const deleteResult = await Pokemon.destroy({where: {name: "Charmender"}});
    console.log(deleteResult);
}

main();

// async function main() {
//     console.log('*** SYNCHRONUS ***');
//     let pokemon = {
//         name: "Pikachu",
//         type: "Electric"
//     };

//     let dbs = [];
//     dbs.push(pokemon);
    
//     console.log(dbs);
//     console.log(__dirname);

//     console.log('*** ASYNCHRONUS ***')
//     const buffer = await readFile(path.join(__dirname, "pokemon.txt"));
//     const db = JSON.parse(buffer);
//     console.log(db);
//     db.push(pokemon);
//     console.log(db);

//     const stringToSave = JSON.stringify(db);
//     console.log(stringToSave);
//     await writeFile(path.join(__dirname, "pokemon.txt"), stringToSave);
//     console.log('Done');
// }

// main();