import BirthdaysPageTable from "./BirthdaysPageTable";

it('checks if todays birthdays table renders', () => {
  const component = <BirthdaysPageTable shouldRender />
  expect(component).toBeDefined()
})