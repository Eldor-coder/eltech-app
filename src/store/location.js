const locations = {
    state: () => ({
        locations  : [
            {
                id : '1',
                name : '8 Chapanata ko`chasi, Тошкент',
                location : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5060431484785!2d69.21896521479293!3d41.27608981085141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7faf8a3bb9%3A0xf8d31a5552257074!2sALTECH.UZ!5e0!3m2!1sru!2s!4v1663966725293!5m2!1sru!2s" width="300" height="310" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            {
                id : '2',
                name : '87QC+FPV, Kichik Xalqa Yo`li, Тошкент',
                location : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626577135859!2d69.26962081479518!3d41.33873280697402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2z0KLQvtGA0LPQvtCy0YvQtSDQoNGP0LTRiyAi0JzQsNC70LjQutCwIg!5e0!3m2!1sru!2s!4v1663965687479!5m2!1sru!2s" width="300" height="310" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            {
                id : '3',
                name : '52 Bunyodkor shoh ko`chasi, Тошкент 100097',
                location : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.4548358429424!2d69.20298341479298!3d41.27720451078254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3cca28d7e7%3A0x8aa381cdc52af12a!2sIntegro%20Savdo%20Markazi!5e0!3m2!1sru!2s!4v1663963439166!5m2!1sru!2s" width="300" height="310" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            {
                id : '4',
                name : '"TEXNOMART" на Фархадском ул. Фархадская, ТК "Фархадский", 1 блок, 2 магазин ',
                location : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.122744061588!2d69.18875601479328!3d41.28443301033522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8976f46aaba3%3A0x3a75c82512ded2f2!2zIlRFWE5PTUFSVCIg0L3QsCDQpNCw0YDRhdCw0LTRgdC60L7QvA!5e0!3m2!1sru!2s!4v1663965313614!5m2!1sru!2s" width="300" height="310" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            {
                id : '5',
                name : '142, 2 Muqimiy ko`chasi, Тошкент 100115',
                location : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.7189046881895!2d69.21973291479361!3d41.293221809791504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6274e0bfb969%3A0x4bef00e1fc8c367e!2z0JjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvSBhc2F4aXkudXo!5e0!3m2!1sru!2s!4v1663965554182!5m2!1sru!2s" width="300" height="310" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            {
                id : '6',
                name : 'Elmakon Sergeli ',
                location : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.7031154785436!2d69.21594121479121!3d41.228239813809985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61d117adc0dd%3A0xc7ca58e5569ce8ba!2zRWxtYWtvbiBTZXJnZWxpICrQotC10YXQvdC40LrQsCDQsiDRgNCw0YHRgdGA0L7Rh9C60YMq!5e0!3m2!1sru!2s!4v1663966405953!5m2!1sru!2s" width="300" height="310" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
            {
                id : '7',
                name : '52 Bunyodkor shoh ko`chasi, Тошкент 100097, Узбекистан',
                location : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5360172938463!2d69.20203381479296!3d41.27543731089175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8baf8870f5f1%3A0x8a294e0b7900118e!2sidea%20Chilonzor!5e0!3m2!1sru!2sus!4v1663966613807!5m2!1sru!2sus" width="300" height="310" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            },
        ]
    }),
    getters : {
        getLocations(state){
            return state.locations
        },
        

    },
    mutations : {

    },
    actions : {

    }
}

export default locations