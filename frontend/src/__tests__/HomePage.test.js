import HomePage from "../Pages/HomePage";
import { render, screen } from '@testing-library/react'
import { Context } from '../store'

describe('Homepage test', () => {
    const context = {
        'birthdays':[],
        'auth':null,

    }
    const dispatch = jest.fn

    it('checks if text exists', () => {
        render(
            <Context.Provider value={[context, dispatch]}>
                <HomePage />
            </Context.Provider>
        )
        const randomText = screen.queryByText(/it's easy!/i)
        expect(randomText).toBeInTheDocument()
    })

    it('checks if login button exists', () => {
        render(
            <Context.Provider value={[context, dispatch]}>
                <HomePage />
            </Context.Provider>
        )
        const randomText = screen.queryByText(/log in/i)
        expect(randomText).toBeInTheDocument()
    })
})

