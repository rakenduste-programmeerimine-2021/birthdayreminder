import UpcomingBirthdaysTable from '../Components/UpcomingBirthdaysTable'

it('checks if upcoming birthdays table renders', () => {
    const component = <UpcomingBirthdaysTable shouldRender />
    expect(component).toBeDefined()
})