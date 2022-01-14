import LoginPage from '../Pages/LoginPage'
import { render, screen } from '@testing-library/react'
import { Context } from '../store'
import { MemoryRouter } from 'react-router-dom'

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    }
}

describe('Login page', () => {
    const context = {
        birthdays: [],
        auth: {
            token: null,
            user: null
        }
    }
    const dispatch = jest.fn
    
    it('checks if page title exists', () => {
        render(
            <MemoryRouter>
                <Context.Provider value={[context, dispatch]}>
                    <LoginPage />
                </Context.Provider>
            </MemoryRouter>
        )
    
        const text = screen.queryAllByText(/log in!/i)
        expect(text).not.toBeNull()
    })
})
