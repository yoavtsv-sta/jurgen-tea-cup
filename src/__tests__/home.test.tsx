import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home page', () => {
  it('renders the brand heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /jurgen tea cup co/i })).toBeInTheDocument()
  })
})
