export type ClientOptions = { apiKey: string; baseUrl?: string };

export function newClient({ apiKey, baseUrl = "https://api.example.com" }: ClientOptions) {
  return {
    async health() {
      const response = await fetch(`${baseUrl}/health`, {
        headers: { authorization: `Bearer ${apiKey}` },
      });
      return response.text();
    },
  };
}
