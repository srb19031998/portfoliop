import { render, screen } from '@testing-library/react'
import Count  from './title'
import '@testing-library/jest-dom'
describe('count testing', () => {
  test('count works correctly', () => {
    render(<Count text="age" count={0}/>)
    const textElement = screen.getByText("Hello,age,howareyou--0")
    expect(textElement).toBeChecked
  })})