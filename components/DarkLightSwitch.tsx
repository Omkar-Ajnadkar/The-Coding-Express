/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const DarkLightSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  })
  if (!mounted) {
    return null
  }
  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}>
      {resolvedTheme === 'dark' ? (
        <SunIcon className='h-6 w-6 text-[gray]' />
      ) : (
        <MoonIcon className='h-6 w-6 text-[gray]' />
      )}
    </button>
  )
}

export default DarkLightSwitch
