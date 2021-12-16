import LoadingAnimation from "../Components/LoadingAnimation"
import { screen, render } from '@testing-library/react'

test("checks if word arbuus does not exist", () => {
    render(<LoadingAnimation />)

    const randomText = screen.queryByText(/arbuus/i)
    expect(randomText).toBeNull()
})