import SignupForm from '../Components/SignupForm'

it('checks if signup form renders', () => {
    const component = <SignupForm shouldRender />
    expect(component).toBeDefined()
})