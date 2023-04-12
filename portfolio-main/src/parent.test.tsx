import { render, screen } from '@testing-library/react'
import Count  from './title'
import Parent from './parent'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
describe('parent  testing', () => {
    test('count age works correctly', () => {
      render(<Count text="age" count={0}/>)
      const textElement = screen.getByText("Hello,age,howareyou--0")
      expect(textElement).toBeChecked
    }),
 
        test('count sal  works correctly', () => {
          render(<Count text="salary" count={50000}/>)
          const textElement = screen.getByText("Hello,salary,howareyou--50000")
          expect(textElement).toBeChecked
        })
        test('parent sal  works correctly', () => {
            render(<Parent/>)
            const textElement = screen.findAllByText("hi")
            expect(textElement).toBeChecked
          })
})