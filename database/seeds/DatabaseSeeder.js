'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const City = use('App/Models/City')
const Country = use('App/Models/Country')
const Hotel = use('App/Models/Hotel')
const User = use('App/Models/User');

class DatabaseSeeder {
  async run () {
     const Countries = [
      {
        value: 'belarus',
        text: 'Беларусь'
      },
      {
        value: 'russia',
        text: 'Россия'
      }
    ]

    const Cities = [
      {
        value: 'hrodno',
        text: 'Гродно',
        id_country: 1
      },
      {
        value: 'minsk',
        text: 'Минск',
        id_country: 1
      },
      {
        value: 'moscow',
        text: 'Москва',
        id_country: 2
      }
    ]

    const Hotels = [
      {
        title: 'Отель Семашко',
        description: 'Беларусь',
        rating: 3,
        url_image: 'https://s-ec.bstatic.com/xdata/images/hotel/square200/76761631.jpg?k=9ebebcbbdea0dc43f834913bcf6f0faf5e82769b2bbb66639317006ce11ba9af&o=',
        id_city: 1,
        cost: 23
      },
      {
        title: 'Отель Славия',
        description: 'Беларусь',
        rating: 3,
        url_image: 'https://t-ec.bstatic.com/xdata/images/hotel/square200/57911594.jpg?k=9de793646a62404980f3261ec9504212566b934c580f659a58ce89e00274ae5f&o=',
        id_city: 1,
        cost: 21
      },
      {
        title: 'Кронон Парк',
        description: 'Беларусь',
        rating: 4,
        url_image: 'https://s-ec.bstatic.com/xdata/images/hotel/square200/43148230.jpg?k=c15b840579e253177f70c7be34c1158f5a1f1a73a3b735e73253ca74deb76318&o=',
        id_city: 1,
        cost: 30
      },
      {
        title: 'Гостиница Орбита',
        description: 'Гостиница «Орбита» расположена в Минске, в 50 м от станции метро «Пушкинская». В отеле работают кафе-пиццерия, бар и стриптиз-клуб. Гости могут воспользоваться бесплатным Wi-Fi и бесплатной парковкой....',
        rating: 3,
        url_image: 'https://t-ec.bstatic.com/xdata/images/hotel/square200/65063972.jpg?k=82f451753f53a14ef1a3405dfded53eab2dbf81bc54d4d40f7dee3fd096f8cb1&o=',
        id_city: 2,
        cost: 25
      },
      {
        title: 'Гостиница Беларусь',
        description: 'Гостиница «Беларусь» с рестораном расположена в Минске, в 5 минутах ходьбы от церкви Святой Равноапостольной Марии Магдалины и реки Свислочь.',
        rating: 3,
        url_image: 'https://s-ec.bstatic.com/xdata/images/hotel/square200/34129989.jpg?k=973fde014039a0581647987052787cf866b64240ffea05b7c0f948788c9d91b3&o=',
        id_city: 2,
        cost: 24
      },
      {
        title: 'Гостиница «Планета»',
        description: 'Этот отель находится в Минске, в 10 минутах ходьбы от станции метро Фрунзенская. К услугам гостей турецкая и финская бани, номера с мини-баром, бесплатная частная парковка и бассей',
        rating: 4,
        url_image: 'https://s-ec.bstatic.com/xdata/images/hotel/square200/57491964.jpg?k=49330ca63ccdd50c14fb254c9cc2ecd4f66982737f294dad2091178275d30588&o=',
        id_city: 2,
        cost: 30
      },
      {
        title: 'Crowne Plaza Moscow World Trade Centre',
        description: 'Отель Crowne Plaza Moscow World Trade Centre расположен в Москве, всего в 10 минутах ходьбы от выставочного центра «Экспоцентр». К услугам гостей бесплатный Wi-Fi и фитнес-центр.',
        rating: 5,
        url_image: 'https://s-ec.bstatic.com/xdata/images/hotel/square200/60324877.jpg?k=2a3f8bdb5e5686545cf6c403a215993990a19e772554b36a25ba4c9b1105a272&o=',
        id_city: 3,
        cost: 45
      }
    ]

    const Users = [
      {
        username: 'symb',
        email: 'symblight@gmail.com',
        password: '12345678'
      },
      {
        username: 'air',
        email: 'airt@gmail.com',
        password: '12345678'
      },
      {
        username: 'vaider',
        email: 'vaider@gmail.com',
        password: '12345678'
      },
    ]

    await Promise.all(
      Countries.map(
        async (country) => {
          await Country.create({
            value: country.value,
            text: country.text
          })
        })
    )

    console.log('Countries add!')

    await Promise.all(
      Cities.map(
        async (city) => {
          await City.create({
            value: city.value,
            text: city.text,
            id_country: city.id_country
          })
      })
    )
    console.log('Cities add!')

    await Promise.all(
      Hotels.map(
        async (hotel) => {
          await Hotel.create({
            title: hotel.title,
            description: hotel.description,
            url_image: hotel.url_image,
            rating: hotel.rating,
            id_city: hotel.id_city,
            cost: hotel.cost
        })
      })
    )
    console.log('Hotels add!')

    await Promise.all(
      Users.map(
        async (user) => {
          await User.create({
            username: user.username,
            email: user.email,
            password: user.password,
            
        })
      })
    )
    console.log('Users add!')
  }
}

module.exports = DatabaseSeeder

