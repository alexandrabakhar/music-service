import { fireEvent, screen } from '@testing-library/react'
import { HandlerThemeSwitch } from './HandlerThemeSwitch'
import { customRender } from '../../test-utils' 
import '@testing-library/jest-dom'

describe('<HandlerThemeSwitch />', () => {
  it('Цветовая тема меняется по клику', () => {
    customRender(<HandlerThemeSwitch />)

    const svgElement = screen.getByTestId('theme-switcher-svg')
    const useElement = screen.getByTestId('theme-switcher-use')

    expect(useElement.getAttribute('xlink:href')).toEqual('switch.svg#icon-night')

    fireEvent.click(svgElement)

    expect(useElement.getAttribute('xlink:href')).toEqual('switch.svg#icon-day')
  })
})