//A partir del siguiente archivo: https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json
//Crea un pokédex, es decir una página web donde puedas consultar pokemones, y leer información sobre cada pokemon que se muestre.

let pokemonArray = [];

const poke_file = JSON.parse(` [{
			"abilities": [
				"Overgrow"
			],
			"detailPageURL": "/us/pokedex/bulbasaur",
			"weight": 15.2,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Ice"
			],
			"number": "001",
			"height": 28,
			"collectibles_slug": "bulbasaur",
			"featured": "true",
			"slug": "bulbasaur",
			"name": "Bulbasaur",
			"ThumbnailAltText": "Bulbasaur",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
			"id": 1,
			"type": [
				"grass",
				"poison"
			]
		},
		{
			"abilities": [
				"Overgrow"
			],
			"detailPageURL": "/us/pokedex/ivysaur",
			"weight": 28.7,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Ice"
			],
			"number": "002",
			"height": 39,
			"collectibles_slug": "ivysaur",
			"featured": "true",
			"slug": "ivysaur",
			"name": "Ivysaur",
			"ThumbnailAltText": "Ivysaur",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
			"id": 2,
			"type": [
				"grass",
				"poison"
			]
		},
		{
			"abilities": [
				"Overgrow"
			],
			"detailPageURL": "/us/pokedex/venusaur",
			"weight": 9999,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Ice"
			],
			"number": "003",
			"height": 945,
			"collectibles_slug": "venusaur",
			"featured": "true",
			"slug": "venusaur",
			"name": "Venusaur",
			"ThumbnailAltText": "Venusaur",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
			"id": 3,
			"type": [
				"grass",
				"poison"
			]
		},
		{
			"abilities": [
				"Blaze"
			],
			"detailPageURL": "/us/pokedex/charmander",
			"weight": 18.7,
			"weakness": [
				"Water",
				"Ground",
				"Rock"
			],
			"number": "004",
			"height": 24,
			"collectibles_slug": "charmander",
			"featured": "true",
			"slug": "charmander",
			"name": "Charmander",
			"ThumbnailAltText": "Charmander",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
			"id": 4,
			"type": [
				"fire"
			]
		},
		{
			"abilities": [
				"Blaze"
			],
			"detailPageURL": "/us/pokedex/charmeleon",
			"weight": 41.9,
			"weakness": [
				"Water",
				"Ground",
				"Rock"
			],
			"number": "005",
			"height": 43,
			"collectibles_slug": "charmeleon",
			"featured": "true",
			"slug": "charmeleon",
			"name": "Charmeleon",
			"ThumbnailAltText": "Charmeleon",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
			"id": 5,
			"type": [
				"fire"
			]
		},
		{
			"abilities": [
				"Blaze"
			],
			"detailPageURL": "/us/pokedex/charizard",
			"weight": 9999,
			"weakness": [
				"Water",
				"Electric",
				"Rock"
			],
			"number": "006",
			"height": 1102,
			"collectibles_slug": "charizard",
			"featured": "true",
			"slug": "charizard",
			"name": "Charizard",
			"ThumbnailAltText": "Charizard",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
			"id": 6,
			"type": [
				"fire",
				"flying"
			]
		},
		
		{
			"abilities": [
				"Torrent"
			],
			"detailPageURL": "/us/pokedex/squirtle",
			"weight": 19.8,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "007",
			"height": 20,
			"collectibles_slug": "squirtle",
			"featured": "true",
			"slug": "squirtle",
			"name": "Squirtle",
			"ThumbnailAltText": "Squirtle",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
			"id": 7,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Torrent"
			],
			"detailPageURL": "/us/pokedex/wartortle",
			"weight": 49.6,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "008",
			"height": 39,
			"collectibles_slug": "wartortle",
			"featured": "true",
			"slug": "wartortle",
			"name": "Wartortle",
			"ThumbnailAltText": "Wartortle",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
			"id": 8,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Torrent"
			],
			"detailPageURL": "/us/pokedex/blastoise",
			"weight": 9999,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "009",
			"height": 984,
			"collectibles_slug": "blastoise",
			"featured": "true",
			"slug": "blastoise",
			"name": "Blastoise",
			"ThumbnailAltText": "Blastoise",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
			"id": 9,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Shield Dust"
			],
			"detailPageURL": "/us/pokedex/caterpie",
			"weight": 6.4,
			"weakness": [
				"Fire",
				"Flying",
				"Rock"
			],
			"number": "010",
			"height": 12,
			"collectibles_slug": "caterpie",
			"featured": "true",
			"slug": "caterpie",
			"name": "Caterpie",
			"ThumbnailAltText": "Caterpie",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
			"id": 10,
			"type": [
				"bug"
			]
		},
		{
			"abilities": [
				"Shed Skin"
			],
			"detailPageURL": "/us/pokedex/metapod",
			"weight": 21.8,
			"weakness": [
				"Fire",
				"Flying",
				"Rock"
			],
			"number": "011",
			"height": 28,
			"collectibles_slug": "metapod",
			"featured": "true",
			"slug": "metapod",
			"name": "Metapod",
			"ThumbnailAltText": "Metapod",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
			"id": 11,
			"type": [
				"bug"
			]
		},
		{
			"abilities": [
				"Compound Eyes"
			],
			"detailPageURL": "/us/pokedex/butterfree",
			"weight": 9999,
			"weakness": [
				"Fire",
				"Flying",
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "012",
			"height": 669,
			"collectibles_slug": "butterfree",
			"featured": "true",
			"slug": "butterfree",
			"name": "Butterfree",
			"ThumbnailAltText": "Butterfree",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
			"id": 12,
			"type": [
				"bug",
				"flying"
			]
		},
		{
			"abilities": [
				"Shield Dust"
			],
			"detailPageURL": "/us/pokedex/weedle",
			"weight": 7.1,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Rock"
			],
			"number": "013",
			"height": 12,
			"collectibles_slug": "weedle",
			"featured": "true",
			"slug": "weedle",
			"name": "Weedle",
			"ThumbnailAltText": "Weedle",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
			"id": 13,
			"type": [
				"bug",
				"poison"
			]
		},
		{
			"abilities": [
				"Shed Skin"
			],
			"detailPageURL": "/us/pokedex/kakuna",
			"weight": 22,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Rock"
			],
			"number": "014",
			"height": 24,
			"collectibles_slug": "kakuna",
			"featured": "true",
			"slug": "kakuna",
			"name": "Kakuna",
			"ThumbnailAltText": "Kakuna",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png",
			"id": 14,
			"type": [
				"bug",
				"poison"
			]
		},
		{
			"abilities": [
				"Adaptability"
			],
			"detailPageURL": "/us/pokedex/beedrill",
			"weight": 89.3,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Rock"
			],
			"number": "015",
			"height": 55,
			"collectibles_slug": "beedrill",
			"featured": "true",
			"slug": "beedrill",
			"name": "Beedrill",
			"ThumbnailAltText": "Beedrill",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
			"id": 15,
			"type": [
				"bug",
				"poison"
			]
		},
		{
			"abilities": [
				"Keen Eye",
				"Tangled Feet"
			],
			"detailPageURL": "/us/pokedex/pidgey",
			"weight": 4,
			"weakness": [
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "016",
			"height": 12,
			"collectibles_slug": "pidgey",
			"featured": "true",
			"slug": "pidgey",
			"name": "Pidgey",
			"ThumbnailAltText": "Pidgey",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
			"id": 16,
			"type": [
				"normal",
				"flying"
			]
		},
		{
			"abilities": [
				"Keen Eye",
				"Tangled Feet"
			],
			"detailPageURL": "/us/pokedex/pidgeotto",
			"weight": 66.1,
			"weakness": [
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "017",
			"height": 43,
			"collectibles_slug": "pidgeotto",
			"featured": "true",
			"slug": "pidgeotto",
			"name": "Pidgeotto",
			"ThumbnailAltText": "Pidgeotto",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png",
			"id": 17,
			"type": [
				"normal",
				"flying"
			]
		},
		{
			"abilities": [
				"Keen Eye",
				"Tangled Feet"
			],
			"detailPageURL": "/us/pokedex/pidgeot",
			"weight": 87.1,
			"weakness": [
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "018",
			"height": 59,
			"collectibles_slug": "pidgeot",
			"featured": "true",
			"slug": "pidgeot",
			"name": "Pidgeot",
			"ThumbnailAltText": "Pidgeot",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png",
			"id": 18,
			"type": [
				"normal",
				"flying"
			]
		},
		{
			"abilities": [
				"Gluttony",
				"Hustle"
			],
			"detailPageURL": "/us/pokedex/rattata",
			"weight": 8.4,
			"weakness": [
				"Fairy",
				"Bug",
				"Fighting"
			],
			"number": "019",
			"height": 12,
			"collectibles_slug": "rattata",
			"featured": "true",
			"slug": "rattata",
			"name": "Rattata",
			"ThumbnailAltText": "Rattata",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
			"id": 19,
			"type": [
				"dark",
				"normal"
			]
		},
		{
			"abilities": [
				"Guts",
				"Run Away"
			],
			"detailPageURL": "/us/pokedex/raticate",
			"weight": 40.8,
			"weakness": [
				"Fighting"
			],
			"number": "020",
			"height": 28,
			"collectibles_slug": "raticate",
			"featured": "true",
			"slug": "raticate",
			"name": "Raticate",
			"ThumbnailAltText": "Raticate",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png",
			"id": 20,
			"type": [
				"normal"
			]
		},
		{
			"abilities": [
				"Keen Eye"
			],
			"detailPageURL": "/us/pokedex/spearow",
			"weight": 4.4,
			"weakness": [
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "021",
			"height": 12,
			"collectibles_slug": "spearow",
			"featured": "true",
			"slug": "spearow",
			"name": "Spearow",
			"ThumbnailAltText": "Spearow",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
			"id": 21,
			"type": [
				"normal",
				"flying"
			]
		},
		{
			"abilities": [
				"Keen Eye"
			],
			"detailPageURL": "/us/pokedex/fearow",
			"weight": 83.8,
			"weakness": [
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "022",
			"height": 47,
			"collectibles_slug": "fearow",
			"featured": "true",
			"slug": "fearow",
			"name": "Fearow",
			"ThumbnailAltText": "Fearow",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png",
			"id": 22,
			"type": [
				"normal",
				"flying"
			]
		},
		{
			"abilities": [
				"Intimidate",
				"Shed Skin"
			],
			"detailPageURL": "/us/pokedex/ekans",
			"weight": 15.2,
			"weakness": [
				"Psychic",
				"Ground"
			],
			"number": "023",
			"height": 79,
			"collectibles_slug": "ekans",
			"featured": "true",
			"slug": "ekans",
			"name": "Ekans",
			"ThumbnailAltText": "Ekans",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
			"id": 23,
			"type": [
				"poison"
			]
		},
		{
			"abilities": [
				"Intimidate",
				"Shed Skin"
			],
			"detailPageURL": "/us/pokedex/arbok",
			"weight": 143.3,
			"weakness": [
				"Psychic",
				"Ground"
			],
			"number": "024",
			"height": 138,
			"collectibles_slug": "arbok",
			"featured": "true",
			"slug": "arbok",
			"name": "Arbok",
			"ThumbnailAltText": "Arbok",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png",
			"id": 24,
			"type": [
				"poison"
			]
		},
		{
			"abilities": [
				"Static"
			],
			"detailPageURL": "/us/pokedex/pikachu",
			"weight": 9999,
			"weakness": [
				"Ground"
			],
			"number": "025",
			"height": 827,
			"collectibles_slug": "pikachu",
			"featured": "true",
			"slug": "pikachu",
			"name": "Pikachu",
			"ThumbnailAltText": "Pikachu",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
			"id": 25,
			"type": [
				"electric"
			]
		},
        {
			"abilities": [
				"Surge Surfer"
			],
			"detailPageURL": "/us/pokedex/raichu",
			"weight": 46.3,
			"weakness": [
				"Ghost",
				"Dark",
				"Bug",
				"Ground"
			],
			"number": "026",
			"height": 28,
			"collectibles_slug": "raichu",
			"featured": "true",
			"slug": "raichu",
			"name": "Raichu",
			"ThumbnailAltText": "Raichu",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png",
			"id": 26,
			"type": [
				"electric",
				"psychic"
			]
		},
		{
			"abilities": [
				"Static"
			],
			"detailPageURL": "/us/pokedex/raichu",
			"weight": 66.1,
			"weakness": [
				"Ground"
			],
			"number": "026",
			"height": 31,
			"collectibles_slug": "raichu",
			"featured": "true",
			"slug": "raichu",
			"name": "Raichu",
			"ThumbnailAltText": "Raichu",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png",
			"id": 26,
			"type": [
				"electric"
			]
		},
		{
			"abilities": [
				"Snow Cloak"
			],
			"detailPageURL": "/us/pokedex/sandshrew",
			"weight": 88.2,
			"weakness": [
				"Fire",
				"Fighting",
				"Ground"
			],
			"number": "027",
			"height": 28,
			"collectibles_slug": "sandshrew",
			"featured": "true",
			"slug": "sandshrew",
			"name": "Sandshrew",
			"ThumbnailAltText": "Sandshrew",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
			"id": 27,
			"type": [
				"ice",
				"steel"
			]
		},
		{
			"abilities": [
				"Sand Veil"
			],
			"detailPageURL": "/us/pokedex/sandshrew",
			"weight": 26.5,
			"weakness": [
				"Water",
				"Grass",
				"Ice"
			],
			"number": "027",
			"height": 24,
			"collectibles_slug": "sandshrew",
			"featured": "true",
			"slug": "sandshrew",
			"name": "Sandshrew",
			"ThumbnailAltText": "Sandshrew",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
			"id": 27,
			"type": [
				"ground"
			]
		},
		{
			"abilities": [
				"Snow Cloak"
			],
			"detailPageURL": "/us/pokedex/sandslash",
			"weight": 121.3,
			"weakness": [
				"Fire",
				"Fighting",
				"Ground"
			],
			"number": "028",
			"height": 47,
			"collectibles_slug": "sandslash",
			"featured": "true",
			"slug": "sandslash",
			"name": "Sandslash",
			"ThumbnailAltText": "Sandslash",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png",
			"id": 28,
			"type": [
				"ice",
				"steel"
			]
		},
		{
			"abilities": [
				"Sand Veil"
			],
			"detailPageURL": "/us/pokedex/sandslash",
			"weight": 65,
			"weakness": [
				"Water",
				"Grass",
				"Ice"
			],
			"number": "028",
			"height": 39,
			"collectibles_slug": "sandslash",
			"featured": "true",
			"slug": "sandslash",
			"name": "Sandslash",
			"ThumbnailAltText": "Sandslash",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png",
			"id": 28,
			"type": [
				"ground"
			]
		},
		{
			"abilities": [
				"Poison Point",
				"Rivalry"
			],
			"detailPageURL": "/us/pokedex/nidoran-female",
			"weight": 15.4,
			"weakness": [
				"Psychic",
				"Ground"
			],
			"number": "029",
			"height": 16,
			"collectibles_slug": "nidoran-female",
			"featured": "true",
			"slug": "nidoran-female",
			"name": "Nidoran♀",
			"ThumbnailAltText": "Nidoran♀",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png",
			"id": 29,
			"type": [
				"poison"
			]
		},
		{
			"abilities": [
				"Poison Point",
				"Rivalry"
			],
			"detailPageURL": "/us/pokedex/nidorina",
			"weight": 44.1,
			"weakness": [
				"Psychic",
				"Ground"
			],
			"number": "030",
			"height": 31,
			"collectibles_slug": "nidorina",
			"featured": "true",
			"slug": "nidorina",
			"name": "Nidorina",
			"ThumbnailAltText": "Nidorina",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png",
			"id": 30,
			"type": [
				"poison"
			]
		},
		{
			"abilities": [
				"Poison Point",
				"Rivalry"
			],
			"detailPageURL": "/us/pokedex/nidoqueen",
			"weight": 132.3,
			"weakness": [
				"Water",
				"Psychic",
				"Ice",
				"Ground"
			],
			"number": "031",
			"height": 51,
			"collectibles_slug": "nidoqueen",
			"featured": "true",
			"slug": "nidoqueen",
			"name": "Nidoqueen",
			"ThumbnailAltText": "Nidoqueen",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png",
			"id": 31,
			"type": [
				"poison",
				"ground"
			]
		},
		{
			"abilities": [
				"Poison Point",
				"Rivalry"
			],
			"detailPageURL": "/us/pokedex/nidoran-male",
			"weight": 19.8,
			"weakness": [
				"Psychic",
				"Ground"
			],
			"number": "032",
			"height": 20,
			"collectibles_slug": "nidoran-male",
			"featured": "true",
			"slug": "nidoran-male",
			"name": "Nidoran♂",
			"ThumbnailAltText": "Nidoran♂",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png",
			"id": 32,
			"type": [
				"poison"
			]
		},
		{
			"abilities": [
				"Poison Point",
				"Rivalry"
			],
			"detailPageURL": "/us/pokedex/nidorino",
			"weight": 43,
			"weakness": [
				"Psychic",
				"Ground"
			],
			"number": "033",
			"height": 35,
			"collectibles_slug": "nidorino",
			"featured": "true",
			"slug": "nidorino",
			"name": "Nidorino",
			"ThumbnailAltText": "Nidorino",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png",
			"id": 33,
			"type": [
				"poison"
			]
		},
		{
			"abilities": [
				"Poison Point",
				"Rivalry"
			],
			"detailPageURL": "/us/pokedex/nidoking",
			"weight": 136.7,
			"weakness": [
				"Water",
				"Psychic",
				"Ice",
				"Ground"
			],
			"number": "034",
			"height": 55,
			"collectibles_slug": "nidoking",
			"featured": "true",
			"slug": "nidoking",
			"name": "Nidoking",
			"ThumbnailAltText": "Nidoking",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png",
			"id": 34,
			"type": [
				"poison",
				"ground"
			]
		},
		{
			"abilities": [
				"Cute Charm",
				"Magic Guard"
			],
			"detailPageURL": "/us/pokedex/clefairy",
			"weight": 16.5,
			"weakness": [
				"Steel",
				"Poison"
			],
			"number": "035",
			"height": 24,
			"collectibles_slug": "clefairy",
			"featured": "true",
			"slug": "clefairy",
			"name": "Clefairy",
			"ThumbnailAltText": "Clefairy",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
			"id": 35,
			"type": [
				"fairy"
			]
		},
		{
			"abilities": [
				"Cute Charm",
				"Magic Guard"
			],
			"detailPageURL": "/us/pokedex/clefable",
			"weight": 88.2,
			"weakness": [
				"Steel",
				"Poison"
			],
			"number": "036",
			"height": 51,
			"collectibles_slug": "clefable",
			"featured": "true",
			"slug": "clefable",
			"name": "Clefable",
			"ThumbnailAltText": "Clefable",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png",
			"id": 36,
			"type": [
				"fairy"
			]
		},
		{
			"abilities": [
				"Snow Cloak"
			],
			"detailPageURL": "/us/pokedex/vulpix",
			"weight": 21.8,
			"weakness": [
				"Fire",
				"Steel",
				"Fighting",
				"Rock"
			],
			"number": "037",
			"height": 24,
			"collectibles_slug": "vulpix",
			"featured": "true",
			"slug": "vulpix",
			"name": "Vulpix",
			"ThumbnailAltText": "Vulpix",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
			"id": 37,
			"type": [
				"ice"
			]
		},
		{
			"abilities": [
				"Flash Fire"
			],
			"detailPageURL": "/us/pokedex/vulpix",
			"weight": 21.8,
			"weakness": [
				"Water",
				"Ground",
				"Rock"
			],
			"number": "037",
			"height": 24,
			"collectibles_slug": "vulpix",
			"featured": "true",
			"slug": "vulpix",
			"name": "Vulpix",
			"ThumbnailAltText": "Vulpix",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
			"id": 37,
			"type": [
				"fire"
			]
		},
		{
			"abilities": [
				"Snow Cloak"
			],
			"detailPageURL": "/us/pokedex/ninetales",
			"weight": 43.9,
			"weakness": [
				"Fire",
				"Steel",
				"Poison",
				"Rock"
			],
			"number": "038",
			"height": 43,
			"collectibles_slug": "ninetales",
			"featured": "true",
			"slug": "ninetales",
			"name": "Ninetales",
			"ThumbnailAltText": "Ninetales",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png",
			"id": 38,
			"type": [
				"ice",
				"fairy"
			]
		},
		{
			"abilities": [
				"Flash Fire"
			],
			"detailPageURL": "/us/pokedex/ninetales",
			"weight": 43.9,
			"weakness": [
				"Water",
				"Ground",
				"Rock"
			],
			"number": "038",
			"height": 43,
			"collectibles_slug": "ninetales",
			"featured": "true",
			"slug": "ninetales",
			"name": "Ninetales",
			"ThumbnailAltText": "Ninetales",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png",
			"id": 38,
			"type": [
				"fire"
			]
		},
		{
			"abilities": [
				"Competitive",
				"Cute Charm"
			],
			"detailPageURL": "/us/pokedex/jigglypuff",
			"weight": 12.1,
			"weakness": [
				"Steel",
				"Poison"
			],
			"number": "039",
			"height": 20,
			"collectibles_slug": "jigglypuff",
			"featured": "true",
			"slug": "jigglypuff",
			"name": "Jigglypuff",
			"ThumbnailAltText": "Jigglypuff",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png",
			"id": 39,
			"type": [
				"normal",
				"fairy"
			]
		},
		{
			"abilities": [
				"Competitive",
				"Cute Charm"
			],
			"detailPageURL": "/us/pokedex/wigglytuff",
			"weight": 26.5,
			"weakness": [
				"Steel",
				"Poison"
			],
			"number": "040",
			"height": 39,
			"collectibles_slug": "wigglytuff",
			"featured": "true",
			"slug": "wigglytuff",
			"name": "Wigglytuff",
			"ThumbnailAltText": "Wigglytuff",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png",
			"id": 40,
			"type": [
				"normal",
				"fairy"
			]
		},
		{
			"abilities": [
				"Inner Focus"
			],
			"detailPageURL": "/us/pokedex/zubat",
			"weight": 16.5,
			"weakness": [
				"Psychic",
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "041",
			"height": 31,
			"collectibles_slug": "zubat",
			"featured": "true",
			"slug": "zubat",
			"name": "Zubat",
			"ThumbnailAltText": "Zubat",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png",
			"id": 41,
			"type": [
				"poison",
				"flying"
			]
		},
		{
			"abilities": [
				"Inner Focus"
			],
			"detailPageURL": "/us/pokedex/golbat",
			"weight": 121.3,
			"weakness": [
				"Psychic",
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "042",
			"height": 63,
			"collectibles_slug": "golbat",
			"featured": "true",
			"slug": "golbat",
			"name": "Golbat",
			"ThumbnailAltText": "Golbat",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png",
			"id": 42,
			"type": [
				"poison",
				"flying"
			]
		},
		{
			"abilities": [
				"Chlorophyll"
			],
			"detailPageURL": "/us/pokedex/oddish",
			"weight": 11.9,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Ice"
			],
			"number": "043",
			"height": 20,
			"collectibles_slug": "oddish",
			"featured": "true",
			"slug": "oddish",
			"name": "Oddish",
			"ThumbnailAltText": "Oddish",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png",
			"id": 43,
			"type": [
				"grass",
				"poison"
			]
		},
		{
			"abilities": [
				"Chlorophyll"
			],
			"detailPageURL": "/us/pokedex/gloom",
			"weight": 19,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Ice"
			],
			"number": "044",
			"height": 31,
			"collectibles_slug": "gloom",
			"featured": "true",
			"slug": "gloom",
			"name": "Gloom",
			"ThumbnailAltText": "Gloom",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png",
			"id": 44,
			"type": [
				"grass",
				"poison"
			]
		},
		{
			"abilities": [
				"Chlorophyll"
			],
			"detailPageURL": "/us/pokedex/vileplume",
			"weight": 41,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Ice"
			],
			"number": "045",
			"height": 47,
			"collectibles_slug": "vileplume",
			"featured": "true",
			"slug": "vileplume",
			"name": "Vileplume",
			"ThumbnailAltText": "Vileplume",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png",
			"id": 45,
			"type": [
				"grass",
				"poison"
			]
		},
		{
			"abilities": [
				"Dry Skin",
				"Effect Spore"
			],
			"detailPageURL": "/us/pokedex/paras",
			"weight": 11.9,
			"weakness": [
				"Fire",
				"Flying",
				"Ice",
				"Poison",
				"Rock",
				"Bug"
			],
			"number": "046",
			"height": 12,
			"collectibles_slug": "paras",
			"featured": "true",
			"slug": "paras",
			"name": "Paras",
			"ThumbnailAltText": "Paras",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png",
			"id": 46,
			"type": [
				"bug",
				"grass"
			]
		},
		{
			"abilities": [
				"Dry Skin",
				"Effect Spore"
			],
			"detailPageURL": "/us/pokedex/parasect",
			"weight": 65,
			"weakness": [
				"Fire",
				"Flying",
				"Ice",
				"Poison",
				"Rock",
				"Bug"
			],
			"number": "047",
			"height": 39,
			"collectibles_slug": "parasect",
			"featured": "true",
			"slug": "parasect",
			"name": "Parasect",
			"ThumbnailAltText": "Parasect",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png",
			"id": 47,
			"type": [
				"bug",
				"grass"
			]
		},
		{
			"abilities": [
				"Compound Eyes",
				"Tinted Lens"
			],
			"detailPageURL": "/us/pokedex/venonat",
			"weight": 66.1,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Rock"
			],
			"number": "048",
			"height": 39,
			"collectibles_slug": "venonat",
			"featured": "true",
			"slug": "venonat",
			"name": "Venonat",
			"ThumbnailAltText": "Venonat",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png",
			"id": 48,
			"type": [
				"bug",
				"poison"
			]
		},
		{
			"abilities": [
				"Shield Dust",
				"Tinted Lens"
			],
			"detailPageURL": "/us/pokedex/venomoth",
			"weight": 27.6,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Rock"
			],
			"number": "049",
			"height": 59,
			"collectibles_slug": "venomoth",
			"featured": "true",
			"slug": "venomoth",
			"name": "Venomoth",
			"ThumbnailAltText": "Venomoth",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png",
			"id": 49,
			"type": [
				"bug",
				"poison"
			]
		},
		{
			"abilities": [
				"Sand Veil",
				"Tangling Hair"
			],
			"detailPageURL": "/us/pokedex/diglett",
			"weight": 2.2,
			"weakness": [
				"Fire",
				"Water",
				"Fighting",
				"Ground"
			],
			"number": "050",
			"height": 8,
			"collectibles_slug": "diglett",
			"featured": "true",
			"slug": "diglett",
			"name": "Diglett",
			"ThumbnailAltText": "Diglett",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png",
			"id": 50,
			"type": [
				"ground",
				"steel"
			]
		},
		{
			"abilities": [
				"Arena Trap",
				"Sand Veil"
			],
			"detailPageURL": "/us/pokedex/diglett",
			"weight": 1.8,
			"weakness": [
				"Water",
				"Grass",
				"Ice"
			],
			"number": "050",
			"height": 8,
			"collectibles_slug": "diglett",
			"featured": "true",
			"slug": "diglett",
			"name": "Diglett",
			"ThumbnailAltText": "Diglett",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png",
			"id": 50,
			"type": [
				"ground"
			]
		} 
        ,
		{
			"abilities": [
				"Sand Veil",
				"Tangling Hair"
			],
			"detailPageURL": "/us/pokedex/dugtrio",
			"weight": 146.8,
			"weakness": [
				"Fire",
				"Water",
				"Fighting",
				"Ground"
			],
			"number": "051",
			"height": 28,
			"collectibles_slug": "dugtrio",
			"featured": "true",
			"slug": "dugtrio",
			"name": "Dugtrio",
			"ThumbnailAltText": "Dugtrio",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png",
			"id": 51,
			"type": [
				"ground",
				"steel"
			]
		},
		{
			"abilities": [
				"Arena Trap",
				"Sand Veil"
			],
			"detailPageURL": "/us/pokedex/dugtrio",
			"weight": 73.4,
			"weakness": [
				"Water",
				"Grass",
				"Ice"
			],
			"number": "051",
			"height": 28,
			"collectibles_slug": "dugtrio",
			"featured": "true",
			"slug": "dugtrio",
			"name": "Dugtrio",
			"ThumbnailAltText": "Dugtrio",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png",
			"id": 51,
			"type": [
				"ground"
			]
		},
		{
			"abilities": [
				"Pickup",
				"Technician"
			],
			"detailPageURL": "/us/pokedex/meowth",
			"weight": 9999,
			"weakness": [
				"Fighting"
			],
			"number": "052",
			"height": 1299,
			"collectibles_slug": "meowth",
			"featured": "true",
			"slug": "meowth",
			"name": "Meowth",
			"ThumbnailAltText": "Meowth",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png",
			"id": 52,
			"type": [
				"normal"
			]
		},
		{
			"abilities": [
				"Pickup",
				"Tough Claws"
			],
			"detailPageURL": "/us/pokedex/meowth",
			"weight": 16.5,
			"weakness": [
				"Fire",
				"Fighting",
				"Ground"
			],
			"number": "052",
			"height": 16,
			"collectibles_slug": "meowth",
			"featured": "true",
			"slug": "meowth",
			"name": "Meowth",
			"ThumbnailAltText": "Meowth",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png",
			"id": 52,
			"type": [
				"steel"
			]
		},
		{
			"abilities": [
				"Pickup",
				"Technician"
			],
			"detailPageURL": "/us/pokedex/meowth",
			"weight": 9.3,
			"weakness": [
				"Fairy",
				"Bug",
				"Fighting"
			],
			"number": "052",
			"height": 16,
			"collectibles_slug": "meowth",
			"featured": "true",
			"slug": "meowth",
			"name": "Meowth",
			"ThumbnailAltText": "Meowth",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png",
			"id": 52,
			"type": [
				"dark"
			]
		},
		{
			"abilities": [
				"Pickup",
				"Technician"
			],
			"detailPageURL": "/us/pokedex/meowth",
			"weight": 9.3,
			"weakness": [
				"Fighting"
			],
			"number": "052",
			"height": 16,
			"collectibles_slug": "meowth",
			"featured": "true",
			"slug": "meowth",
			"name": "Meowth",
			"ThumbnailAltText": "Meowth",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png",
			"id": 52,
			"type": [
				"normal"
			]
		},
		{
			"abilities": [
				"Fur Coat",
				"Technician"
			],
			"detailPageURL": "/us/pokedex/persian",
			"weight": 72.8,
			"weakness": [
				"Fairy",
				"Bug",
				"Fighting"
			],
			"number": "053",
			"height": 43,
			"collectibles_slug": "persian",
			"featured": "true",
			"slug": "persian",
			"name": "Persian",
			"ThumbnailAltText": "Persian",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png",
			"id": 53,
			"type": [
				"dark"
			]
		},
		{
			"abilities": [
				"Limber",
				"Technician"
			],
			"detailPageURL": "/us/pokedex/persian",
			"weight": 70.5,
			"weakness": [
				"Fighting"
			],
			"number": "053",
			"height": 39,
			"collectibles_slug": "persian",
			"featured": "true",
			"slug": "persian",
			"name": "Persian",
			"ThumbnailAltText": "Persian",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png",
			"id": 53,
			"type": [
				"normal"
			]
		},
		{
			"abilities": [
				"Cloud Nine",
				"Damp"
			],
			"detailPageURL": "/us/pokedex/psyduck",
			"weight": 43.2,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "054",
			"height": 31,
			"collectibles_slug": "psyduck",
			"featured": "true",
			"slug": "psyduck",
			"name": "Psyduck",
			"ThumbnailAltText": "Psyduck",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
			"id": 54,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Cloud Nine",
				"Damp"
			],
			"detailPageURL": "/us/pokedex/golduck",
			"weight": 168.9,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "055",
			"height": 67,
			"collectibles_slug": "golduck",
			"featured": "true",
			"slug": "golduck",
			"name": "Golduck",
			"ThumbnailAltText": "Golduck",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png",
			"id": 55,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Anger Point",
				"Vital Spirit"
			],
			"detailPageURL": "/us/pokedex/mankey",
			"weight": 61.7,
			"weakness": [
				"Psychic",
				"Flying",
				"Fairy"
			],
			"number": "056",
			"height": 20,
			"collectibles_slug": "mankey",
			"featured": "true",
			"slug": "mankey",
			"name": "Mankey",
			"ThumbnailAltText": "Mankey",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png",
			"id": 56,
			"type": [
				"fighting"
			]
		},
		{
			"abilities": [
				"Anger Point",
				"Vital Spirit"
			],
			"detailPageURL": "/us/pokedex/primeape",
			"weight": 70.5,
			"weakness": [
				"Psychic",
				"Flying",
				"Fairy"
			],
			"number": "057",
			"height": 39,
			"collectibles_slug": "primeape",
			"featured": "true",
			"slug": "primeape",
			"name": "Primeape",
			"ThumbnailAltText": "Primeape",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png",
			"id": 57,
			"type": [
				"fighting"
			]
		},
		{
			"abilities": [
				"Flash Fire",
				"Intimidate"
			],
			"detailPageURL": "/us/pokedex/growlithe",
			"weight": 41.9,
			"weakness": [
				"Water",
				"Ground",
				"Rock"
			],
			"number": "058",
			"height": 28,
			"collectibles_slug": "growlithe",
			"featured": "true",
			"slug": "growlithe",
			"name": "Growlithe",
			"ThumbnailAltText": "Growlithe",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png",
			"id": 58,
			"type": [
				"fire"
			]
		},
		{
			"abilities": [
				"Flash Fire",
				"Intimidate"
			],
			"detailPageURL": "/us/pokedex/arcanine",
			"weight": 341.7,
			"weakness": [
				"Water",
				"Ground",
				"Rock"
			],
			"number": "059",
			"height": 75,
			"collectibles_slug": "arcanine",
			"featured": "true",
			"slug": "arcanine",
			"name": "Arcanine",
			"ThumbnailAltText": "Arcanine",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png",
			"id": 59,
			"type": [
				"fire"
			]
		},
		{
			"abilities": [
				"Damp",
				"Water Absorb"
			],
			"detailPageURL": "/us/pokedex/poliwag",
			"weight": 27.3,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "060",
			"height": 24,
			"collectibles_slug": "poliwag",
			"featured": "true",
			"slug": "poliwag",
			"name": "Poliwag",
			"ThumbnailAltText": "Poliwag",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png",
			"id": 60,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Damp",
				"Water Absorb"
			],
			"detailPageURL": "/us/pokedex/poliwhirl",
			"weight": 44.1,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "061",
			"height": 39,
			"collectibles_slug": "poliwhirl",
			"featured": "true",
			"slug": "poliwhirl",
			"name": "Poliwhirl",
			"ThumbnailAltText": "Poliwhirl",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png",
			"id": 61,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Damp",
				"Water Absorb"
			],
			"detailPageURL": "/us/pokedex/poliwrath",
			"weight": 119,
			"weakness": [
				"Fairy",
				"Grass",
				"Flying",
				"Psychic",
				"Electric"
			],
			"number": "062",
			"height": 51,
			"collectibles_slug": "poliwrath",
			"featured": "true",
			"slug": "poliwrath",
			"name": "Poliwrath",
			"ThumbnailAltText": "Poliwrath",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png",
			"id": 62,
			"type": [
				"water",
				"fighting"
			]
		},
		{
			"abilities": [
				"Inner Focus",
				"Synchronize"
			],
			"detailPageURL": "/us/pokedex/abra",
			"weight": 43,
			"weakness": [
				"Ghost",
				"Dark",
				"Bug"
			],
			"number": "063",
			"height": 35,
			"collectibles_slug": "abra",
			"featured": "true",
			"slug": "abra",
			"name": "Abra",
			"ThumbnailAltText": "Abra",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png",
			"id": 63,
			"type": [
				"psychic"
			]
		},
		{
			"abilities": [
				"Inner Focus",
				"Synchronize"
			],
			"detailPageURL": "/us/pokedex/kadabra",
			"weight": 124.6,
			"weakness": [
				"Ghost",
				"Dark",
				"Bug"
			],
			"number": "064",
			"height": 51,
			"collectibles_slug": "kadabra",
			"featured": "true",
			"slug": "kadabra",
			"name": "Kadabra",
			"ThumbnailAltText": "Kadabra",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png",
			"id": 64,
			"type": [
				"psychic"
			]
		},
		{
			"abilities": [
				"Trace"
			],
			"detailPageURL": "/us/pokedex/alakazam",
			"weight": 105.8,
			"weakness": [
				"Ghost",
				"Dark",
				"Bug"
			],
			"number": "065",
			"height": 47,
			"collectibles_slug": "alakazam",
			"featured": "true",
			"slug": "alakazam",
			"name": "Alakazam",
			"ThumbnailAltText": "Alakazam",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
			"id": 65,
			"type": [
				"psychic"
			]
		},
		{
			"abilities": [
				"Inner Focus",
				"Synchronize"
			],
			"detailPageURL": "/us/pokedex/alakazam",
			"weight": 105.8,
			"weakness": [
				"Ghost",
				"Dark",
				"Bug"
			],
			"number": "065",
			"height": 59,
			"collectibles_slug": "alakazam",
			"featured": "true",
			"slug": "alakazam",
			"name": "Alakazam",
			"ThumbnailAltText": "Alakazam",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
			"id": 65,
			"type": [
				"psychic"
			]
		},
		{
			"abilities": [
				"Guts",
				"No Guard"
			],
			"detailPageURL": "/us/pokedex/machop",
			"weight": 43,
			"weakness": [
				"Psychic",
				"Flying",
				"Fairy"
			],
			"number": "066",
			"height": 31,
			"collectibles_slug": "machop",
			"featured": "true",
			"slug": "machop",
			"name": "Machop",
			"ThumbnailAltText": "Machop",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png",
			"id": 66,
			"type": [
				"fighting"
			]
		},
		{
			"abilities": [
				"Guts",
				"No Guard"
			],
			"detailPageURL": "/us/pokedex/machoke",
			"weight": 155.4,
			"weakness": [
				"Psychic",
				"Flying",
				"Fairy"
			],
			"number": "067",
			"height": 59,
			"collectibles_slug": "machoke",
			"featured": "true",
			"slug": "machoke",
			"name": "Machoke",
			"ThumbnailAltText": "Machoke",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png",
			"id": 67,
			"type": [
				"fighting"
			]
		},
		{
			"abilities": [
				"Guts",
				"No Guard"
			],
			"detailPageURL": "/us/pokedex/machamp",
			"weight": 9999,
			"weakness": [
				"Psychic",
				"Flying",
				"Fairy"
			],
			"number": "068",
			"height": 984,
			"collectibles_slug": "machamp",
			"featured": "true",
			"slug": "machamp",
			"name": "Machamp",
			"ThumbnailAltText": "Machamp",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png",
			"id": 68,
			"type": [
				"fighting"
			]
		},
		{
			"abilities": [
				"Guts",
				"No Guard"
			],
			"detailPageURL": "/us/pokedex/machamp",
			"weight": 286.6,
			"weakness": [
				"Psychic",
				"Flying",
				"Fairy"
			],
			"number": "068",
			"height": 63,
			"collectibles_slug": "machamp",
			"featured": "true",
			"slug": "machamp",
			"name": "Machamp",
			"ThumbnailAltText": "Machamp",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png",
			"id": 68,
			"type": [
				"fighting"
			]
		},
		{
			"abilities": [
				"Chlorophyll"
			],
			"detailPageURL": "/us/pokedex/bellsprout",
			"weight": 8.8,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Ice"
			],
			"number": "069",
			"height": 28,
			"collectibles_slug": "bellsprout",
			"featured": "true",
			"slug": "bellsprout",
			"name": "Bellsprout",
			"ThumbnailAltText": "Bellsprout",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png",
			"id": 69,
			"type": [
				"grass",
				"poison"
			]
		},
		{
			"abilities": [
				"Chlorophyll"
			],
			"detailPageURL": "/us/pokedex/weepinbell",
			"weight": 14.1,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Ice"
			],
			"number": "070",
			"height": 39,
			"collectibles_slug": "weepinbell",
			"featured": "true",
			"slug": "weepinbell",
			"name": "Weepinbell",
			"ThumbnailAltText": "Weepinbell",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png",
			"id": 70,
			"type": [
				"grass",
				"poison"
			]
		},
		{
			"abilities": [
				"Chlorophyll"
			],
			"detailPageURL": "/us/pokedex/victreebel",
			"weight": 34.2,
			"weakness": [
				"Fire",
				"Psychic",
				"Flying",
				"Ice"
			],
			"number": "071",
			"height": 67,
			"collectibles_slug": "victreebel",
			"featured": "true",
			"slug": "victreebel",
			"name": "Victreebel",
			"ThumbnailAltText": "Victreebel",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png",
			"id": 71,
			"type": [
				"grass",
				"poison"
			]
		},
		{
			"abilities": [
				"Clear Body",
				"Liquid Ooze"
			],
			"detailPageURL": "/us/pokedex/tentacool",
			"weight": 100.3,
			"weakness": [
				"Psychic",
				"Electric",
				"Ground"
			],
			"number": "072",
			"height": 35,
			"collectibles_slug": "tentacool",
			"featured": "true",
			"slug": "tentacool",
			"name": "Tentacool",
			"ThumbnailAltText": "Tentacool",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png",
			"id": 72,
			"type": [
				"water",
				"poison"
			]
		},
		{
			"abilities": [
				"Clear Body",
				"Liquid Ooze"
			],
			"detailPageURL": "/us/pokedex/tentacruel",
			"weight": 121.3,
			"weakness": [
				"Psychic",
				"Electric",
				"Ground"
			],
			"number": "073",
			"height": 63,
			"collectibles_slug": "tentacruel",
			"featured": "true",
			"slug": "tentacruel",
			"name": "Tentacruel",
			"ThumbnailAltText": "Tentacruel",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png",
			"id": 73,
			"type": [
				"water",
				"poison"
			]
		},
		{
			"abilities": [
				"Magnet Pull",
				"Sturdy"
			],
			"detailPageURL": "/us/pokedex/geodude",
			"weight": 44.8,
			"weakness": [
				"Water",
				"Grass",
				"Fighting",
				"Ground"
			],
			"number": "074",
			"height": 16,
			"collectibles_slug": "geodude",
			"featured": "true",
			"slug": "geodude",
			"name": "Geodude",
			"ThumbnailAltText": "Geodude",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png",
			"id": 74,
			"type": [
				"rock",
				"electric"
			]
		},
		{
			"abilities": [
				"Rock Head",
				"Sturdy"
			],
			"detailPageURL": "/us/pokedex/geodude",
			"weight": 44.1,
			"weakness": [
				"Steel",
				"Fighting",
				"Water",
				"Ice",
				"Grass",
				"Ground"
			],
			"number": "074",
			"height": 16,
			"collectibles_slug": "geodude",
			"featured": "true",
			"slug": "geodude",
			"name": "Geodude",
			"ThumbnailAltText": "Geodude",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png",
			"id": 74,
			"type": [
				"rock",
				"ground"
			]
		},
		{
			"abilities": [
				"Magnet Pull",
				"Sturdy"
			],
			"detailPageURL": "/us/pokedex/graveler",
			"weight": 242.5,
			"weakness": [
				"Water",
				"Grass",
				"Fighting",
				"Ground"
			],
			"number": "075",
			"height": 39,
			"collectibles_slug": "graveler",
			"featured": "true",
			"slug": "graveler",
			"name": "Graveler",
			"ThumbnailAltText": "Graveler",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png",
			"id": 75,
			"type": [
				"rock",
				"electric"
			]
		},
		{
			"abilities": [
				"Rock Head",
				"Sturdy"
			],
			"detailPageURL": "/us/pokedex/graveler",
			"weight": 231.5,
			"weakness": [
				"Steel",
				"Fighting",
				"Water",
				"Ice",
				"Grass",
				"Ground"
			],
			"number": "075",
			"height": 39,
			"collectibles_slug": "graveler",
			"featured": "true",
			"slug": "graveler",
			"name": "Graveler",
			"ThumbnailAltText": "Graveler",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png",
			"id": 75,
			"type": [
				"rock",
				"ground"
			]
		},
		{
			"abilities": [
				"Magnet Pull",
				"Sturdy"
			],
			"detailPageURL": "/us/pokedex/golem",
			"weight": 696.7,
			"weakness": [
				"Water",
				"Grass",
				"Fighting",
				"Ground"
			],
			"number": "076",
			"height": 67,
			"collectibles_slug": "golem",
			"featured": "true",
			"slug": "golem",
			"name": "Golem",
			"ThumbnailAltText": "Golem",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png",
			"id": 76,
			"type": [
				"rock",
				"electric"
			]
		},
		{
			"abilities": [
				"Rock Head",
				"Sturdy"
			],
			"detailPageURL": "/us/pokedex/golem",
			"weight": 661.4,
			"weakness": [
				"Steel",
				"Fighting",
				"Water",
				"Ice",
				"Grass",
				"Ground"
			],
			"number": "076",
			"height": 55,
			"collectibles_slug": "golem",
			"featured": "true",
			"slug": "golem",
			"name": "Golem",
			"ThumbnailAltText": "Golem",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png",
			"id": 76,
			"type": [
				"rock",
				"ground"
			]
		},
		{
			"abilities": [
				"Pastel Veil",
				"Run Away"
			],
			"detailPageURL": "/us/pokedex/ponyta",
			"weight": 52.9,
			"weakness": [
				"Ghost",
				"Dark",
				"Bug"
			],
			"number": "077",
			"height": 31,
			"collectibles_slug": "ponyta",
			"featured": "true",
			"slug": "ponyta",
			"name": "Ponyta",
			"ThumbnailAltText": "Ponyta",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png",
			"id": 77,
			"type": [
				"psychic"
			]
		},
		{
			"abilities": [
				"Flash Fire",
				"Run Away"
			],
			"detailPageURL": "/us/pokedex/ponyta",
			"weight": 66.1,
			"weakness": [
				"Water",
				"Ground",
				"Rock"
			],
			"number": "077",
			"height": 39,
			"collectibles_slug": "ponyta",
			"featured": "true",
			"slug": "ponyta",
			"name": "Ponyta",
			"ThumbnailAltText": "Ponyta",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png",
			"id": 77,
			"type": [
				"fire"
			]
		},
		{
			"abilities": [
				"Pastel Veil",
				"Run Away"
			],
			"detailPageURL": "/us/pokedex/rapidash",
			"weight": 176.4,
			"weakness": [
				"Ghost",
				"Steel",
				"Poison"
			],
			"number": "078",
			"height": 67,
			"collectibles_slug": "rapidash",
			"featured": "true",
			"slug": "rapidash",
			"name": "Rapidash",
			"ThumbnailAltText": "Rapidash",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png",
			"id": 78,
			"type": [
				"psychic",
				"fairy"
			]
		},
		{
			"abilities": [
				"Flash Fire",
				"Run Away"
			],
			"detailPageURL": "/us/pokedex/rapidash",
			"weight": 209.4,
			"weakness": [
				"Water",
				"Ground",
				"Rock"
			],
			"number": "078",
			"height": 67,
			"collectibles_slug": "rapidash",
			"featured": "true",
			"slug": "rapidash",
			"name": "Rapidash",
			"ThumbnailAltText": "Rapidash",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png",
			"id": 78,
			"type": [
				"fire"
			]
		},
		{
			"abilities": [
				"Gluttony",
				"Own Tempo"
			],
			"detailPageURL": "/us/pokedex/slowpoke",
			"weight": 79.4,
			"weakness": [
				"Ghost",
				"Dark",
				"Bug"
			],
			"number": "079",
			"height": 47,
			"collectibles_slug": "slowpoke",
			"featured": "true",
			"slug": "slowpoke",
			"name": "Slowpoke",
			"ThumbnailAltText": "Slowpoke",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png",
			"id": 79,
			"type": [
				"psychic"
			]
		},
		{
			"abilities": [
				"Oblivious",
				"Own Tempo"
			],
			"detailPageURL": "/us/pokedex/slowpoke",
			"weight": 79.4,
			"weakness": [
				"Ghost",
				"Dark",
				"Grass",
				"Electric",
				"Bug"
			],
			"number": "079",
			"height": 47,
			"collectibles_slug": "slowpoke",
			"featured": "true",
			"slug": "slowpoke",
			"name": "Slowpoke",
			"ThumbnailAltText": "Slowpoke",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png",
			"id": 79,
			"type": [
				"water",
				"psychic"
			]
		},
		{
			"abilities": [
				"Own Tempo",
				"Quick Draw"
			],
			"detailPageURL": "/us/pokedex/slowbro",
			"weight": 155.4,
			"weakness": [
				"Ghost",
				"Dark",
				"Ground"
			],
			"number": "080",
			"height": 63,
			"collectibles_slug": "slowbro",
			"featured": "true",
			"slug": "slowbro",
			"name": "Slowbro",
			"ThumbnailAltText": "Slowbro",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png",
			"id": 80,
			"type": [
				"poison",
				"psychic"
			]
		},
		{
			"abilities": [
				"Shell Armor"
			],
			"detailPageURL": "/us/pokedex/slowbro",
			"weight": 264.6,
			"weakness": [
				"Ghost",
				"Dark",
				"Grass",
				"Electric",
				"Bug"
			],
			"number": "080",
			"height": 79,
			"collectibles_slug": "slowbro",
			"featured": "true",
			"slug": "slowbro",
			"name": "Slowbro",
			"ThumbnailAltText": "Slowbro",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png",
			"id": 80,
			"type": [
				"water",
				"psychic"
			]
		},
		{
			"abilities": [
				"Oblivious",
				"Own Tempo"
			],
			"detailPageURL": "/us/pokedex/slowbro",
			"weight": 173.1,
			"weakness": [
				"Ghost",
				"Dark",
				"Grass",
				"Electric",
				"Bug"
			],
			"number": "080",
			"height": 63,
			"collectibles_slug": "slowbro",
			"featured": "true",
			"slug": "slowbro",
			"name": "Slowbro",
			"ThumbnailAltText": "Slowbro",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png",
			"id": 80,
			"type": [
				"water",
				"psychic"
			]
		},
		{
			"abilities": [
				"Magnet Pull",
				"Sturdy"
			],
			"detailPageURL": "/us/pokedex/magnemite",
			"weight": 13.2,
			"weakness": [
				"Fire",
				"Fighting",
				"Ground"
			],
			"number": "081",
			"height": 12,
			"collectibles_slug": "magnemite",
			"featured": "true",
			"slug": "magnemite",
			"name": "Magnemite",
			"ThumbnailAltText": "Magnemite",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png",
			"id": 81,
			"type": [
				"electric",
				"steel"
			]
		},
		{
			"abilities": [
				"Magnet Pull",
				"Sturdy"
			],
			"detailPageURL": "/us/pokedex/magneton",
			"weight": 132.3,
			"weakness": [
				"Fire",
				"Fighting",
				"Ground"
			],
			"number": "082",
			"height": 39,
			"collectibles_slug": "magneton",
			"featured": "true",
			"slug": "magneton",
			"name": "Magneton",
			"ThumbnailAltText": "Magneton",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png",
			"id": 82,
			"type": [
				"electric",
				"steel"
			]
		},
		{
			"abilities": [
				"Steadfast"
			],
			"detailPageURL": "/us/pokedex/farfetchd",
			"weight": 92.6,
			"weakness": [
				"Psychic",
				"Flying",
				"Fairy"
			],
			"number": "083",
			"height": 31,
			"collectibles_slug": "farfetchd",
			"featured": "true",
			"slug": "farfetchd",
			"name": "Farfetch’d",
			"ThumbnailAltText": "Farfetch’d",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png",
			"id": 83,
			"type": [
				"fighting"
			]
		},
		{
			"abilities": [
				"Inner Focus",
				"Keen Eye"
			],
			"detailPageURL": "/us/pokedex/farfetchd",
			"weight": 33.1,
			"weakness": [
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "083",
			"height": 31,
			"collectibles_slug": "farfetchd",
			"featured": "true",
			"slug": "farfetchd",
			"name": "Farfetch’d",
			"ThumbnailAltText": "Farfetch’d",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png",
			"id": 83,
			"type": [
				"normal",
				"flying"
			]
		},
		{
			"abilities": [
				"Early Bird",
				"Run Away"
			],
			"detailPageURL": "/us/pokedex/doduo",
			"weight": 86.4,
			"weakness": [
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "084",
			"height": 55,
			"collectibles_slug": "doduo",
			"featured": "true",
			"slug": "doduo",
			"name": "Doduo",
			"ThumbnailAltText": "Doduo",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png",
			"id": 84,
			"type": [
				"normal",
				"flying"
			]
		},
		{
			"abilities": [
				"Early Bird",
				"Run Away"
			],
			"detailPageURL": "/us/pokedex/dodrio",
			"weight": 187.8,
			"weakness": [
				"Electric",
				"Ice",
				"Rock"
			],
			"number": "085",
			"height": 71,
			"collectibles_slug": "dodrio",
			"featured": "true",
			"slug": "dodrio",
			"name": "Dodrio",
			"ThumbnailAltText": "Dodrio",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png",
			"id": 85,
			"type": [
				"normal",
				"flying"
			]
		},
		{
			"abilities": [
				"Hydration",
				"Thick Fat"
			],
			"detailPageURL": "/us/pokedex/seel",
			"weight": 198.4,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "086",
			"height": 43,
			"collectibles_slug": "seel",
			"featured": "true",
			"slug": "seel",
			"name": "Seel",
			"ThumbnailAltText": "Seel",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png",
			"id": 86,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Hydration",
				"Thick Fat"
			],
			"detailPageURL": "/us/pokedex/dewgong",
			"weight": 264.6,
			"weakness": [
				"Grass",
				"Electric",
				"Fighting",
				"Rock"
			],
			"number": "087",
			"height": 67,
			"collectibles_slug": "dewgong",
			"featured": "true",
			"slug": "dewgong",
			"name": "Dewgong",
			"ThumbnailAltText": "Dewgong",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png",
			"id": 87,
			"type": [
				"water",
				"ice"
			]
		},
		{
			"abilities": [
				"Gluttony",
				"Poison Touch"
			],
			"detailPageURL": "/us/pokedex/grimer",
			"weight": 92.6,
			"weakness": [
				"Ground"
			],
			"number": "088",
			"height": 28,
			"collectibles_slug": "grimer",
			"featured": "true",
			"slug": "grimer",
			"name": "Grimer",
			"ThumbnailAltText": "Grimer",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png",
			"id": 88,
			"type": [
				"poison",
				"dark"
			]
		},
		{
			"abilities": [
				"Stench",
				"Sticky Hold"
			],
			"detailPageURL": "/us/pokedex/grimer",
			"weight": 66.1,
			"weakness": [
				"Psychic",
				"Ground"
			],
			"number": "088",
			"height": 35,
			"collectibles_slug": "grimer",
			"featured": "true",
			"slug": "grimer",
			"name": "Grimer",
			"ThumbnailAltText": "Grimer",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png",
			"id": 88,
			"type": [
				"poison"
			]
		},
		{
			"abilities": [
				"Gluttony",
				"Poison Touch"
			],
			"detailPageURL": "/us/pokedex/muk",
			"weight": 114.6,
			"weakness": [
				"Ground"
			],
			"number": "089",
			"height": 39,
			"collectibles_slug": "muk",
			"featured": "true",
			"slug": "muk",
			"name": "Muk",
			"ThumbnailAltText": "Muk",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png",
			"id": 89,
			"type": [
				"poison",
				"dark"
			]
		},
		{
			"abilities": [
				"Stench",
				"Sticky Hold"
			],
			"detailPageURL": "/us/pokedex/muk",
			"weight": 66.1,
			"weakness": [
				"Psychic",
				"Ground"
			],
			"number": "089",
			"height": 47,
			"collectibles_slug": "muk",
			"featured": "true",
			"slug": "muk",
			"name": "Muk",
			"ThumbnailAltText": "Muk",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png",
			"id": 89,
			"type": [
				"poison"
			]
		},
		{
			"abilities": [
				"Shell Armor",
				"Skill Link"
			],
			"detailPageURL": "/us/pokedex/shellder",
			"weight": 8.8,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "090",
			"height": 12,
			"collectibles_slug": "shellder",
			"featured": "true",
			"slug": "shellder",
			"name": "Shellder",
			"ThumbnailAltText": "Shellder",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png",
			"id": 90,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Shell Armor",
				"Skill Link"
			],
			"detailPageURL": "/us/pokedex/cloyster",
			"weight": 292.1,
			"weakness": [
				"Grass",
				"Electric",
				"Fighting",
				"Rock"
			],
			"number": "091",
			"height": 59,
			"collectibles_slug": "cloyster",
			"featured": "true",
			"slug": "cloyster",
			"name": "Cloyster",
			"ThumbnailAltText": "Cloyster",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png",
			"id": 91,
			"type": [
				"water",
				"ice"
			]
		},
		{
			"abilities": [
				"Levitate"
			],
			"detailPageURL": "/us/pokedex/gastly",
			"weight": 0.2,
			"weakness": [
				"Ghost",
				"Dark",
				"Psychic",
				"Ground"
			],
			"number": "092",
			"height": 51,
			"collectibles_slug": "gastly",
			"featured": "true",
			"slug": "gastly",
			"name": "Gastly",
			"ThumbnailAltText": "Gastly",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png",
			"id": 92,
			"type": [
				"ghost",
				"poison"
			]
		},
		{
			"abilities": [
				"Levitate"
			],
			"detailPageURL": "/us/pokedex/haunter",
			"weight": 0.2,
			"weakness": [
				"Ghost",
				"Dark",
				"Psychic",
				"Ground"
			],
			"number": "093",
			"height": 63,
			"collectibles_slug": "haunter",
			"featured": "true",
			"slug": "haunter",
			"name": "Haunter",
			"ThumbnailAltText": "Haunter",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png",
			"id": 93,
			"type": [
				"ghost",
				"poison"
			]
		},
		{
			"abilities": [
				"Cursed Body"
			],
			"detailPageURL": "/us/pokedex/gengar",
			"weight": 9999,
			"weakness": [
				"Ghost",
				"Dark",
				"Psychic",
				"Ground"
			],
			"number": "094",
			"height": 787,
			"collectibles_slug": "gengar",
			"featured": "true",
			"slug": "gengar",
			"name": "Gengar",
			"ThumbnailAltText": "Gengar",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
			"id": 94,
			"type": [
				"ghost",
				"poison"
			]
		},
		{
			"abilities": [
				"Shadow Tag"
			],
			"detailPageURL": "/us/pokedex/gengar",
			"weight": 89.3,
			"weakness": [
				"Ghost",
				"Dark",
				"Psychic",
				"Ground"
			],
			"number": "094",
			"height": 55,
			"collectibles_slug": "gengar",
			"featured": "true",
			"slug": "gengar",
			"name": "Gengar",
			"ThumbnailAltText": "Gengar",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
			"id": 94,
			"type": [
				"ghost",
				"poison"
			]
		},
		{
			"abilities": [
				"Cursed Body"
			],
			"detailPageURL": "/us/pokedex/gengar",
			"weight": 89.3,
			"weakness": [
				"Ghost",
				"Dark",
				"Psychic",
				"Ground"
			],
			"number": "094",
			"height": 59,
			"collectibles_slug": "gengar",
			"featured": "true",
			"slug": "gengar",
			"name": "Gengar",
			"ThumbnailAltText": "Gengar",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
			"id": 94,
			"type": [
				"ghost",
				"poison"
			]
		},
		{
			"abilities": [
				"Rock Head",
				"Sturdy"
			],
			"detailPageURL": "/us/pokedex/onix",
			"weight": 463,
			"weakness": [
				"Steel",
				"Fighting",
				"Water",
				"Ice",
				"Grass",
				"Ground"
			],
			"number": "095",
			"height": 346,
			"collectibles_slug": "onix",
			"featured": "true",
			"slug": "onix",
			"name": "Onix",
			"ThumbnailAltText": "Onix",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png",
			"id": 95,
			"type": [
				"rock",
				"ground"
			]
		},
		{
			"abilities": [
				"Forewarn",
				"Insomnia"
			],
			"detailPageURL": "/us/pokedex/drowzee",
			"weight": 71.4,
			"weakness": [
				"Ghost",
				"Dark",
				"Bug"
			],
			"number": "096",
			"height": 39,
			"collectibles_slug": "drowzee",
			"featured": "true",
			"slug": "drowzee",
			"name": "Drowzee",
			"ThumbnailAltText": "Drowzee",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png",
			"id": 96,
			"type": [
				"psychic"
			]
		},
		{
			"abilities": [
				"Forewarn",
				"Insomnia"
			],
			"detailPageURL": "/us/pokedex/hypno",
			"weight": 166.7,
			"weakness": [
				"Ghost",
				"Dark",
				"Bug"
			],
			"number": "097",
			"height": 63,
			"collectibles_slug": "hypno",
			"featured": "true",
			"slug": "hypno",
			"name": "Hypno",
			"ThumbnailAltText": "Hypno",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png",
			"id": 97,
			"type": [
				"psychic"
			]
		},
		{
			"abilities": [
				"Hyper Cutter",
				"Shell Armor"
			],
			"detailPageURL": "/us/pokedex/krabby",
			"weight": 14.3,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "098",
			"height": 16,
			"collectibles_slug": "krabby",
			"featured": "true",
			"slug": "krabby",
			"name": "Krabby",
			"ThumbnailAltText": "Krabby",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png",
			"id": 98,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Hyper Cutter",
				"Shell Armor"
			],
			"detailPageURL": "/us/pokedex/kingler",
			"weight": 9999,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "099",
			"height": 748,
			"collectibles_slug": "kingler",
			"featured": "true",
			"slug": "kingler",
			"name": "Kingler",
			"ThumbnailAltText": "Kingler",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png",
			"id": 99,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Hyper Cutter",
				"Shell Armor"
			],
			"detailPageURL": "/us/pokedex/kingler",
			"weight": 132.3,
			"weakness": [
				"Grass",
				"Electric"
			],
			"number": "099",
			"height": 51,
			"collectibles_slug": "kingler",
			"featured": "true",
			"slug": "kingler",
			"name": "Kingler",
			"ThumbnailAltText": "Kingler",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png",
			"id": 99,
			"type": [
				"water"
			]
		},
		{
			"abilities": [
				"Soundproof",
				"Static"
			],
			"detailPageURL": "/us/pokedex/voltorb",
			"weight": 22.9,
			"weakness": [
				"Ground"
			],
			"number": "100",
			"height": 20,
			"collectibles_slug": "voltorb",
			"featured": "true",
			"slug": "voltorb",
			"name": "Voltorb",
			"ThumbnailAltText": "Voltorb",
			"ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png",
			"id": 100,
			"type": [
				"electric"
			]
		}
  ]
`);

