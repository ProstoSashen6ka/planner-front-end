import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Auth from './AuthComponent'



describe('Auth', () => {

  beforeEach(() =>{
    render(<Auth/>)
  })
  
  it('nav', () => {
    
    const nav = screen.getByRole('navigation')
 
    expect(nav).toBeInTheDocument()
  })
  
  it('Login Link', () => {
    
    const login = screen.getByText('Login')
    
    expect(login).toBeInTheDocument()
  })

  it('Register Link', () => {
    
    const register = screen.getByText('Register')
    
    expect(register).toBeInTheDocument()
  })
})