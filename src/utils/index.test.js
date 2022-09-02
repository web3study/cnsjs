import { validateName, namehash } from './'

test('validateName returns true for valid names', () => {
  expect(validateName('vitalik')).toBe('vitalik')
  expect(validateName('Vitalik')).toBe('vitalik')
  expect(validateName('Vitalik.cfx')).toBe('vitalik.cfx')
  expect(validateName('sub.Vitalik.cfx')).toBe('sub.vitalik.cfx')
})

test('validateName returns false for invalid names', () => {
  expect(() => validateName('$vitalik')).toThrowError('Illegal char $')
  expect(() => validateName('#vitalik')).toThrowError('Illegal char #')
  expect(() => validateName('vitalik ')).toThrowError('Illegal char ')
})
