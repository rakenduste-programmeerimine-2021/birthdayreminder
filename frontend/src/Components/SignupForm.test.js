import SignupForm from './SignupForm'

it('checks if signup form renders', () => {
    const component = <SignupForm shouldRender />
    expect(component).toBeDefined()
})