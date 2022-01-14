import Allbirthdays from '../Pages/AllBirthdays'
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
                    <Allbirthdays />
                </Context.Provider>
            </MemoryRouter>
        )
    
        const text = screen.queryAllByText(/all birthdays/i)
        expect(text).not.toBeNull()
    })
})
