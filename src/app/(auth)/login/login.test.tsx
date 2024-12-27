import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import LoginPage from './page'
import { useRouter } from 'next/navigation'


jest.mock('next/navigation', () =>({
  useRouter: jest.fn(),
}))



test('test navigation to dashboard page', () => {
  const mockPush = jest.fn()

  // @ts-ignore
  useRouter.mockReturnValue({
    push: mockPush
  })

  render(<LoginPage/>)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(mockPush).toHaveBeenCalledWith('i')
})

describe('Form', () => {

  beforeEach(() =>{
    render(<LoginPage/>)
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


