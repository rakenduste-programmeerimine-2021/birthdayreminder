import ErrorPage from "../Pages/ErrorPage";
import { render, screen } from '@testing-library/react'
import { Context } from '../store'

describe('Error page test', () => {
    const context = {
        'birthdays':[],
        'auth':null
    }
    const dispatch = jest.fn

    it('checks if text exists', () => {
        render(
            <Context.Provider value={[context, dispatch]}>
                <ErrorPage />
            </Context.Provider>
        )
        const randomText = screen.queryByText(/back home/i)
        expect(randomText).toBeInTheDocument()
    })
})

