import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Nav from './Navigation'

beforeEach(() =>{
    render(<Nav/>)
  })

describe('Nav', () => {

  
  it('nav', () => {
    
    const nav = screen.getByRole('navigation')
 
    expect(nav).toBeInTheDocument()
  })
  
  it('Dashboard Link', () => {
    
    const dashboard = screen.getByText('Dashboard')
    
    expect(dashboard).toBeInTheDocument()
  })

  it('Pomodoro Link', () => {
    
    const pomodoro = screen.getByText('Pomodoro')
    
    expect(pomodoro).toBeInTheDocument()
  })

  it('Tasks Link', () => {
    
    const tasks = screen.getByText('Tasks')
    
    expect(tasks).toBeInTheDocument()
  })

  it('Time Blocking Link', () => {
    
    const timeBlocking = screen.getByText('Time Blocking')
    
    expect(timeBlocking).toBeInTheDocument()
  })

  it('Settings Link', () => {
    
    const settings = screen.getByText('Settings')
    
    expect(settings).toBeInTheDocument()
  })
})