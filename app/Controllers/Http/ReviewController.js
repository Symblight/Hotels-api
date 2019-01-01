'use strict'

const Review = use('App/Models/Review')
const Database = use('Database')

class ReviewController {
    async index ({response}) {
        let reviews = await Review.all()

        return response.json(reviews)
    }
    async show ({params, response}) {
        const review = await Review.find(params.id)

        return response.json(review)
    }

    async store ({request, response}) {
        const reviewInfo = request.only(['hotel_id', 'title', 'text'])

        const review = new Review()
        review.hotel_id = reviewInfo.hotel_id
        review.title = reviewInfo.title
        review.text = reviewInfo.text
        review.user_id = null // USER ID

        await review.save()

        return response.status(201).json(review)
    }

    async update ({params, request, response}) {
        const reviewInfo = request.only(['hotel_id', 'title', 'text'])

        const review = await Review.find(params.id)
        if (!review) {
          return response.status(404).json({data: 'Resource not found'})
        }
        review.hotel_id = reviewInfo.hotel_id
        review.title = reviewInfo.title
        review.text = reviewInfo.text

        await review.save()

        return response.status(200).json(review)
    }

    async delete ({params, response}) {
        const review = await Review.find(params.id)
        if (!review) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await review.delete()

        return response.status(204).json(null)
    }

    async showByHotel ({params, response}) {
        return await Database
        .select('*')
        .table('reviews')
        .where('hotel_id', params.id)
    }
}

module.exports = ReviewController
