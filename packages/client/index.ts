export type ClientOptions = { apiKey: string; baseUrl?: string };

export function createClient(apiKey: string, baseUrl = "https://api.example.com") {
  return {
    async health() {
      const response = await fetch(`${baseUrl}/health`, {
        headers: { authorization: `Bearer ${apiKey}` },
      });
      return response.text();
    },
  };
}
