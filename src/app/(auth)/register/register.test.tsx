import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import RegisterPage from './page'


jest.mock('next/navigation', () =>({
  useRouter: jest.fn(),
}))



test('test navigation to dashboard page', () => {
  const mockPush = jest.fn()

  // @ts-ignore
  useRouter.mockReturnValue({
    push: mockPush
  })

  render(<RegisterPage/>)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(mockPush).toHaveBeenCalledWith('i')
})

describe('Form', () => {

  beforeEach(() =>{
    render(<RegisterPage/>)
  })

  it('form', () => {
    
    const form = screen.getByTestId('form')
 
    expect(form).toBeInTheDocument()
  })
  
  it('form filling', () => {
    
    const inputEmail = screen.getByRole('textbox')
    const inputPassword = screen.getByTestId('password')
    const formDiv = screen.getByTestId('form-div')
    const button = screen.getByRole('button')
 
    expect(inputEmail).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(formDiv).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})