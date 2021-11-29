import AddBirthdayForm from './AddBirthdayForm'

it('checks if add birthday form form renders', () => {
    const component = <AddBirthdayForm shouldRender />
    expect(component).toBeDefined()
})
