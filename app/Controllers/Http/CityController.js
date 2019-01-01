'use strict'

const City = use('App/Models/City')
const Database = use('Database')

class CityController {
    async index ({response}) {
        let cities = await City.all()

        return response.json(cities)
    }
    async show ({params, response}) {
        const city = await City.find(params.id)

        return response.json(city)
    }

    async store ({request, response}) {
        const cityInfo = request.only(['value', 'text', 'id_country'])

        const city = new City()
        city.value = cityInfo.value
        city.text = cityInfo.text
        city.id_country = cityInfo.id_country

        await city.save()

        return response.status(201).json(city)
    }

    async update ({params, request, response}) {
        const cityInfo = request.only(['value', 'text', 'id_country'])

        const city = await City.find(params.id)
        if (!city) {
          return response.status(404).json({data: 'Resource not found'})
        }
        city.value = cityInfo.value
        city.text = cityInfo.text
        city.id_country = cityInfo.id_country

        await city.save()

        return response.status(200).json(city)
    }

    async delete ({params, response}) {
        const city = await City.find(params.id)
        if (!city) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await city.delete()

        return response.status(204).json(null)
    }

    async showByCountry ({request, response}) {
        const countryValue = request.only(['id_country'])
        
            return await Database
            .table('cities')
            .where('id_country', countryValue.id_country)
    }
       
}

module.exports = CityController

