const User = require('../src/models/User')
const assert = require('assert') 

describe('Create new user and login test', () => {
    let user
        beforeEach((done) => {
            user = new User({
                firstName: 'blablabla',
                lastName: 'blabla',
                email: 'test@email.ee',
                password: 'kasutaja'
            })
            user.save()
            .then(() => done())
        })


    it('Creates a new user', (done) => {
        assert(!user.isNew)
        done()
    })

    it('tests logging in', (done) => {
        let newUser = User.findOne({ email: 'test@email.ee' })
        done()
        .then(() => {
            assert(newUser.email === 'test@email.ee', newUser.password === 'kasutaja')
            done()
        })
    })
 })
    