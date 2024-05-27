import type { VercelRequest, VercelResponse } from '@vercel/node';

let requestCount = 0;

export default function handler(req: VercelRequest, res: VercelResponse) {
  requestCount += 1;

  if (requestCount % 20 === 0) {
    return res.status(500).json({
      error: 'Internal Server Error',
      message: 'This is the 20th request, triggering an error as per design.',
    });
  }

  const { name = 'World' } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
}
