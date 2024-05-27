import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World 3' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}
