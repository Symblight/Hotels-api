'use strict'

const Country = use('App/Models/Country')

class CountryController {
    async index ({response}) {
        let countries = await Country.all()

        return response.json(countries)
    }
    async show ({params, response}) {
        const country = await Country.find(params.id)

        return response.json(country)
    }

    async store ({request, response}) {
        const countryInfo = request.only(['value', 'text'])

        const country = new Country()
        country.value = countryInfo.value
        country.text = countryInfo.text

        await country.save()

        return response.status(201).json(country)
    }

    async update ({params, request, response}) {
        const countryInfo = request.only(['value', 'text'])

        const country = await Country.find(params.id)
        if (!country) {
          return response.status(404).json({data: 'Resource not found'})
        }
        country.value = countryInfo.value
        country.text = countryInfo.text

        await country.save()

        return response.status(200).json(country)
    }

      async delete ({params, response}) {
        const country = await Country.find(params.id)
        if (!country) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await country.delete()

        return response.status(204).json(null)
    }
}

module.exports = CountryController
