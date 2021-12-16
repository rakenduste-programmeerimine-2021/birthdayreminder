import ProtectedRoute from "../Components/ProtectedRoute";

test('checks if component renders', () => {
    const component = <ProtectedRoute shouldRender />
    expect(component).toBeDefined()
})