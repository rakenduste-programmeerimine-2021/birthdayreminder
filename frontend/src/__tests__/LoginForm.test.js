import LoginForm from '../Components/LoginForm'

it('checks if login form renders', () => {
    const component = <LoginForm shouldRender />
    expect(component).toBeDefined()
})
