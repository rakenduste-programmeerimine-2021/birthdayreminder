import LoginForm from './LoginForm'

it('checks if login form renders', () => {
    const component = <LoginForm shouldRender />
    expect(component).toBeDefined()
})