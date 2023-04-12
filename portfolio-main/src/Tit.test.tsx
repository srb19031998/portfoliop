import { render, screen } from '@testing-library/react'
import Title from './Tit'
import '@testing-library/jest-dom'
describe('Greet1111', () => {
  test('renders correctly', () => {
    render(<Title/>)
    const textElement = screen.getByText('Usecall backaaaaaaaaaaaa hook')
    expect(textElement).toBeInTheDocument()
  })})