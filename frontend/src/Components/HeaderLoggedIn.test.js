import HeaderLoggedIn from './HeaderLoggedIn'

it('checks if after log in header component renders', () => {
    const component = <HeaderLoggedIn shouldRender />
    expect(component).toBeDefined()
})

