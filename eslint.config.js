// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [

    ],
  },
  {
    rules: {
      // overrides
      'no-console': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
)
