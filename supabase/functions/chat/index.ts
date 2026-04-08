// @ts-nocheck — Deno runtime, types not available in VSCode without Deno extension

const ALLOWED_ORIGINS = [
  'https://joliment.fr',
  'https://www.joliment.fr',
  'https://jeanlisek.github.io',
  'http://localhost',
  'http://127.0.0.1',
];

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.some(o => origin.startsWith(o))
    ? origin
    : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const headers = corsHeaders(origin);

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers });
  }

  try {
    const { messages, system } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'messages required' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const mistralMessages = [
      { role: 'system', content: system ?? '' },
      ...messages.slice(-10),
    ];

    const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('MISTRAL_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: mistralMessages,
        max_tokens: 400,
        temperature: 0.6,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Mistral error:', err);
      throw new Error('Mistral API error: ' + res.status);
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }
});
