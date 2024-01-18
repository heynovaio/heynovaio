## Getting started

Heynovaio uses [Netlify cli](https://docs.netlify.com/cli/get-started/), to start dev server:

```sh
netlify link # link up local repo with netlify
netlify dev # start dev server
```

## Troubleshooting

- `Error: error:0308010C:digital envelope routines::unsupported`
  - [StackOverflow](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)

```sh
npm_config_yes=true npx yarn-audit-fix
```
