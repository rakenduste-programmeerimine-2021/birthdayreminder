import UpcomingBirthdaysTable from './UpcomingBirthdaysTable'

it('checks if upcoming birthdays table renders', () => {
    const component = <UpcomingBirthdaysTable shouldRender />
    expect(component).toBeDefined()
})