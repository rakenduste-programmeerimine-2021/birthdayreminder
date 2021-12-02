import AllBirthdaysTable from './AllBirthdaysTable'

it('checks if all birthdays table renders', () => {
    const component = <AllBirthdaysTable shouldRender />
    expect(component).toBeDefined()
})