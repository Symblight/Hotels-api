'use strict'

const Hotel = use('App/Models/Hotel')
const Database = use('Database')

class HotelController {
    async index ({response}) {
        let hotels=  await Database
        .select('*', 'hotels.id')
        .table('hotels')
        .innerJoin('cities', 'cities.id', 'hotels.id_city')

        return response.json(hotels)
    }

    async show ({params, response}) {
        return await Database
        .select('*', 'hotels.id')
        .table('hotels')
        .innerJoin('cities', 'hotels.id_city', 'cities.id')
        .where('hotels.id', params.id)
        .first()
    }

    async store ({request, response}) {
        const hotelInfo = request.only(['title', 'description', 'rating', 'url_image', 'id_city', 'cost'])

        const hotel = new Hotel()
        hotel.title = hotelInfo.title
        hotel.description = hotelInfo.description
        hotel.rating = hotelInfo.rating
        hotel.url_image = hotelInfo.url_image
        hotel.id_city = hotelInfo.id_city
        hotel.cost = hotelInfo.cost

        await hotel.save()

        return response.status(201).json(hotel)
    }

    async update ({params, request, response}) {
        const hotelInfo = request.only(['title', 'description', 'rating', 'url_image', 'id_city', 'cost'])

        const hotel = await Hotel.find(params.id)
        if (!hotel) {
          return response.status(404).json({data: 'Resource not found'})
        }
        hotel.title = hotelInfo.title
        hotel.description = hotelInfo.description
        hotel.rating = hotelInfo.rating
        hotel.url_image = hotelInfo.url_image
        hotel.id_city = hotelInfo.id_city
        hotel.cost = hotelInfo.cost

        await hotel.save()

        return response.status(200).json(hotel)
    }

      async delete ({params, response}) {
        const hotel = await Hotel.find(params.id)
        if (!hotel) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await hotel.delete()

        return response.status(204).json(null)
    }

    async showByFilters ({request, response}) {
        const filterInfo = request.only(['id_country', 'id_city', 'cost', 'rating'])

        const buildConditions = (filters) => {
            let conditions = [];

            if (typeof filters.id_country !=  'undefined') {
                conditions.push(`id_country = ${filters.id_country}`);
            }
    
            if(typeof filters.id_city !=  'undefined') {
                conditions.push(`id_city = ${filters.id_city}`);
            }

            if(typeof filters.rating !=  'undefined') {
                conditions.push(`rating <= ${filters.rating}`);
            }

            if(typeof filters.cost.from !=  'undefined' && typeof filters.cost.before !=  'undefined') {
                conditions.push(`cost BETWEEN ${filters.cost.from} AND ${filters.cost.before}`);
            }
            
            return {
                where: conditions.length ?
                         conditions.join(' AND ') : '1'
              };
        }

        const sqlWhere = buildConditions(filterInfo).where

        const hotels =  await Database
        .select('*', 'hotels.id')
        .table('hotels')
        .innerJoin('cities', 'hotels.id_city', 'cities.id')
        .whereRaw(sqlWhere)
        
        return response.status(200).json(hotels)
    }

    async showBySearch ({params, request, response }) {
        const search = params.words

        return await Database
        .select('*')
        .from('hotels')
        .whereRaw(`lower(title) like lower('${decodeURI(search)}%')`)
    }

    async listBySearchResult ({params, request, response}) {
        const search = params.search

        return await Database
        .select('*')
        .from('hotels')
        .innerJoin('cities', 'hotels.id_city', 'cities.id')
        .whereRaw(`lower(hotels.title) like lower('${decodeURI(search)}%')`)
    }
}

module.exports = HotelController