class Pokemon {
  constructor(id, name, img, type, weight, height, abilities, weakness) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.weight = weight;
    this.height = height;
    this.abilities = abilities;
    this.weakness = weakness;
  }
}

function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {

    let current = array[i];

    let j = i - 1;
    while (j > -1 && current.name < array[j].name) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

//La página web debe:
//Mostrar una lista en tarjetas de todos los pokemones en el json. Las tarjetas deben mostrar el nombre y tipo de cada Pokémon (tipo agua, tipo fuego, tipo venenoso, etc.)
//Permitir que, al hacer click sobre la tarjeta de un pokemon, se despliegue más información, como el peso, sus movimientos (ataques), etc. De preferencia empleando un modal.
//El sitio web debe tener un buscador de pokemones, donde puedas filtrar pokemones por nombre.

function crearArray() {
  for (i = 0; i < poke_file.length; i++) {
    let temp = new Pokemon(
      poke_file[i].id,
      poke_file[i].name,
      poke_file[i].ThumbnailImage,
      poke_file[i].type,
      poke_file[i].weight,
      poke_file[i].height,
      poke_file[i].abilities,
      poke_file[i].weakness
    );
    pokemonArray.push(temp);
  }

  pokemonArray = insertionSort(pokemonArray);
}

function rellenarTarjetas() {
  document.getElementById("app").innerHTML = "";

  pokemonArray.forEach((element) => {
    document.getElementById("app").insertAdjacentHTML(
      "beforeend",
      `
        <div class="tarjeta">
        <p class="titulo">${element.name} </p>
        <div class="divImg"> <img class="imgTarjeta" src="${element.img}"></div>
        <p class="typePoke"> <span class="bold">Type:</span> ${element.type} </p>
        <div class="surprise">
    <div class="tarjetaBack">
      <div>
      <h3>Características:</h4>
      <ul>
        <li class="lista"><span class="bold">Weight: </span>${element.weight}</li>
        <li class="lista"><span class="bold">Height:</span> ${element.height}</li>
        <li class="lista"><span class="bold">Abilities:</span> <br>${element.abilities}</li>
		<li class="lista"><span class="bold">Weakness:</span><br>${element.weakness}</li>
      </ul>
	  </div>
    </div>
  </div>
        </div>
        `
    );
  });

  {
  }
}


//Filtro de las tarjetas

function rellenarTarjetasBusqueda() {
  document.getElementById("app").innerHTML = ""; 

  let datos = document.getElementById("inputData").value; 

  if (datos == "") {
    rellenarTarjetas();
  } else {
    
    //Para buscar que coindican los datos de pokemones 
    let temp_array = [];

// El dato debe ser exacto en letras
    pokemonArray.forEach((element) => {
      if (
        element.name.slice(0, datos.length).toLowerCase() == datos.toLowerCase()
      ) {
        temp_array.push(element);
      }
    });

    
    temp_array.forEach((element) => {
      document.getElementById("app").insertAdjacentHTML(
        "beforeend",
        `
        <div class="tarjeta">
        <p class="titulo">${element.name} </p>
        <div class="divImg"> <img class="imgTarjeta" src="${element.img}"></div>
        <p class="typePoke"><span class="bold">Type:</span> ${element.type} </p>
		<div class="surprise">
    <div class="tarjetaBack">
      <div>
      <h3>Características:</h4>
      <ul>
	  <li class="lista"><span class="bold">Weight: </span>${element.weight}</li>
	  <li class="lista"><span class="bold">Height:</span> ${element.height}</li>
	  <li class="lista"><span class="bold">Abilities:</span> <br>${element.abilities}</li>
	  <li class="lista"><span class="bold">Weakness:</span><br>${element.weakness}</li>
      </ul>
	  </div>
    </div>
  </div>
		</div>
        `
      );
    });
  }
}

//Si el input no se encuentra exacto
function inputBuscador() {
  let input = document.getElementById("inputData");
  if (input.value == "") {
    input.value = "Buscar"
    rellenarTarjetas();
  } else {

  }
}