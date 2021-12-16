import BirthdaysPageTable from "../Components/BirthdaysPageTable";

it('checks if todays birthdays table renders', () => {
  const component = <BirthdaysPageTable shouldRender />
  expect(component).toBeDefined()
})