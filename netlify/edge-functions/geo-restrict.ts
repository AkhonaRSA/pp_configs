import type { Config, Context } from '@netlify/edge-functions'

const ALLOWED_COUNTRIES = ['ZA']

export default async (req: Request, context: Context) => {
  const country = context.geo?.country?.code

  if (country && ALLOWED_COUNTRIES.includes(country)) {
    return
  }

  return new Response(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Not available in your region</title>
    <style>
      body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
        font-family: system-ui, sans-serif; background: #050816; color: #fff; text-align: center; padding: 1.5rem; }
      p { color: #aaa6c3; }
    </style>
  </head>
  <body>
    <main>
      <h1>Not available in your region</h1>
      <p>This website is only available to visitors in South Africa.</p>
    </main>
  </body>
</html>`,
    {
      status: 451,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
      },
    },
  )
}

export const config: Config = {
  path: '/*',
}
