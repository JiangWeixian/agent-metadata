import { aiou } from '@aiou/eslint-config'

const config = await aiou({ ssr: false })

export default [
  ...config,
  {
    ignores: [
      'packages/data/dist/**',
      'packages/data/dist-src/**',
      'packages/probe/.acp-cache/**',
      'packages/probe/cache/**',
      'packages/probe/node_modules/**',
      '.agents/**',
      'docs/**',
    ],
  },
  {
    rules: {
      'unicorn/import-style': 'off',
      'etc/no-t': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
]
