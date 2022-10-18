import counterSlice, { increment, decrement, setStep } from 'engine/store/modules/counter/slice';

describe('Counter slice works', () => {
  test('increment', () => {
    expect(counterSlice({
      value: 0,
      step: 1
    }, increment()))
        .toEqual({
          value: 1,
          step: 1
        })
  })

  test('decrement', () => {
    expect(counterSlice({
      value: 0,
      step: 1
    }, decrement()))
        .toEqual({
          value: -1,
          step: 1
        })
  })

  test('step', () => {
    expect(counterSlice({
      value: 0,
      step: 1
    }, setStep(3)))
        .toEqual({
          value: 0,
          step: 3
        })
  })
})