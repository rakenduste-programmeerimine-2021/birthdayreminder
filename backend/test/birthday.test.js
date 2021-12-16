const Birthday = require('../src/models/Birthday')
const assert = require('assert') 
const ObjectID = require('mongodb').ObjectId;

describe('Birthday tests', () => {
    let bday
        beforeEach((done) => {
            bday = new Birthday({
                firstName: 'blablabla',
                lastName: 'blabla',
                birthDay: '25-08-2000',
                createdBy: ObjectID('507f1f77bcf86cd799439011')
            })
            bday.save()
            .then(() => done())
        })


    it('Creates a new birthday', (done) => {
        assert(!bday.isNew)
        done()
    })

    it('Updates a bithday by id', (done) => {
        bday.updateOne({ firstName: 'bloop' })
        .then(() => Birthday.findOne({ firstName: 'bloop' }))
        .then((bday) => {
            assert(bday.firstName === 'bloop')
            done()
        })
    })

    it('Deletes a birthday by id', (done) => {
        bday.remove()
        .then(() => Birthday.findOne({ _id: ObjectID('507f1f77bcf86cd799439011') }))
        .then((bday) => {
            assert(bday === null)
            done()
        })
    })
})
    