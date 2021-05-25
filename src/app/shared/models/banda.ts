import {Injectable} from '@angular/core';

export interface Banda{
  id: string;
  nombre: String;
  descripcion: string;
  generos: string;
  actividad: string;
  url_imagen: string;
  canciones: Array<Cancion>;
}

export interface Cancion{
    id: string;
    nombre: string;
    url_video: string;
    url_cancion:string;
}

const BandaItems = [
    {
        id: "1",
        nombre: "The Rolling Stones",
        descripcion: "The Rolling Stones es una banda británica de rock originaria de Londres. La banda se formó en abril de 19622​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.",
        canciones: [
            {
                id: '1',
                nombre: 'Satisfaction',
                url_video: 'https://www.youtube.com/watch?v=nrIPxlFzDi0',
            },
            {
                id: '2',
                nombre: 'Paint It, Black',
                url_video: 'https://www.youtube.com/watch?v=O4irXQhgMqg',
            },
        ]
    },
    {
        id: "2",
        nombre: "Led Zeppelin",
        descripcion: "Led Zeppelin fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy).",
        canciones: [
            {
                id: '1',
                nombre: 'Immigrant Song',
                url_video: 'https://www.youtube.com/watch?v=RlNhD0oS5pk&list=PLWRhxvQASiJ44c2kD_5OqhmBQBqjw-Uao',
            },
            {
                id: '2',
                nombre: 'Whole Lotta Love',
                url_video: 'https://www.youtube.com/watch?v=HQmmM_qwG4k&list=PLWRhxvQASiJ44c2kD_5OqhmBQBqjw-Uao&index=2',
            },
        ]
    },
    {
        id: "3",
        nombre: "Queen",
        descripcion: "Queen es una banda británica de rock formada en 1970 en Londres por el cantante y pianista Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.",
        canciones: [
            {
                id: '1',
                nombre: 'We Are The Champions',
                url_video: 'https://www.youtube.com/watch?v=KXw8CRapg7k',
            },
            {
                id: '2',
                nombre: "Don't Stop Me Now",
                url_video: 'https://www.youtube.com/watch?v=HgzGwKwLmgM',
            },
        ]
    },
    {
        id: "4",
        nombre: "Pink Floyd",
        descripcion: "Pink Floyd fue una banda de rock británica, fundada en Londres en 1965. Es considerada un ícono cultural del siglo XX y una de las bandas más influyentes y aclamadas en la historia de la música, obtuvieron gran popularidad gracias a su música psicodélica que evolucionó hacia el rock progresivo y rock sinfónico con el paso del tiempo. Inicialmente el grupo estaba formado por el batería Nick Mason, el teclista y vocalista Richard Wright, el bajista y vocalista Roger Waters y el guitarrista y vocalista principal Syd Barrett, quien se convirtió en el primer líder de la banda.",
        canciones: [
            {
                id: '1',
                nombre: 'High Hopes',
                url_video: 'https://www.youtube.com/watch?v=7jMlFXouPk8',
            },
        ]
    },
    {
        id: "5",
        nombre: "Deep Purple",
        descripcion: "Deep Purple es una banda británica de hard rock formada en 1968 en Hertford, Reino Unido. Está considerada como una de las pioneras de dicho subgénero, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath. Su música ha incorporado elementos del rock progresivo, rock sinfónico, rock psicodélico, blues rock, funk rock, britpop y la música clásica. Deep Purple ha vendido más de 150 millones de discos en todo el mundo.",
        canciones: [
            {
                id: '1',
                nombre: 'Perfect Strangers',
                url_video: 'https://www.youtube.com/watch?v=gZ_kez7WVUU',
            },
        ]
    },
    {
        id: "6",
        nombre: "AC/DC",
        descripcion: "AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm y Angus Young. Sus álbumes se han vendido en un total estimado de 200 millones de copias,3​4​ embarcándose en giras multitudinarias por todo el mundo, y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.",
        canciones: [
            {
                id: '1',
                nombre: 'Thunderstruck',
                url_video: 'https://www.youtube.com/watch?v=v2AC41dglnM',
            },
        ]
    },
    {
        id: "7",
        nombre: "The Ramones",
        descripcion: "Ramones fue una banda de punk formada en Forest Hills, en el distrito de Queens (Nueva York, Estados Unidos) en 1974, y disuelta veintidós años más tarde, en 1996. Pioneros y líderes del naciente punk,1​2​ cimentaron las bases de este género musical con composiciones simples, minimalistas, repetitivas y letras muy simples o incluso sin sentido, en clara oposición a la pomposidad y la fastuosidad de las bandas que triunfaban en el mercado de los años 1970.",
        canciones: [
            {
                id: '1',
                nombre: 'Poison Heart',
                url_video: 'https://www.youtube.com/watch?v=OfIfzVf8t6E',
            },
        ]
    },
    {
        id: "8",
        nombre: "Kiss",
        descripcion: "Kiss (estilizado KISS) es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.2​ Conocidos por su maquillaje facial y sus extravagantes trajes, el grupo se dio a conocer al público a mediados de los años 1970 gracias a sus actuaciones en directo, en las que incluían pirotecnia, llamaradas, cañones, baterías elevadoras, guitarras con humo y sangre falsa.",
        canciones: [
            {
                id: '1',
                nombre: 'Forever',
                url_video: 'https://www.youtube.com/watch?v=d_RKO5ozLVo',
            },
        ]
    },
];

@Injectable()
export class BandaItem {
  public get() {
    return BandaItems;
  }
}
