# jest-extended-global-fail-pass

Use jest extended fail &amp; pass global instead of expect(1).fail &amp; expect(1).pass

## Usage

```bash
yarn add --dev jest jest-extended jest-extended-global-fail-pass
```

```js
// jest.config.js
setupFilesAfterEnv: ['jest-extended-global-fail-pass/setup'],
```

```js
// in your jest test file
test('test fail', () => {
  // use fail as a global function instead of expect(1).fail('message')
  fail('message')
})

test('test pass', () => {
  // use pass as a global function instead of expect(1).pass('message')
  pass('message')
})
```

## Use TypeScript

Put a `typings.d.ts` file in your tests directory:

```ts
import 'jest-extended'
import 'jest-extended-global-fail-pass'
```

More to read https://github.com/jest-community/jest-extended
