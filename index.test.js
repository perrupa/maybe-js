import { Maybe, None, Some } from '.'

test('Maybe maps over a value when present', () => {
  let value = null;
  Maybe(3).map( i => value = i )

  expect(value).toBe(3)
})

test('Does not map when there is no value', () => {
  let value = undefined;
  Maybe(null).map( i => value = i )

  expect(value).toBeUndefined()
})
