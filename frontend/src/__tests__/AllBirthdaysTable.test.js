import AllBirthdaysTable from '../Components/AllBirthdaysTable'

it('checks if all birthdays table renders', () => {
    const component = <AllBirthdaysTable shouldRender />
    expect(component).toBeDefined()
})