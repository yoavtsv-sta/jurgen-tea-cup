import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home page', () => {
  it('renders the brand heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /jurgen tea cup co/i })).toBeInTheDocument()
  })

  it('renders the order button', () => {
    render(<Home />)
    const orderButtons = screen.getAllByRole('link', { name: /order now/i })
    expect(orderButtons.length).toBeGreaterThan(0)
  })

  it('renders the story section', () => {
    render(<Home />)
    expect(screen.getByText(/the jurgen story/i)).toBeInTheDocument()
  })
})
